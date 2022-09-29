import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ROUTES from "./routes";

function App() {
  return (
    <div className="App">
      <Navbar />
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
