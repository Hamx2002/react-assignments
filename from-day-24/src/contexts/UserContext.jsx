import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("Guest");

  const login = (name) => {
    setUserName(name);
  };

  const logout = () => {
    setUserName("Guest");
  };

  return (
    <UserContext.Provider value={{ userName, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
