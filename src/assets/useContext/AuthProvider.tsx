import Cookies from "js-cookie";
import React, { createContext, ReactNode, useState } from "react";
type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<{
  user: boolean;
  login: () => void;
  logout: () => void;
}>({
  user: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const initialState = Cookies.get("userToken") ? true : false;
  const [user, setUser] = useState(initialState);

  const login = () => setUser(true);
  const logout = () => setUser(false);

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
