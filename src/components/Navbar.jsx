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
  const [avalaiblePack, setAvailablePack] = useState(true);
  const location = useLocation().pathname;

  return (
    <div className="w-screen">
      {showDailyPack && <GetChromes hideDailyPack={setShowDailyPack} />}
      <nav className="w-full bg-white h-12 flex justify-between overflow-hidden">
        <Link className="h-full flex items-center" to="/">
          <img src={logoOffside} alt="" className="h-36" />
        </Link>
        <div className="h-full flex md:w-5/12 w-3/5 items-center justify-between">
          <div className="flex h-full md:w-1/2 items-center justify-evenly">
            <Link to="/album" className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/album" ? (
                <IoBook size="2rem" color="#B02419" />
              ) : (
                <IoBookOutline size="2rem" color="grey" />
              )}
            </Link>
            <Link className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/fantasy" ? (
                <IoFootball size="2rem" color="#B02419" />
              ) : (
                <IoFootballOutline size="2rem" color="grey" />
              )}
            </Link>
            <Link to="/market" className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/market" ? (
                <IoBasket size="2rem" color="#B02419" />
              ) : (
                <IoBasketOutline size="2rem" color="grey" />
              )}
            </Link>
            <Link to="/profile" className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/profile" ? (
                <IoPerson size="2rem" color="#B02419" />
              ) : (
                <IoPersonOutline size="2rem" color="grey" />
              )}
            </Link>
          </div>
          <div className="w-0.5 h-full bg-black bg-opacity-30"></div>
          <div className="w-1/2 h-full flex items-center justify-evenly">
            <div className="rounded-full bg-stone-400 md:w-2/5 w-3/5 flex items-center h-4/6 text-xl">
              <RiMoneyDollarCircleFill size="2rem" color="#63130B" />
              <p>50</p>
            </div>
            <button
              className="hover:cursor-pointer rounded-full hover:bg-zinc-300 p-1 relative"
              onClick={() => {
                setShowDailyPack(!showDailyPack);
              }}
            >
              {avalaiblePack && (
                <div className="absolute bottom-1 left-2 w-full h-full">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </div>
              )}
              {showDailyPack ? (
                <IoGift size="2rem" color="#B02419" />
              ) : (
                <IoGiftOutline size="2rem" color="grey" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
