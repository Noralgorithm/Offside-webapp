import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Homepage = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center gap-10">
      <h1 className="text-center h-2/6 text-4xl font-bold text-white flex items-center">
        Pantalla de inicio
      </h1>
      <Link
        to="/signup"
        className="h-1/6 w-3/12 flex items-center text-xl justify-evenly bg-gradient-to-r from-cyan-400 to-blue-400 rounded font-bold hover:from-cyan-500 hover:to-blue-500"
      >
        Registrate <FaArrowRight size="2rem" />
      </Link>
      <Link
        to="/login"
        className="h-1/6 w-3/12 flex items-center text-xl justify-evenly bg-gradient-to-r from-cyan-400 to-blue-400 rounded font-bold hover:from-cyan-500 hover:to-blue-500"
      >
        Logeate <FaArrowRight size="2rem" />
      </Link>
    </main>
  );
};

export default Homepage;
