import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserWrapper from "./context/user.context";
import ROUTES from "./routes";

function App() {
  return (
    <div className="App">
      <UserWrapper>
        <Navbar />
        <Routes>
          {ROUTES.map((element) => {
            return <Route key={element.path} {...element} />;
          })}
        </Routes>
      </UserWrapper>
    </div>
  );
}

export default App;
