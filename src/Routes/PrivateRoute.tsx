import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem("authToken");
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
