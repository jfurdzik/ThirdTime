import { useState } from 'react';
import './App.css';
import StopwatchPage from './pages/StopwatchPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StopwatchPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
