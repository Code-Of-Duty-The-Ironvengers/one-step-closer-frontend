import APP_PATHS from "./app-paths";
import CreateProcess from "./pages/create-process";
import Dashboard from "./pages/dashboard";
import GoalsCreate from "./pages/goals-create";
import GoalsDashboard from "./pages/goals-dashboard";
import GoalsEdit from "./pages/goals-edit";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import SignUp from "./pages/sign-up";
import SingleProcess from "./pages/single-process";

const STATUS = {
  NOT_LOGGED_IN: "NOT_LOGGED_IN",
  LOGGED_IN: "LOGGED_IN",
};

const ROUTES = [
  { path: APP_PATHS.HOME, element: <Home />, name: "Home" },
  {
    path: APP_PATHS.CREATE_PROCESS,
    element: <CreateProcess />,
    name: "Create Process",
    status: STATUS.LOGGED_IN,
  },
  {
    path: APP_PATHS.DASHBOARD,
    element: <Dashboard />,
    name: "Dashboard",
    status: STATUS.LOGGED_IN,
  },
  {
    path: APP_PATHS.GOALS_CREATE,
    element: <GoalsCreate />,
    name: "Create a Goal",
    status: STATUS.LOGGED_IN,
  },
  {
    path: APP_PATHS.GOALS_DASHBOARD,
    element: <GoalsDashboard />,
    name: "See your goals",
    status: STATUS.LOGGED_IN,
  },
  {
    path: APP_PATHS.GOALS_EDIT,
    element: <GoalsEdit />,
    name: "Edit your goals",
    status: STATUS.LOGGED_IN,
  },
  {
    path: APP_PATHS.LOG_IN,
    element: <Login />,
    name: "Login",
    status: STATUS.NOT_LOGGED_IN,
  },
  {
    path: APP_PATHS.PROFILE,
    element: <Profile />,
    name: "Profilee",
    status: STATUS.LOGGED_IN,
  },
  {
    path: APP_PATHS.SIGN_UP,
    element: <SignUp />,
    name: "Sign Up",
    status: STATUS.NOT_LOGGED_IN,
  },
  {
    path: APP_PATHS.SINGLE_PROCESS,
    element: <SingleProcess />,
    name: "Doesnt matter now",
    status: STATUS.LOGGED_IN,
  },
];

export default ROUTES;
