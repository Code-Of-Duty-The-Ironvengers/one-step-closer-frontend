import React from "react";
import { Navigate } from "react-router-dom";
import APP_PATHS from "../app-paths";
import { useUser } from "../context/user.context";

function AdminWrapper({ children }) {
  const { user } = useUser();

  if (!user) {
    return <Navigate to={APP_PATHS.LOG_IN} replace />;
  }

  if (user.role !== "ADMIN") {
    return <Navigate to={APP_PATHS.HOME} replace />;
  }

  return <>{children}</>;
}

export default AdminWrapper;
