import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
