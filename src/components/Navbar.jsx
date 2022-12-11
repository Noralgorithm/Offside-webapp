import React from "react";
import { Link } from "react-router-dom";
import { MdSportsSoccer, MdOutlineShoppingBasket } from "react-icons/md";
import { HiOutlineUser, HiOutlineBookOpen } from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5"
import { useState } from "react";
import GetChromes from "../cores/get-chromes/GetChromes";
import logoOffside from "../Images/logo-offside.png"

function Navbar() {
  const [showDailyPack, setShowDailyPack] = useState(false);

  return (
    <div className="w-screen">
      {showDailyPack && <GetChromes hideDailyPack={setShowDailyPack} />}
      <nav className="w-full bg-white h-12 flex justify-between">
        <Link className="h-full" to="/">
          <img
            src={logoOffside}
            alt=""
            className="h-full"
          />
        </Link>
        <div className="h-full flex w-1/2 items-center justify-between">
          <div className="flex h-full w-1/2 items-center justify-evenly">
            <Link className="rounded-full hover:bg-zinc-300 p-1">
              <HiOutlineBookOpen size="2rem" color="#63130B" />
            </Link>
            <Link className="rounded-full hover:bg-zinc-300 p-1">
              <MdSportsSoccer size="2rem" color="#63130B" />
            </Link>
            <Link className="rounded-full hover:bg-zinc-300 p-1">
              <MdOutlineShoppingBasket size="2rem" color="#63130B" />
            </Link>
            <Link className="rounded-full hover:bg-zinc-300 p-1">
              <HiOutlineUser size="2rem" color="#63130B" />
            </Link>
          </div>
          <div className="w-1/2 h-full flex items-center justify-evenly">
            <div className="rounded-full bg-stone-400 w-1/5 flex items-center h-4/6 text-xl">
              <BsCurrencyDollar />
              <p>50</p>
            </div>
            <button
              className="hover:cursor-pointer rounded-full hover:bg-zinc-300 p-1"
              onClick={() => {
                setShowDailyPack(true);
              }}
            >
              <IoGiftOutline size="2rem" color="#63130B" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
