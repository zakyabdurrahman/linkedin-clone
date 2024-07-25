import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

export function LoginProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(false);
  }, []);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
}
