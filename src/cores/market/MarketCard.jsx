import React from "react";

function MarketCard({ children }) {
  const playerInfo = {
    playerName: "Neymar Jr",
    img: "https://s3-alpha-sig.figma.com/img/28a1/71f7/7a2278436eabc7b5ee419c90f95cc307?Expires=1673827200&Signature=cJkSUT13PqGRbg0iznIvSE3IIvXZuOweZq68nrYTU24~3AWIaCxSQ8mDTaPPVMIf1IzgtZ~7pbKzHsgPHmq1PhHzlFZLb09PKQjuGGi9Yu4sMupmk29kddEF7E941r6GV9F2tKcXU~49VYz3gwzgemIKzHTbTmX2I0DffRBTBFw7Pc4ZuEpHeDu-DIKn5dv4duLMDczcVSkSFyFA564EgwslEFBBaxT0G8obNbGtdQDiezIEbA436WceGWj10A1uBKMLZ4dUBsbGtiGyqXQ5LnCGzYP1Kw8xvNtoTYOdHQTKmDq9A-xnpfbWm3ZG7-o8n60rSSwjrLd6A1mghLXIjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    team: {
      badge:
        "https://static.vecteezy.com/system/resources/previews/012/624/892/original/argentina-flag-icon-free-png.png",
    },
    position: "Delantero",
  };

  return (
    <div className="w-full h-28 flex items-center bg-gradient-to-r rounded-l-lg bg-white relative rounded">
      <aside className="relative h-full w-[30%] flex justify-center rounded-lg bg-gradient-offside">
        <h1 className="-rotate-90 text-white text-sm font-semibold absolute right-[35%] w-28 bottom-[39.5%] pl-1">
          {playerInfo.playerName}
        </h1>
        <img src={playerInfo.img} alt="" className="h-full ml-7" />
        <img
          src={playerInfo.team.badge}
          alt=""
          className="h-1/6 rounded absolute top-2 right-2"
        />
      </aside>
      <div className="h-full w-full flex flex-col justify-around pl-5">
        <header className="w-full h-1/6 flex items-center gap-3">
          <h1 className="bg-gradient-to-b from-[#B02419] to-[#FE4648] text-white p-0.5 text-xs rounded ml-2">
            {playerInfo.position}
          </h1>
        </header>
        {children}
      </div>
    </div>
  );
}

export default MarketCard;
