import React from "react";
import { loginUser } from "../api/auth";

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(null);

  const handleLogin = async (username, password) => {
    const {data} = await loginUser(username, password);
    const {user, token} = data;
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    doLogin: handleLogin,
    doLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
