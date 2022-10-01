import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams, Navigate } from "react-router-dom";

// The objective of the practice is to, with an API call, retrieve the info from this single goal
// You will need to do something on the backend to search for the specific goal and send the correct version
// You dont need to do any styling, as far as Andre cares, if it appears in the console, it should be fine. Props (not react props, but like YAY Props)  if you do in fact play with styling, though

function SingleGoal() {
  const [data, setData] = useState({});
  // const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { title } = useParams();
  // const location = useLocation();

  // useEffect(() => {
  //   setIsLoading(true);

  //   axios
  //     .get(`http://localhost:5005/dashboard`)
  //     .then((result) => {
  //       setData(result.data.goals);
  //     })
  //     .catch((err) => {
  //       console.log("err:", err);
  //       setIsError(true);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [title]);
  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`http://localhost:5005/dashboard/${title}`)
      .then((result) => {
        setData(result.data.goal);
      })
      .catch((err) => {
        console.log("err:", err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [title]);

  console.log("HEY THERE");

  return (
    <div>
      <article key={data.slug}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </article>
      {/* Three ounces of sugar, 2 spoons full of love and Boom, you get a filter */}
      {/* {data
        .filter((goal) => {
          // return goal.slug === title;
          return (
            goal.slug === location.pathname.slice(6, location.pathname.length)
          );
        })
        .map((goal) => {
          // window.location is also similar to useLocation
          return (
            <article key={goal.slug} style={{ cursor: "pointer" }}>
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
            </article>
          );
        })} */}
    </div>
  );
}

export default SingleGoal;
