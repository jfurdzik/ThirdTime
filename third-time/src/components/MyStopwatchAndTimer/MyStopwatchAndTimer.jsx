import React, { useState, useRef } from 'react';
import { useStopwatch, useTimer } from 'react-timer-hook';
import styles from './MyStopwatchAndTimer.module.css';
import reset_icon from "../../assets/reset.png";
import Toggle from "../Toggle/Toggle";

export default function MyStopwatchAndTimer() {
  //this should be a prop, changed for testing
  const expiryTimestampRef = useRef(null);

  const {
    totalSeconds,
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false, interval: 20 });

  const {
    totalSeconds: totalSecondsT, //rename after destructuring
    seconds: secondsT,
    minutes: minutesT,
    isRunning: isRunningT,
    start: startT,
    pause: pauseT,
    resume: resumeT,
    restart: restartT,
  } = useTimer({ expiryTimestamp: expiryTimestampRef.current, autoStart: false, onExpire: () => console.warn('onExpire called'), interval: 20 });

  const formatTime = (time) => {
    return String(time).padStart(2, '0');
  };

  const [toggleState, setToggleState] = useState("work");

  const handleToggleData = (data) => {
    setToggleState(data);
    if (data === "work") {
      pauseT?.();
    } else {
      pause();
    }
  }

  //make this clock object to det type (stopwatch/timer) + classes
  const isWork = toggleState == "work";
  const timerStartedRef = useRef(false); //track whether timer ever started
  const clock = isWork
  ? {
    minutes,
    seconds,
    isRunning,
    start,
    pause,
    reset: () => reset(new Date(0), false),
    timeClass: styles.timeBlue,
    buttonClass: styles.pause_start_blue,
  }
  : {
    minutes: minutesT,
    seconds: secondsT,
    isRunning: isRunningT,
    start: () => {
      if (!timerStartedRef.current) {
        timerStartedRef.current = true;
        
        const time = new Date(); //move this logic here bc timer expiry create when count begin not at render
        time.setSeconds(time.getSeconds() + 300);
        expiryTimestampRef.current = time;

        restartT(time, true); // FIRST START
      } else {
        resumeT(); // AFTER PAUSE - IMPORTANT (don't use startT)
      }
    },
    pause: pauseT,
    reset: () => {
      const time = new Date();
      time.setSeconds(time.getSeconds() + 300);
      expiryTimestampRef.current = time;
      timerStartedRef.current = false;
      restartT(time, false);
    },
    timeClass: styles.timePurple,
    buttonClass: styles.pause_start_purple,
  }

  return (
    <div className={styles.component}>
      <Toggle onDataSend={handleToggleData}/>

      <div className={clock.timeClass}>
        <span>{formatTime(clock.minutes)}</span>:
        <span>{formatTime(clock.seconds)}</span>
      </div>

      <div className={styles.start_pause_container}>
        <button onClick={clock.isRunning ? clock.pause : clock.start} className={clock.buttonClass}>
          {clock.isRunning ? "Pause" : "Start"}
        </button>
      </div>

      <button onClick={clock.reset} className={styles.reset_button}>
        <img src={reset_icon} className={styles.reset_img}/>
      </button>
    </div>
  );
}