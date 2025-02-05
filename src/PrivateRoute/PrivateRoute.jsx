import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg block mx-auto"></span>
    )
  }
  if (!user) {
    return <Navigate to="/signin"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
