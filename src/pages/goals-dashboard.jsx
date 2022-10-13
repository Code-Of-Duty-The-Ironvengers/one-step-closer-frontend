import React, { useEffect, useState } from "react";
import apiClient from "../service/api-client";

function GoalsDashboard() {
  const [data, setData] = useState([]);
  console.log("data:", data);

  useEffect(() => {
    apiClient
      .get("/dashboard")
      .then((result) => {
        setData(result.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>all the goals</h1>

      {data.map((goal) => {
        return <div key={goal._id}>{goal.title}</div>;
      })}
    </div>
  );
}

export default GoalsDashboard;
