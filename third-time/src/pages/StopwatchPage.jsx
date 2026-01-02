import React from 'react';
import MyStopwatch from '../components/MyStopwatch/MyStopwatch';
import styles from './StopwatchPage.module.css';

export default function StopwatchPage() {
  return (
    <div className={styles.component}>
      <MyStopwatch/>
    </div>
  );
}