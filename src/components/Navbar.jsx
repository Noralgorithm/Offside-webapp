import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TbCurrencyDollar } from "react-icons/tb"
import { SlOptionsVertical } from "react-icons/sl";
import {
  IoBookOutline,
  IoBook,
  IoFootballOutline,
  IoFootball,
  IoBasketOutline,
  IoBasket,
  IoPersonOutline,
  IoPerson,
} from "react-icons/io5";
import logoOffside from "../Images/logo-offside.png";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const money = useSelector(state => state.user.money);
  const location = useLocation().pathname;

  return (
    <div className="w-screen">
      <nav className="w-full bg-white h-12 flex justify-between overflow-hidden">
        <Link className="h-full flex items-center" to="/">
          <img src={logoOffside} alt="" className="md:h-36 h-28" />
        </Link>
        <div className="h-full flex md:w-5/12 w-9/12 items-center justify-between">
          <div className="flex h-full md:w-1/2 items-center justify-evenly">
            <Link to="/album" className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/album" ? (
                <IoBook size="2rem" color="#E4454E" />
              ) : (
                <IoBookOutline size="2rem" color="grey" />
              )}
            </Link>
            <Link to="/fantasy" className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/fantasy" ? (
                <IoFootball size="2rem" color="#E4454E" />
              ) : (
                <IoFootballOutline size="2rem" color="grey" />
              )}
            </Link>
            <Link className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/market" ? (
                <IoBasket size="2rem" color="#E4454E" />
              ) : (
                <IoBasketOutline size="2rem" color="grey" />
              )}
            </Link>
            <Link to="/profile" className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/profile" ? (
                <IoPerson size="2rem" color="#E4454E" />
              ) : (
                <IoPersonOutline size="2rem" color="grey" />
              )}
            </Link>
          </div>
          <div className="w-0.5 h-full bg-black opacity-20"></div>
          <div className="w-1/2 h-full flex items-center justify-evenly">
            <div className="rounded-full bg-stone-400 md:w-2/5 w-[70%] flex items-center h-4/6 text-xl">
              <RiMoneyDollarCircleFill size="2rem" color="#63130B" />
              <p>{money}</p>
            </div>
            <button className="hover:cursor-pointer rounded-full hover:bg-zinc-300 p-1">
              <SlOptionsVertical size="1.5rem" color="grey" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
