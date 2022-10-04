import React from "react";
import { Link } from "react-router-dom";
import ROUTES, { STATUS } from "../routes";

function Navbar({ username }) {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        {ROUTES.filter((routeInformation) => {
          if (username) {
            return true;
          }

          return (
            routeInformation.status === STATUS.NOT_LOGGED_IN ||
            routeInformation.status === STATUS.DONT_CARE
          );
        }).map((element) => {
          return (
            <Link key={element.path} to={element.path}>
              {element.name}
            </Link>
          );
        })}
      </nav>
      {username && <p>Hey {username}</p>}
    </div>
  );
}

export default Navbar;
