import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./cores/registration/Register";
import Login from "./cores/login/Login";
import Homepage from "./cores/homepage/Homepage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
