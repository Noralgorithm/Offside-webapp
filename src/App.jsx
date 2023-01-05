import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./cores/auth/registration/Register";
import Login from "./cores/auth/login/Login";
import Homepage from "./cores/homepage/Homepage";
import Dashboard from "./cores/dashboard/Dashboard";
import { useDispatch } from "react-redux";
import { login } from "./features/user/userSlice";
import ProtectedRoutes from "./cores/auth/login/ProtectedRoutes";
import UnprotectedRoutes from "./cores/auth/login/UnprotectedRoutes";
import Index from "./cores/album/Index";
import Inventory from "./cores/album/inventario/Inventory";
import Profile from "./cores/profile/Profile";
import Market from "./cores/market/Market";
import { Fantasy as Plantilla } from "./cores/fantasy/squad/Fantasy";

const App = () => {
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("loggedUser"));

  if (data) {
    dispatch(login(data));
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UnprotectedRoutes />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="album" element={<Index />} />
            <Route path="album/inventory" element={<Inventory />} />
            <Route path="market" element={<Market />} />
            <Route path="profile" element={<Profile />} />
            <Route path="fantasy" element={<Plantilla />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
