import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import styles from './MyStopwatch.module.css';

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

  return (
    <div style={{textAlign: 'center'}}>
      <div className={styles.time}>
        <span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
      </div>
      <button onClick={isRunning ? pause : start}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={() => reset(new Date(0), false)}>Reset</button>
    </div>
  );
}