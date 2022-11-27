import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import Sticker from "../../components/Sticker";

function ChromesScreen({ hideChromesScreen }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="absolute h-5/6 w-10/12">
        <div className="h-1/2 flex w-full justify-around items-center my-20">
          <div className="h-full w-[18%]">
            <Sticker />
          </div>
          <div className="h-full w-[18%]">
            <Sticker />
          </div>

          <div className="h-full w-[18%]">
            <Sticker />
          </div>

          <div className="h-full w-[18%]">
            <Sticker />
          </div>
          <div className="h-full w-[18%]">
            <Sticker />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-green-700 text-white text-2xl w-2/12 rounded-full p-4 flex justify-around hover:bg-green-800"
            onClick={() => hideChromesScreen(false)}
          >
            {" "}
            <BsCheckCircle size="2rem" />
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChromesScreen;
