import React from "react";
import LlenarAlbum from "../../Images/LlenarAlbum.png" 
import ParticipaFantasy from "../../Images/ParticipaFantasy.png" 

function AboutOffside() {
  return (
    <div className="w-full h-[45%]">
      <header className="w-full h-[20%] flex items-center">
        <h1 className="xl:w-1/6 md:w-2/6 w-1/2 flex justify-center items-center text-2xl text-offside-titles font-bold">
          Únete y juega
        </h1>
      </header>
      <section className="w-full h-[80%] flex justify-evenly">
        <div className="md:w-72 w-[45%] h-full flex flex-col items-end gap-2">
          <img src={LlenarAlbum} alt="" className="w-10/12" />
          <h1 className="w-full text-center text-xl font-bold text-offside-titles">Llena tu álbum</h1>
          <p className="text-center font-semibold">
            Colecciona todos los cromos y llena tu álbum con tus jugadores
            favoritos
          </p>
        </div>
        <div className="md:w-72 w-[45%] h-full flex flex-col items-center gap-2">
          <img src={ParticipaFantasy} alt="" className="w-[78%]" />
          <h1 className="w-full text-center text-xl font-bold text-offside-titles">Participa en el fantasy</h1>
          <p className="text-center font-semibold">
            Crea tu equipo de ensueño y participa en una liga para ganar puntos
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutOffside;
