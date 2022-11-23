import React from "react";
import { HiMenu } from "react-icons/hi";

function LateralBar({ children, hideLateralBar }) {
  return (
    <div className="top-0 left-0 bg-black fixed bg-opacity-50 w-screen h-screen flex justify-end items-center">
      <div className="min-h-screen w-2/12 bg-white absolute">
        <div className="w-full h-12 flex items-center justify-end">
          <div className="w-5/12 pl-2 h-full flex items-center">
            <div className="hover:cursor-pointer rounded-full hover:bg-zinc-300 p-1">
              <HiMenu
                size="2rem"
                color="#63130B"
                className=""
                onClick={() => {
                  hideLateralBar(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LateralBar;
