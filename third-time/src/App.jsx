import { useState } from 'react';
import './App.css';
import StopwatchPage from './pages/StopwatchPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyTimer from './components/MyTimer/MyTimer';

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StopwatchPage/>}/>
        <Route path="/timer" element={<MyTimer expiryTimestamp={time}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
