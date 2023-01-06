import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import PlayerCircle from "./PlayerCircle";

function MarketModal({ children }) {
  const player = {
    playerName: "Neymar Jr",
    img: "https://s3-alpha-sig.figma.com/img/28a1/71f7/7a2278436eabc7b5ee419c90f95cc307?Expires=1673827200&Signature=cJkSUT13PqGRbg0iznIvSE3IIvXZuOweZq68nrYTU24~3AWIaCxSQ8mDTaPPVMIf1IzgtZ~7pbKzHsgPHmq1PhHzlFZLb09PKQjuGGi9Yu4sMupmk29kddEF7E941r6GV9F2tKcXU~49VYz3gwzgemIKzHTbTmX2I0DffRBTBFw7Pc4ZuEpHeDu-DIKn5dv4duLMDczcVSkSFyFA564EgwslEFBBaxT0G8obNbGtdQDiezIEbA436WceGWj10A1uBKMLZ4dUBsbGtiGyqXQ5LnCGzYP1Kw8xvNtoTYOdHQTKmDq9A-xnpfbWm3ZG7-o8n60rSSwjrLd6A1mghLXIjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    team: {
      badge:
        "https://static.vecteezy.com/system/resources/previews/012/624/892/original/argentina-flag-icon-free-png.png",
    },
    position: "Delantero",
  };
  return (
    <div className="w-screen h-screen absolute bg-black bg-opacity-80 left-0 top-0 z-30 flex items-center justify-center">
      <div className="h-4/5 w-1/2 bg-gradient-offside rounded-lg flex flex-col justify-between relative">
        <header className="w-full h-[10%] flex items-center justify-end px-4">
          <BsQuestionCircle size="1.5rem" />
        </header>
        <div className="absolute w-full top-16 flex flex-col items-center">
          <PlayerCircle playerImg={player.img} />
          <h1 className="text-offside-titles text-xl font-bold">
            {player.playerName}
          </h1>
        </div>
        <section className="w-full h-2/3 bg-white rounded-b-lg">
          {children}
        </section>
      </div>
    </div>
  );
}

export default MarketModal;
