import React from "react";
import Sticker from "../../components/Sticker";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect } from "react";
import { useState } from "react";
import * as inventoryServices from "../../services/inventory.services";
import { useSelector } from "react-redux";

function Carousel() {
  const jugadores = [1, 2, 3, 4, 5];
  
  const [ isLoading, setIsLoading ] = useState(true);
  const [ players, setPlayers ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);

  const token = useSelector(state => state.user.token);

  useEffect(() => {
    (async () => {
      const data = await inventoryServices.fetchInventory(token, 1, currentPage);
      setPlayers(data.stickers);
    })()
  }, [token, currentPage])

  return (
    <div className="h-full w-full flex justify-center">
      <div className="h-full w-7/12 bg-gray-200 rounded flex justify-around">
        <div className="h-full flex items-center">
          <IoIosArrowBack
            size="1.5rem"
            className="bg-offsideColorWine rounded-full text-gray-100 cursor-pointer hover:bg-red-800"
            onClick={() => {if (currentPage > 0) setCurrentPage(currentPage - 1)}}
          />
        </div>
        {players.map(player => (
          <div className="w-1/6 cursor-pointer" onClick={() => {}} key={player.sticker.id}>
            <Sticker fontSize={["4px", "10px"]} stickerInfo={player.sticker} />
          </div>
        ))}
        <div className="h-full flex items-center">
          <IoIosArrowForward
            size="1.5rem"
            className="bg-offsideColorWine rounded-full text-gray-100 cursor-pointer hover:bg-red-800"
            onClick={() => {setCurrentPage(currentPage + 1)}}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
