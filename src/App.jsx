import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Register from "./cores/auth/registration/Register";
import Login from "./cores/auth/login/Login";
import Homepage from "./cores/homepage/Homepage";
import Dashboard from "./cores/dashboard/Dashboard";
import Auth from "./cores/auth/login/Auth";
import { useDispatch } from "react-redux";
import { login } from "./features/user/userSlice";

const App = () => {
  
  const dispatch = useDispatch();

  const data = JSON.parse(localStorage.getItem("loggedUser"));

  if (data) {
    console.log(data)
    dispatch(login(data));
    return <Navigate to="/dashboard"/>
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
          <Auth>
            <Dashboard />
          </Auth>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
