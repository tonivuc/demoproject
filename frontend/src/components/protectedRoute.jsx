import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("User is " + JSON.stringify(user));

  if (!user) {
    return <Navigate to="/unathorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
