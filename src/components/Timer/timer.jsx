/* eslint-disable max-len */
import React, { useState, useEffect } from "react";

import getPadTime from "../helpers/getPad";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);
  useEffect(() => {
    // eslint-disable-next-line max-len
    const interval = setInterval(() => isCounting && setTimeLeft((timeleft) => (timeleft >= 1 ? timeleft + 1 : 1)), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);
  //   useEffect(() => {
  //     // eslint-disable-next-line max-len
  //     const interval = setInterval(() => isCounting && setTimeLeft((timeleft) => (timeleft >= 1 ? timeleft - 1 : 0)), 1000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [isCounting]);

  const handleStart = () => { setIsCounting(true); };
  const handleStop = () => { setIsCounting(false); };
  //   const handleReset = () => {
  //     setIsCounting(false);
  //     setTimeLeft(0);
  //   };
  //   const handleReset = () => {
  //     setIsCounting(false);
  //     setTimeLeft(2 * 60);
  //   };
  return (
    <div className="app">
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons">
        {isCounting ? <button type="button" className="icon icon-pause" onClick={handleStop} /> : <button type="button" className="icon icon-play" onClick={handleStart} />}
        {/* <button type="button" className="icon icon-play" />
            <button type="button" className="icon icon-pause" /> */}

        {/* <button type="button" onClick={handleReset}>Reset</button> */}
      </div>
    </div>
  );
}

export default Timer;
