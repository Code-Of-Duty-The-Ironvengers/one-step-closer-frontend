import { createContext, useContext, useEffect, useState } from "react";
import apiClient from "../service/api-client";

const UserContext = createContext();

export default function UserWrapper({ children }) {
  const [user, setUser] = useState(undefined);
  console.log("user:", user);

  function authenticate({ user, token }) {
    setUser(user);
    localStorage.setItem("ACCESS_TOKEN_SUPER_SAFE", token);
  }

  function logout() {
    localStorage.removeItem("ACCESS_TOKEN_SUPER_SAFE");
    setUser(undefined);
  }

  useEffect(() => {
    apiClient
      .get("/auth/get-me")
      .then((result) => {
        setUser(result.data.user);
      })
      .catch(console.error);
  }, []);

  return (
    <UserContext.Provider value={{ user, authenticate, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
