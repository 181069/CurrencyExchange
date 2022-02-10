import React from "react";
import classes from "./counter.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Counter = () => {
  return (
    <div className={classes.counter}>
      <CountdownCircleTimer
        isPlaying
        duration={60}
        colors={"#0071eb"}
        size={40}
        strokeWidth={2}
        onComplete={() => ({
          shouldRepeat: true,
        })}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Counter;
