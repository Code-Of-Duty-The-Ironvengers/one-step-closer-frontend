import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ROUTES, { STATUS } from "./routes";
import axios from "axios";
import { useEffect, useState } from "react";

const getMeUrl = process.env.REACT_APP_BACKEND_URL + "/auth/get-me";
console.log("GetMeUrl:", getMeUrl);

function App() {
  const [user, setUser] = useState(undefined);

  function authenticateUser({ user, token }) {
    setUser(user);
    localStorage.setItem("ACCESS_TOKEN_SUPER_SAFE", token);
  }

  useEffect(() => {
    axios
      .post(getMeUrl, {
        token: localStorage.getItem("ACCESS_TOKEN_SUPER_SAFE"),
      })
      .then((result) => {
        console.log("result:", result);
        setUser(result.data.user);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, []);

  return (
    <div className="App">
      <Navbar {...user} />
      <Routes>
        {ROUTES.filter((routeInformation) => {
          if (user) {
            return true;
          }

          return (
            routeInformation.status === STATUS.NOT_LOGGED_IN ||
            routeInformation.status === STATUS.DONT_CARE
          );
        }).map(({ element: Element, ...element }) => {
          return (
            <Route
              key={element.path}
              {...element}
              element={<Element authenticateUser={authenticateUser} />}

              // path={element.path}
              // element={element.element}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
