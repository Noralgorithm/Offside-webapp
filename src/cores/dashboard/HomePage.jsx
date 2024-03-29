import React, { useCallback, useRef } from "react";
import { useState } from "react";
import GetChromes from "../get-chromes/GetChromes";
import Album from "./Album";
import DailyPack from "./DailyPack";
import Fantasy from "./Fantasy";
import SelectEvent from "./SelectEvent";
import useDailyPack from "./useDailyPack";
import Loading from "../../components/Loading";

function HomePage() {
  const [showDailyPack, setShowDailyPack] = useState(false);

  const { isAvailable, setIsAvailable, loading, checkStatus } = useDailyPack();

  if (loading) return <Loading />;

  return (
    <main className="w-full h-full flex flex-col items-center justify-center mb-[3%] gap-5">
      {showDailyPack && (
        <GetChromes
          hideDailyPack={setShowDailyPack}
          setIsAvailable={setIsAvailable}
        />
      )}
      <header className="md:w-11/12 w-10/12 flex">
        <SelectEvent />
      </header>
      <section className="lg:w-11/12 md:w-[96%] h-full w-10/12 flex md:flex-row flex-col justify-between md:gap-0 gap-4">
        <DailyPack
          setShowDailyPack={setShowDailyPack}
          isAvailable={isAvailable}
          setIsAvailable={setIsAvailable}
        />
        <Album />
        <Fantasy />
      </section>
    </main>
  );
}

export default HomePage;
