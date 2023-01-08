import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Homepage = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center gap-10">
      <h1 className="text-center h-2/6 text-4xl font-bold text-offside-titles flex items-center">
        Pantalla de inicio
      </h1>
      <Link
        to="/signup"
        className="h-1/6 md:w-3/12 w-11/12 flex items-center text-xl justify-evenly bg-gradient-offside rounded font-bold text-white"
      >
        Registrate <FaArrowRight size="2rem" />
      </Link>
      <Link
        to="/login"
        className="h-1/6 md:w-3/12 w-11/12 flex items-center text-xl justify-evenly bg-gradient-offside rounded font-bold text-white"
      >
        Logueate <FaArrowRight size="2rem" />
      </Link>
    </main>
  );
};

export default Homepage;
