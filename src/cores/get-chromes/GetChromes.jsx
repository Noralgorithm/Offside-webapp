import React from "react";
import ChromesScreen from "./ChromesScreen";
import { useState } from "react";

function GetChromes() {
  const [useChromesScreen, setUseChromesScreen] = useState(false);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-80">
      <div className={`w-full h-full mt-12 ${useChromesScreen ? "hidden" : ""}`}>
        <div className="w-full flex justify-center">
          <h1 className="text-white text-5xl">Sobres disponibles</h1>
        </div>
        <div className="w-full h-1/2 flex justify-center items-center">
          <div className="w-1/6 h-2/5 relative flex items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/bc17/b2b5/5a233898015fdba1d2a19b413de2daa7?Expires=1669593600&Signature=Z~GLoX20C6n~QfoJblqSieQZ1Jm06DFPzoajlsFQiL1lG1lyc0ZrzKfg0q5q4Pt0~NG1FR-mqj5AUJBHobT2twIZWsPFeHkJju6T8~R8YRHxuceHDoHsPuNTQf38SGqreNfCQ-O86yfqVWVWKYJYJIuhYEVY353YI5F7eoFTtk~e8tx9NUwSxflMvUsKLubflrTAEh0KCFOwHnXhe-YlAe0vyqz7Ir2MyoGEIQiCyEWMo1IcVvbsqKDls8n4GgZnctYUe446Rxy0MbBcvI1~NlZZNJv-1V-5SdroOSNl~q-5vxRoU0lBpjHkPRT6jACKqxGHMCQrijLyNfGftyQh4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
              className="hover:cursor-pointer object-contain"
              onClick={() => {
                setUseChromesScreen(!useChromesScreen);
              }}
            />
          </div>
        </div>
      </div>
      {useChromesScreen && (
        <ChromesScreen hideChromesScreen={setUseChromesScreen} />
      )}
    </div>
  );
}

export default GetChromes;
