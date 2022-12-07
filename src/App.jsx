import React from 'react';
import { useState } from 'react';
// CSS
import './App.css';

// Components
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Card from './components/Card';

// Assets
import katieImg from './assets/katie-zaferes.png';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards-section">
        <Card
          img={katieImg}
          rating={'5.0'}
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zafares"
          price={136}
        />
      </div>
    </div>
  )
}

export default App
