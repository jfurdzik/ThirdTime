import React from 'react';
import MyStopwatchAndTimer from '../components/MyStopwatchAndTimer/MyStopwatchAndTimer';
import styles from './StopwatchPage.module.css';
import logo from '../assets/logo.png';
import settings from '../assets/settings.png';

export default function StopwatchPage() {
  return (
    <div className={styles.component}>
      <img src={logo} className={styles.logo}/>
      <button className={styles.settings}>
        <img src={settings}/>
      </button>
      <MyStopwatchAndTimer/>
    </div>
  );
}