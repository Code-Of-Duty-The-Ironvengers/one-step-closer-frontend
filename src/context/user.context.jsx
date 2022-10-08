import { createContext, useContext, useEffect, useState } from "react";
import apiClient from "../service/api-client";

const UserContext = createContext();

export default function UserWrapper({ children }) {
  const [user, setUser] = useState(undefined);
  const [isLoadingUserState, setIsLoadingUserState] = useState(true);
  console.log("isLoadingUserState:", isLoadingUserState);

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
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoadingUserState(false);
      });
  }, []);

  if (isLoadingUserState) {
    return <h1>loading...</h1>;
  }

  return (
    <UserContext.Provider value={{ user, authenticate, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
