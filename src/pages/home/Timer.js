import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const createTimer = () => {
    let dif = +new Date("11/5/2022") - +new Date();
    let timeRemaining = {
      days: Math.floor(dif / (1000 * 60 * 60 * 24)),
      hours: Math.floor((dif / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((dif / (1000 * 60)) % 60),
      seconds: Math.floor((dif / 1000) % 60),
    };

    return timeRemaining;
  };

  const [timeLeft, setTimeLeft] = useState(createTimer());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(createTimer());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="timer">
      Code for Good 2022 Countdown
      <br />
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>0 days 0 hours 0 minutes 0 seconds</span>
      )}
    </div>
  );
};

export default Timer;