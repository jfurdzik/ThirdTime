import React, { useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import styles from './MyStopwatch.module.css';
import reset_icon from "../../assets/reset.png";
import Toggle from "../Toggle/Toggle";

export default function MyStopwatch() {
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

  const formatTime = (time) => {
    return String(time).padStart(2, '0');
  };

  const [toggleState, setToggleState] = useState('');

  const handleToggleData = (data) => {
    setToggleState(data);
    console.log("state received from toggle: ", data);
  }

  return (
    <div className={styles.component}>
      <Toggle onDataSend={handleToggleData}/>
      <div className={toggleState == "work" ? styles.timeBlue : styles.timePurple}>
        <span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
      </div>
      <div className={styles.start_pause_container}><button onClick={isRunning ? pause : start} className={toggleState == "work" ? styles.pause_start_blue : styles.pause_start_purple}>{isRunning ? 'Pause' : 'Start'}</button></div>
      <button onClick={() => reset(new Date(0), false)} className={styles.reset_button}><img src={reset_icon} className={styles.reset_img}/></button>
    </div>
  );
}