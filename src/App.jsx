import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <h1 className="homePage">
            home c: <br />
            <Link to="/signup">registrate mi loco</Link>
            <br />o
            <br />
            <Link to="/signin">logueate 🥔</Link>
            <br />
          </h1>
        }
      />
      <Route path="/signup" element={<Registration />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  );
};

export default App;
