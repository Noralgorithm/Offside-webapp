import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Page from "./Page";
import * as inventoryServices from "../../../services/inventory.services";
import { useDispatch, useSelector } from "react-redux";
import { storeInventory } from "../../../features/inventory/inventorySlice";
import Loading from "../../../components/Loading";

function Inventory() {
  const [loading, setLoading] = useState(true);

  const eventId = useSelector((state) => state.album.eventId);
  const token = useSelector((state) => state.user.token);
  const inventory = useSelector((state) => state.inventory);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const data = await inventoryServices.fetchInventory(
          token,
          eventId,
          inventory.paginate.page
        );
        dispatch(storeInventory(data));
        setLoading(false);
      } catch (e) {
        alert(e.message);
      }
    })();
  }, [inventory.paginate.page]);

  if (loading)
    return (
      <div className="w-screen h-screen relative">
        <Loading />
      </div>
    );
  return (
    <div className="w-screen md:h-[1000px] h-[1750px] flex flex-col overflow-x-hidden">
      <div className="h-full w-full flex flex-col items-center justify-around">
        <h1 className="w-full text-center text-white font-bold text-4xl">
          Inventario
        </h1>
        <Page />
      </div>
    </div>
  );
}

export default Inventory;
