import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoutes() {
  const token = useSelector((state) => state.userReducer.token);
  const isAdmin =
    useSelector((state) => state.userReducer.userType) === "admin";

  if (!(token && isAdmin)) return <Navigate to="/login" />;
  return <Outlet />;
}
