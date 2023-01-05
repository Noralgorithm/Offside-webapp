import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";

function UserProfile() {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logoutHandle = () => {
    localStorage.clear();
    dispatch(logout());
  };

  return (
    <div className="w-screen h-full flex items-center justify-center">
      <div className="bg-white md:w-2/5 w-4/5 md:h-3/5 h-2/5 flex flex-col justify-evenly items-center rounded-lg">
        <h1 className="text-xl font-semibold overflow-x-auto w-full text-center">
          <span className="font-bold text-sticker-name">
            Nombre de usuario:{" "}
          </span>
          {userInfo.name}
        </h1>
        <h1 className="text-xl font-semibold overflow-x-auto w-full text-center">
          <span className="font-bold text-sticker-name">
            Correo electrónico:{" "}
          </span>
          {userInfo.email}
        </h1>
        <button
          onClick={logoutHandle}
          className="w-1/2 bg-offsideColorWine block p-3 text-center text-white rounded-lg hover:bg-red-800"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
