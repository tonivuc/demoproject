import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/unathorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
