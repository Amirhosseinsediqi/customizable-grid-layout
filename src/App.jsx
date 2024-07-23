import React, { useEffect } from 'react';
import './App.css';
import CustomGrid from './Components/CustomGrid';
import Dots from 'vanta/src/vanta.net';

function App() {
  useEffect(() => {
    Dots({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0,
      backgroundColor: 0xe5e0ea,
      points: 12.00,
      maxDistance: 14.00,
      spacing: 17.00
    });
  }, []);

  return (
    <div className="App">
      <div className='bg' id='vanta'></div>
      <div className="content">
        <CustomGrid />
      </div>
    </div>
  );
}

export default App;
