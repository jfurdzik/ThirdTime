import React, { useState } from 'react';
import styles from './Toggle.module.css';

export default function Toggle({ onDataSend }) {
  const [session, setSession] = useState("work");

  function clickToggleToWork() {
    setSession("work");
    onDataSend("work"); //call parent callback func with data to send up
  }

  function clickToggleToBreak() {
    setSession("break");
    onDataSend("break"); //call parent callback func with data to send up
  }

  return (
    <div className={styles.sessionToggle}>
      <button
        className={session === "work" ? styles.sessionButtonActiveWork : styles.sessionButtonWork}
        onClick={clickToggleToWork}
        disabled={session === "work"}
      >
        Work
      </button>
      <button
        className={session === "break" ? styles.sessionButtonActiveBreak : styles.sessionButtonBreak}
        onClick={clickToggleToBreak}
        disabled={session === "break"}
      >
        Break
      </button>
    </div>
  );
}