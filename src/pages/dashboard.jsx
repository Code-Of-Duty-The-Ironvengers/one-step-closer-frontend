import React from "react";
import { addMonths, differenceInCalendarDays } from "date-fns";
import slugify from "slugify";
import { Link } from "react-router-dom";

const FAKE_GOALS = [
  {
    title: "Get a job",
    description:
      "Make money. I payed for the bootcamp and now my finances are in need of some love",
    deadline: addMonths(new Date(), 2),
    slug: slugify("Get a job", { lower: true }),
  },
  {
    title: "Save money",
    description:
      "Save money. I payed for the bootcamp and now my finances are in need of some love",
    deadline: new Date("2023-07-01"),
    slug: slugify("Save money", {
      lower: true,
    }),
  },
];

function Dashboard() {
  function goToGoal() {}

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {FAKE_GOALS.map((goal) => {
          return (
            <article style={{ cursor: "pointer" }}>
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
              <div>
                {differenceInCalendarDays(goal.deadline, new Date())} days left
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
