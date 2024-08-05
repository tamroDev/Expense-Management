import { Navigate } from "react-router-dom";
import useAuth from "../../customHooks/useAuth";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
