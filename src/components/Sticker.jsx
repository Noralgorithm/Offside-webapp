import React from "react";
import medioCentro from "../Images/medioCentro.png";
import defensa from "../Images/defensa.png";
import arquero from "../Images/arquero.png";
import delantero from "../Images/delantero.png";

function Sticker({ stickerInfo, fontSize }) {
  /* stickerInfo = {
    playerName: "Pedri",
    position: "medioCentro",
    height: "1.78",
    weight: "70",
    img: "https://www.footyrenders.com/render/pedri-34.png",
  }; */
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
    <div className="h-full w-full flex justify-center items-center bg-fondo-barajita bg-cover bg-center bg-no-repeat">
      <div
        style={{
          backgroundImage: `url(${stickerInfo.img.replace(
            String.fromCharCode(92),
            "/"
          )})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          backgroundSize: "100%",
          backgroundPosition: "bottom",
        }}
      >
        <div className="bg-marco-barajita bg-cover w-full h-full bg-no-repeat bg-center">
          <div className="w-full h-1/2 flex justify-center">
            <div className="w-full h-full gap-y-[4%] grid grid-cols-1 content-center">
              <h1
                className={`ml-[19%] font-bold w-full`}
                style={{ fontSize: fontSize[0] }}
              >
                {stickerInfo.height}
              </h1>
              <h1
                className={`ml-[21%] font-bold w-full`}
                style={{ fontSize: fontSize[0] }}
              >
                {stickerInfo.weight}
              </h1>
            </div>
            <div className="grid grid-cols-1 w-1/2 h-full justify-items-center gap-0">
              <img
                src={stickerInfo.team.badge}
                alt=""
                className="justify-self-end w-auto h-2/5 mt-[28%]"
              />
              <img
                src={positionImage()}
                alt=""
                className="h-1/2 w-auto ml-[18%]"
              />
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
    </div>
  );
}

export default Sticker;
