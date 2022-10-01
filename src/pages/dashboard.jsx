import axios from "axios";
import { differenceInCalendarDays } from "date-fns";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  // useState and useEffect
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:5005/dashboard")
      .then((result) => {
        setData(result.data.goals);
      })
      .catch((err) => {
        console.log("err:", err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Getting data...</div>;
  }

  if (isError) {
    return <div>Doh</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {data.map((goal) => {
          return (
            <article
              key={goal.slug}
              onClick={() => {
                navigate(`/goal/${goal.slug}`);
              }}
              style={{ cursor: "pointer" }}
            >
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
              <div>
                {differenceInCalendarDays(new Date(goal.deadline), new Date())}{" "}
                days left
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
