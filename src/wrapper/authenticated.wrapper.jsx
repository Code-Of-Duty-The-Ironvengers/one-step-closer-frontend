import React from "react";
import { Navigate } from "react-router-dom";
import APP_PATHS from "../app-paths";
import { useUser } from "../context/user.context";

function AuthenticatedWrapper({ children }) {
  const { user } = useUser();

  if (!user) {
    return <Navigate to={APP_PATHS.LOG_IN} replace />;
  }

  return <>{children}</>;
}

export default AuthenticatedWrapper;
