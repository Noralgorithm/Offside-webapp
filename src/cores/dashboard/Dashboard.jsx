import React from "react";
import Navbar from "../../components/Navbar";
import HomePage from "./HomePage";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-5">
      <Navbar />
      <h1 className="h-[8%] text-2xl font-bold w-full pl-[4%] text-offside-titles">
        Home
      </h1>
      <HomePage />
    </div>
  );
};

export default Dashboard;
