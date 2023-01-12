import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import VisualPagination from "./VisualPagination";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function HelpModal({ setHelpModal, screenStyles, helps }) {
  const [changeHelp, setChangeHelp] = useState(0);
  return (
    <div
      className={
        "absolute bg-black bg-opacity-80 w-full z-50 top-0 left-0 flex justify-center  pt-24 " +
        screenStyles
      }
    >
      <div className="md:w-[500px] w-11/12 md:h-96 h-[360px] bg-white flex flex-col rounded-lg">
        <header className="h-1/6 w-full flex justify-end items-start">
          <button
            onClick={() => {
              setHelpModal(false);
            }}
          >
            <AiOutlineClose size="2rem" />
          </button>
        </header>
        <section className="w-full h-4/6 flex justify-around items-center">
          <IoIosArrowBack
            size="2rem"
            color="white"
            className={`cursor-pointer rounded-full bg-gradient-offside ${
              changeHelp === 0 ? "invisible" : "visible"
            }`}
            onClick={() => {
              setChangeHelp(changeHelp - 1);
            }}
          />
          <div className="w-3/4 h-full flex flex-col items-center justify-center gap-5">
            <img
              src={helps[changeHelp].image}
              alt=""
              className={helps[changeHelp].style}
            />
            <p className="text-center font-semibold text-base left">
              {helps[changeHelp].message}
            </p>
          </div>
          <IoIosArrowForward
            size="2rem"
            color="white"
            className={`cursor-pointer rounded-full bg-gradient-offside ${
              changeHelp === helps.length - 1 ? "invisible" : "visible"
            }`}
            onClick={() => {
              setChangeHelp(changeHelp + 1);
            }}
          />
        </section>
        <footer className="h-1/6 w-full flex items-center justify-center">
          <VisualPagination total={helps.length} actual={changeHelp} />
        </footer>
      </div>
    </div>
  );
}

export default HelpModal;
