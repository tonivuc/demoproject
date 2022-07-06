//Source: https://www.robinwieruch.de/react-router-authentication/

import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/unathorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
