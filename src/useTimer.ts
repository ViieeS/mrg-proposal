import { useState, useEffect } from "react";

const useTimer = (delayMs = 0)=> {
    const [timerExpired, setTimerExpired] = useState<boolean>(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setTimerExpired(true);
      }, delayMs);
  
      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    }, [delayMs]);

    return timerExpired;
}

export default useTimer;