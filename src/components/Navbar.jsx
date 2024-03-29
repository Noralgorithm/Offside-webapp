import React from "react";
import { Link } from "react-router-dom";
import { TbCurrencyDollar } from "react-icons/tb";
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
  const money = useSelector((state) => state.user.money);
  const location = useLocation().pathname;

  return (
    <div className="w-screen sticky top-0 z-10">
      <nav className="w-full bg-white h-12 flex justify-between overflow-hidden">
        <Link className="h-full flex items-center" to="/">
          <img src={logoOffside} alt="" className="md:h-36 h-28" />
        </Link>
        <div className="h-full flex md:w-5/12 w-9/12 items-center justify-between">
          <div className="flex h-full md:w-1/2 items-center justify-evenly">
            <Link to="/album" className="rounded-full md:hover:bg-zinc-300 p-1">
              {location === "/album" ? (
                <IoBook size="2rem" color="#E4454E" />
              ) : (
                <IoBookOutline size="2rem" color="grey" />
              )}
            </Link>
            <Link
              to="/fantasy"
              className="rounded-full md:hover:bg-zinc-300 p-1"
            >
              {location === "/fantasy" ? (
                <IoFootball size="2rem" color="#E4454E" />
              ) : (
                <IoFootballOutline size="2rem" color="grey" />
              )}
            </Link>
            <Link to="/market" className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/market" ? (
                <IoBasket size="2rem" color="#E4454E" />
              ) : (
                <IoBasketOutline size="2rem" color="grey" />
              )}
            </Link>
            <Link
              to="/profile"
              className="rounded-full md:hover:bg-zinc-300 p-1"
            >
              {location === "/profile" ? (
                <IoPerson size="2rem" color="#E4454E" />
              ) : (
                <IoPersonOutline size="2rem" color="grey" />
              )}
            </Link>
          </div>
          <div className="w-0.5 h-full bg-black bg-opacity-30"></div>
          <div className="w-1/2 h-full flex items-center justify-evenly">
            <div className="rounded-full bg-[#D9D9D9] md:w-3/5 w-[80%] flex items-center h-4/6 text-xl pl-1 gap-1">
              <TbCurrencyDollar
                size="1.4rem"
                color="#D9D9D9"
                className="bg-gradient-offside rounded-full p-[1px]"
              />
              <p>{money}</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
