import React from "react";
import medioCentro from "../Images/medioCentro.png";
import defensa from "../Images/defensa.png";
import arquero from "../Images/arquero.png";
import delantero from "../Images/delantero.png";
import altura from "../Images/altura.png";
import peso from "../Images/peso.png";

function Sticker({ stickerInfo, fontSize }) {
  const positionImage = () => {
    switch (stickerInfo.position) {
      case "MedioCentro":
        return medioCentro;
      case "Defensa":
        return defensa;
      case "Delantero":
        return delantero;
      case "Arquero":
        return arquero;
      default:
        return medioCentro;
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center bg-fondo-barajita bg-cover bg-center bg-no-repeat relative">
      <div
        style={{
          backgroundImage: `url(${stickerInfo.img.replace(
            String.fromCharCode(92),
            "/"
          )})`,
          backgroundRepeat: "no-repeat",
          width: "80%",
          height: "80%",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
        }}
      ></div>
      <div className="bg-marco-barajita bg-cover w-full h-full bg-no-repeat bg-center absolute">
        <div className="w-full h-1/2 relative">
          <div className="w-[20%] h-1/2 absolute left-[8%] top-[27%] flex flex-col items-center justify-center gap-1">
            <div className="flex justify-between ml-[10%]">
              <img src={altura} alt="" className="w-1/3" />
              <h1
                className={`font-bold`}
                style={{ fontSize: fontSize[0] }}
              >
                {stickerInfo.height}
              </h1>
            </div>
            <div className="flex justify-around">
              <img src={peso} alt="" className="w-1/2" />
              <h1
                className={`font-bold`}
                style={{ fontSize: fontSize[0] }}
              >
                {stickerInfo.weight}
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 absolute w-1/6 right-[8%] top-[15%]">
            <img src={stickerInfo.team.badge} alt="" className="" />
            <img src={positionImage()} alt="" className="" />
          </div>
        </div>
        <h1
          className={`flex h-1/2 items-end justify-center w-full font-semibold text-sticker-name`}
          style={{ fontSize: fontSize[1] }}
        >
          {stickerInfo.playerName}
        </h1>
      </div>
    </div>
  );
}

export default Sticker;
