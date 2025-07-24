import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "@/pages/auth/Login/Login";
import { DashboardAdmin } from "./pages/admin/Dashboard/Dashboard";
import { Home } from "./pages/Home/Home";
import { CarList } from "./pages/user/CarList/CarList";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />

        <Route element={<UserRoutes />}>
          <Route element={<CarList />} path="/cars" />
        </Route>

        <Route element={<AdminRoutes />} path="/admin">
          <Route element={<DashboardAdmin />} path="dashboard" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
