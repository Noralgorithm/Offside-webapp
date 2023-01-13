import React, { useEffect, useLayoutEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./cores/auth/registration/Register";
import Login from "./cores/auth/login/Login";
import Homepage from "./cores/homepage/Homepage";
import Dashboard from "./cores/dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/user/userSlice";
import ProtectedRoutes from "./cores/auth/login/ProtectedRoutes";
import UnprotectedRoutes from "./cores/auth/login/UnprotectedRoutes";
import Index from "./cores/album/Index";
import Inventory from "./cores/album/inventario/Inventory";
import Profile from "./cores/profile/Profile";
import Market from "./cores/market/Market";
import { Fantasy as Plantilla } from "./cores/fantasy/squad/Fantasy";
import Navbar from "./components/Navbar";
import useEventFetcher from "./useEventFetcher";
import PreNavbar from "./components/PreNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";
import { toast } from 'react-toastify';

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { loading, setLoading } = useEventFetcher();

  useLayoutEffect(() => {
    try {
      if (localStorage.getItem("loggedUser"))
        dispatch(login(JSON.parse(localStorage.getItem("loggedUser"))));
    } catch (e) {
      localStorage.clear();
      dispatch(logout());
      toast.error("Error con la sesion almacenada localmente, recargue la pagina.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        {user.success ? <Navbar /> : <PreNavbar />}
        <Routes>
          <Route path="/" element={<UnprotectedRoutes />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="album" element={<Index />} />
            <Route path="album/inventory" element={<Inventory />} />
            <Route path="market" element={<Market />} />
            <Route path="profile" element={<Profile />} />
            <Route path="fantasy" element={<Plantilla />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
