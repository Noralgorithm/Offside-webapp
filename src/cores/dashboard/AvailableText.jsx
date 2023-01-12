import React, { useEffect } from "react";
import useTimer from "./useTimer";

const AvailableText = ({ isAvailable, setIsAvailable }) => {
  const { hours, minutes, seconds } = useTimer();

  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) setIsAvailable(true);
  }, [seconds]);

  return (
    <>
      {isAvailable
        ? "¡Sobre Disponible!"
        : `Desbloqueable en ${hours < 10 ? "0" + hours : hours}:${
            minutes < 10 ? "0" + minutes : minutes
          }:${seconds < 10 ? "0" + seconds : seconds}.`}
    </>
  );
};

export default AvailableText;
