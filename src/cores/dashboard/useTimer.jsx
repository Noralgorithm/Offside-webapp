import { useState, useEffect, useMemo } from "react";

const useTimer = () => {
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const tomorrow = useMemo(() => {
    const tomorrow = new Date();
    tomorrow.setHours(0);
    tomorrow.setMinutes(0);
    tomorrow.setSeconds(0);
    tomorrow.setDate(tomorrow.getDate() + 1);
    console.log(tomorrow);
    return tomorrow;
  }, []);

  const getTime = () => {
    const time = Date.parse(tomorrow) - Date.now();
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(tomorrow), 1000);
    return () => clearInterval(interval);
  }, []);

  return { hours, minutes, seconds };
};

export default useTimer;
