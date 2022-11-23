import React from "react";
import { Link } from "react-router-dom";
import { MdSportsSoccer, MdOutlineShoppingBasket } from "react-icons/md";
import { HiOutlineUser, HiOutlineBookOpen, HiMenu } from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";
import { GiChest } from "react-icons/gi";
import { useState } from "react";
import LateralBar from "./LateralBar";
import GetChromes from "../cores/get-chromes/GetChromes";

function Navbar() {
  const [showLateralBar, setShowLateralBar] = useState(false);
  const [showDailyPack, setShowDailyPack] = useState(false);

  return (
    <div className="w-screen h-screen">
      {showLateralBar && <LateralBar hideLateralBar={setShowLateralBar} />}
      {showDailyPack && <GetChromes hideDailyPack={setShowDailyPack} />}
      <nav className="w-full bg-white h-12 flex justify-between">
        <Link className="h-full" to="/">
          <img
            src="https://s3-alpha-sig.figma.com/img/718f/4119/fe709b99deb1fa770e894c7854ab6c12?Expires=1670198400&Signature=BJaRCmNmHXKR5duRQCC5xEwPK8RIYjZ4zZ3KHBQ~0AdO-o0eQY3NwjhFzMGPe3XrqUnHmpnTuv61tGHGMrNrb6H0a78axx3yKGVpNCrZGarPm~mc0KfuTTKeUrqeI1rGBz443bdLSsaSRZlwgksRDogFDeBSF19rVwQjz-Cvj9LB9vrfm8P56eyVGWPRdY4QWfTp~jKWAuo5~UtAezhWtR9caLr2qEZ3mEu~6LplNihaa3P590~NKB2i9GeXxxibhga2GtL~vwu3mZQ5JUbquwvT39-hP-PDeA8Dp5kZ2D3YSZ~StjZ-YwU2VpXbbEYmOVGb6X3Kno0iCOqKrILK0w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
              <GiChest size="2rem" color="#63130B" />
            </button>
            <div
              className="hover:cursor-pointer rounded-full hover:bg-zinc-300 p-1"
              onClick={() => {
                setShowLateralBar(!showLateralBar);
              }}
            >
              <HiMenu size="2rem" color="#63130B" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
