import React from "react";

function PlayerCircle({ playerImg }) {
  return (
    <div className="w-32 h-32 rounded-full bg-gradient-offside border-2 border-white">
      <div
        style={{
          backgroundImage: `url(${playerImg.replace(
            String.fromCharCode(92),
            "/"
          )})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
          borderRadius: "9999px"
        }}
      ></div>
    </div>
  );
}

export default PlayerCircle;
