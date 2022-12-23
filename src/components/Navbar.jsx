import React from "react";
import { Link } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import {
  IoGiftOutline,
  IoGift,
  IoBookOutline,
  IoBook,
  IoFootballOutline,
  IoFootball,
  IoBasketOutline,
  IoBasket,
  IoPersonOutline,
  IoPerson,
} from "react-icons/io5";
import { useState } from "react";
import GetChromes from "../cores/get-chromes/GetChromes";
import logoOffside from "../Images/logo-offside.png";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [showDailyPack, setShowDailyPack] = useState(false);
  const location = useLocation().pathname;

  return (
    <div className="w-screen">
      {showDailyPack && <GetChromes hideDailyPack={setShowDailyPack} />}
      <nav className="w-full bg-white h-12 flex justify-between overflow-hidden">
        <Link className="h-full flex items-center" to="/">
          <img src={logoOffside} alt="" className="h-36" />
        </Link>
        <div className="h-full flex w-5/12 items-center justify-between">
          <div className="flex h-full w-1/2 items-center justify-evenly">
            <Link to='/album' className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/album" ? (
                <IoBook size="2rem" color="#63130B" />
              ) : (
                <IoBookOutline size="2rem" color="#63130B" />
              )}
            </Link>
            <Link className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/fantasy" ||
              location === "/fantasy/plantilla" ||
              location === "/fantasy/almacen" ? (
                <IoFootball size="2rem" color="#63130B" />
              ) : (
                <IoFootballOutline size="2rem" color="#63130B" />
              )}
            </Link>
            <Link className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/tienda" ? (
                <IoBasket size="2rem" color="#63130B" />
              ) : (
                <IoBasketOutline size="2rem" color="#63130B" />
              )}
            </Link>
            <Link className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/perfil" ? (
                <IoPerson size="2rem" color="#63130B" />
              ) : (
                <IoPersonOutline size="2rem" color="#63130B" />
              )}
            </Link>
          </div>
          <div className="w-0.5 h-full bg-black"></div>
          <div className="w-1/2 h-full flex items-center justify-evenly">
            <div className="rounded-full bg-stone-400 w-2/5 flex items-center h-4/6 text-xl">
              <RiMoneyDollarCircleFill size="2rem" color="#63130B" />
              <p>50</p>
            </div>
            <button
              className="hover:cursor-pointer rounded-full hover:bg-zinc-300 p-1"
              onClick={() => {
                setShowDailyPack(true);
              }}
            >
              {showDailyPack ? (
                <IoGift size="2rem" color="#63130B" />
              ) : (
                <IoGiftOutline size="2rem" color="#63130B" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
