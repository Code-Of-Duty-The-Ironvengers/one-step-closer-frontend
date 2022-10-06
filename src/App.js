import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserWrapper from "./context/user.context";
import ROUTES, { STATUS } from "./routes";

function App() {
  return (
    <div className="App">
      <UserWrapper>
        <Navbar />
        <Routes>
          {ROUTES.filter((routeInformation) => {
            return (
              routeInformation.status === STATUS.NOT_LOGGED_IN ||
              routeInformation.status === STATUS.DONT_CARE
            );
          }).map(({ element: Element, ...element }) => {
            return (
              <Route
                key={element.path}
                {...element}
                element={<Element />}

                // path={element.path}
                // element={element.element}
              />
            );
          })}
        </Routes>
      </UserWrapper>
    </div>
  );
}

export default App;
