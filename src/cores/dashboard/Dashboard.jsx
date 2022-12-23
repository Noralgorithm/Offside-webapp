import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar';
import { logout } from '../../features/user/userSlice';

const Dashboard = () => {

  const { userInfo } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const logoutHandle = () => {
    localStorage.clear();
    dispatch(logout());
  }

  return (
    <div className='w-screen h-screen'>
    <Navbar />
    <h1>{userInfo.name}</h1>
    <h1>{userInfo.id}</h1>
    <h1>{userInfo.email}</h1>
    <button onClick={logoutHandle} className="bg-red-600 block p-5 text-center text-white">Logout</button>
    </div>
  );
};

export default Dashboard;
