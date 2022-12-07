import React from 'react';
import { useState } from 'react';
// CSS
import './App.css';

// Components
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}

export default App
