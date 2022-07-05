import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  console.log("Token is "+token)

  if (!token) {
    return <Navigate to="/unathorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
