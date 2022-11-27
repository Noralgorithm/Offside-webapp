import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <>
      <Navbar />
      <h1>{userInfo.name}</h1>
      <h1>{userInfo.id}</h1>
      <h1>{userInfo.email}</h1>
    </>
  );
};

export default Dashboard;
