import React from "react";
import { loginUser } from "../api/auth";

const AuthContext = React.createContext(null);

//TODO: Persist user in session or localstorage
const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const handleLogin = async (username, password) => {
    const { data } = await loginUser(username, password);
    setUser(data);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const value = {
    user,
    doLogin: handleLogin,
    doLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
