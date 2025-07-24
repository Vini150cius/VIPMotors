import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function UserRoutes() {
  const token = useSelector((state) => state.userReducer.token);
  return token ? <Outlet /> : <Navigate to="/login" />;
}
