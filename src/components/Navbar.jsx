import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../routes";

function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around" }}>
      {ROUTES.map((element) => {
        return (
          <Link key={element.path} to={element.path}>
            {element.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
