import { useEffect } from "react";

const SecondClock = ({ date, color }) => {
    useEffect(() => {
        console.log("SecondClock.jsx - Mount useEffect()");
        return () => {
          console.log("SecondClock.jsx - Unmount useEffect()");
        };
    }, []);
    
    
    useEffect(() => {
        console.log("SecondClock.jsx - Update useEffect()");
    }, [color]);
    

  const style = {
    color: color ? "tomato" : "black",
  };
  return (
    <>
      <p style={style}>ساعت در حال حاضر برابر : {date.toLocaleTimeString()}</p>
    </>
  );
};

export default SecondClock;
