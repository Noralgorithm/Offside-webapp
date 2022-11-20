import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./cores/auth/registration/Register";
import Login from "./cores/auth/login/Login";
import Homepage from "./cores/homepage/Homepage";
import Dashboard from "./cores/dashboard/Dashboard";
import Auth from "./cores/auth/login/Auth";
import GetChromes from "./cores/get-chromes/GetChromes";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/barajita" element={<GetChromes />} /> 
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
