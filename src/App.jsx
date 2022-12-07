import React from 'react';
import { useState } from 'react';
// CSS
import './App.css';

// Components
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Card from './components/Card';

// Data
import data from './data/data'


function App() {
  const cardArray = data.map(data => {
    return (
      <Card
        key={data.id} 
        {...data}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards-section">
        {cardArray}
      </div>
    </div>
  )
}

export default App;