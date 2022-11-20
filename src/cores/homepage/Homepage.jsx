import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <main className="w-full h-full">
      <h1 className="text-center mt-24">
        home c: <br />
        <Link to="/signup">registrate mi loco</Link>
        <br />o
        <br />
        <Link to="/login">logueate 🥔</Link>
        <br />
      </h1>
    </main>
  );
};

export default Homepage;
