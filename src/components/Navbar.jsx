import React from "react";
import { Link } from "react-router-dom";
import ROUTES, { STATUS } from "../routes";
import { useUser } from "../context/user.context";

function Navbar() {
  const { user } = useUser();

  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        {ROUTES.filter((routeInformation) => {
          if (user) {
            return routeInformation.status !== STATUS.NOT_LOGGED_IN;
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
      {user && <p>Hey {user.username}</p>}
    </div>
  );
}

export default Navbar;
