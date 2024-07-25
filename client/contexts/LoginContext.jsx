import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
}
