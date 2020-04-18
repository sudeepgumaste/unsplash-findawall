import React from 'react';
import './App.css';

import Images from './components/Images';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div className="App">
        <header className="App-header">
          Unsplash Gallery
          <Images></Images>
        </header>
      </div>
    </>
  );
}

export default App;
