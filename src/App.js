import React, { useState } from 'react';
import Forum from './Components/Forum';
import Header from './Components/Header';
import './Styles/Header.css';

const App = () => {
  const [images, setImages] = useState('Sun');
  const [logo, setLogo] = useState('T-Logo');

  const onClick = () => {
    if (images === 'Sun') {
      setImages('Moon');
      setLogo('T-Logo-White');
    } else if (images === 'Moon') {
      setImages('Sun');
      setLogo('T-Logo');
    }
  }
  return (
    <div className='how'
      style={
        images === 'Sun' ? {
          backgroundColor: 'white',
        } : {
          backgroundColor: 'black'
        }
      }>


      <div className='headerBox'
        style={
          images === 'Sun' ? {
            backgroundColor: 'white'
          } : {
            backgroundColor: '#101010'
          }
        }>
        <img src={`/images/${logo}.png`} className='headerLogo' alt='logo' />
        <img src={`/images/${images}.png`} className='changeModeBtn' alt='changeModeButton' onClick={onClick} />
      </div>
      <Header images={images} />
      <Forum images={images} />
    </div>
  );
};

export default App;