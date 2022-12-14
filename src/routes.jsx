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
import SingleGoal from "./pages/single-goal";
import UnauthenticatedWrapper from "./wrapper/unauthenticated.wrapper";
import AuthenticatedWrapper from "./wrapper/authenticated.wrapper";
import ProfileEdit from "./pages/profile-edit";

export const STATUS = {
  NOT_LOGGED_IN: "NOT_LOGGED_IN",
  LOGGED_IN: "LOGGED_IN",
  DONT_CARE: "DONT_CARE",
};

const ROUTES = [
  {
    path: APP_PATHS.HOME,
    element: <Home />,
    name: "Home",
    status: STATUS.DONT_CARE,
  },
  {
    path: APP_PATHS.CREATE_PROCESS,
    element: <CreateProcess />,
    name: "Create Process",
    status: STATUS.LOGGED_IN,
  },
  {
    path: APP_PATHS.DASHBOARD,
    element: (
      <AuthenticatedWrapper>
        <Dashboard />
      </AuthenticatedWrapper>
    ),
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
    element: (
      <UnauthenticatedWrapper>
        <Login />
      </UnauthenticatedWrapper>
    ),
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
    element: (
      <UnauthenticatedWrapper>
        <SignUp />
      </UnauthenticatedWrapper>
    ),
    name: "Sign Up",
    status: STATUS.NOT_LOGGED_IN,
  },
  {
    path: APP_PATHS.SINGLE_PROCESS,
    element: <SingleProcess />,
    name: "Doesnt matter now",
    status: STATUS.LOGGED_IN,
  },
  {
    path: APP_PATHS.SINGLE_GOAL,
    element: <SingleGoal />,
    name: "Single Goal",
    status: STATUS.LOGGED_IN,
  },
  {
    path: APP_PATHS.PROFILE_EDIT,
    element: <ProfileEdit />,
    name: "Profile Edit",
    status: STATUS.LOGGED_IN,
  },
];

export default ROUTES;
