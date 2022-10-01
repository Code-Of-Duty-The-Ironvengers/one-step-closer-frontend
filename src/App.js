import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ROUTES from "./routes";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

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
      <Navbar />
      <h1>{data}</h1>
      <Routes>
        {ROUTES.map((element) => {
          return (
            <Route
              key={element.path}
              {...element}
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
