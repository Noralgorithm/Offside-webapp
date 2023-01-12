import React, { useState } from "react";
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
import chavezOffside from "../HUGO-CHÁVEZ-OFFSIDE.mp3";

function Navbar() {
  const money = useSelector((state) => state.user.money);
  const location = useLocation().pathname;
  const [easterEgg, setEasterEgg] = useState(10);

  return (
    <div className="w-screen">
      <nav className="w-full bg-white h-12 flex justify-between overflow-hidden">
        <Link
          className="h-full flex items-center"
          to="/dashboard"
          onClick={() => {
            if (easterEgg > 1) {
              setEasterEgg(easterEgg - 1);
            } else if (easterEgg === 1) {
              setEasterEgg(0);
              setTimeout(() => {
                setEasterEgg(10);
              }, 10000);
            }
            console.log(easterEgg);
          }}
        >
          <img src={logoOffside} alt="" className="md:h-36 h-28" />
        </Link>
        {easterEgg === 0 && (
          <audio autoPlay>
            <source src={chavezOffside} type="audio/mpeg" />
          </audio>
        )}
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
            <Link className="rounded-full md:hover:bg-zinc-300 p-1">
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
          <div className="w-0.5 h-full bg-black opacity-20"></div>
          <div className="w-1/2 h-full flex items-center justify-evenly">
            <div className="rounded-full bg-[#D9D9D9] md:w-2/5 w-[70%] flex items-center h-4/6 text-xl pl-1 gap-1">
              <TbCurrencyDollar
                size="1.4rem"
                color="#D9D9D9"
                className="bg-gradient-offside rounded-full p-[1px]"
              />
              <p>{money}</p>
            </div>
            <button className="hover:cursor-pointer rounded-full md:hover:bg-zinc-300 p-1">
              <SlOptionsVertical size="1.5rem" color="grey" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
