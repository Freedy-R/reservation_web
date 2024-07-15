import { useEffect, useState } from "react";
const Timer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);
  return (
    <>
      <div>{currentDate.toLocaleTimeString()}</div>
      <div>{currentDate.toLocaleDateString()}</div>
    </>
  );
};
export default Timer;
