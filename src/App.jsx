import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Homepage from "./components/homepage/Homepage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
