import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../service/api-client";

function GoalsDashboard() {
  const [goals, setGoals] = useState();
  console.log("goals:", goals);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .get("/dashboard")
      .then((result) => {
        setGoals(result.data);
      })
      .catch((err) => {
        console.log("err:", err);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <h1>all of the goals</h1>

      {goals.map((goal) => {
        return (
          <div
            onClick={() => {
              navigate(`/goal/${goal.slug}`);
            }}
            key={goal._id}
          >
            {goal.title}
          </div>
        );
      })}
    </div>
  );
}

export default GoalsDashboard;
