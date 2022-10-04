import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ROUTES, { STATUS } from "./routes";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [user, setUser] = useState(undefined);

  function authenticateUser(user) {
    setUser(user);
  }

  useEffect(() => {
    axios
      .get("http://localhost:5005")
      .then((result) => {
        setData(result.data.hiClass);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, []);

  return (
    <div className="App">
      <Navbar {...user} />
      <h1>{data}</h1>
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
