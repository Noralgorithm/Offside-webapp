import React, { useEffect } from "react";
import useTimer from "./useTimer";

const AvailableText = ({ isAvailable, setIsAvailable }) => {
  const { hours, minutes, seconds } = useTimer();

  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) setIsAvailable(true);
  }, [seconds]);

  return (
    <>
    {console.log('renderizao el texto')}
      {isAvailable
        ? "¡Sobre Disponible!"
        : `Desbloqueable en ${hours}:${minutes}:${seconds}.`}
    </>
  );
};

export default AvailableText;
