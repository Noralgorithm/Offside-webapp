import React from "react";

function Homepage() {
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="w-11/12 h-[95%]">
        <h1 className="text-4xl text-gray-100 font-bold">Fantasy</h1>
        <div className="w-full h-5/6 mt-8 bg-bg-contenedor flex items-center justify-around rounded">
            <div className="w-5/12 h-[90%]">
                <h2>Mi Fantasy</h2>
            </div>
            <div className="w-5/12 h-[90%]"></div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
