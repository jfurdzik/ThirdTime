import React, { useState } from 'react';
import styles from './Toggle.module.css';

export default function Toggle() {
  const [session, setSession] = useState("work");

  return (
    <div className={styles.sessionToggle}>
      <button
        className={session === "work" ? styles.sessionButtonActive : styles.sessionButton}
        onClick={() => setSession("work")}
        disabled={session === "work"}
      >
        Work
      </button>
      <button
        className={session === "break" ? styles.sessionButtonActive : styles.sessionButton}
        onClick={() => setSession("break")}
        disabled={session === "break"}
      >
        Break
      </button>
    </div>
  );
}