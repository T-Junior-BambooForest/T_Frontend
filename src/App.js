import React, { useEffect, useState } from 'react';
import Forum from './Components/Forum';
import Header from './Components/Header';
import './Styles/Header.css';

const App = () => {
  const OAuth = `https://bssm.kro.kr/oauth/login?clientId=59b9bb6b&redirectURI=http://bsmboo.kro.kr/oauth`;
  const [images, setImages] = useState(true);
  const [logo, setLogo] = useState('T-Logo');


  const onClick = () => {
    if (images) {
      setImages(!images);
      setLogo('T-Logo-White');
    } else {
      setImages(!images);
      setLogo('T-Logo');
    }
  }
  return (
    <div className='how'
      style={
        images ? {
          backgroundColor: 'white',
        } : {
          backgroundColor: 'black'
        }
      }>


      <div className='headerBox'
        style={
          images ? {
            backgroundColor: 'white'
          } : {
            backgroundColor: '#101010'
          }
        }>
        <img src={`/images/${logo}.png`} className='headerLogo' alt='logo' />
        {images ?
          <>
            <a href={OAuth} target='_blank'><div className='loginBtn' >로그인</div></a>
            <img src={`/images/Sun.png`} className='changeModeBtn' alt='changeModeButton' onClick={onClick} />
          </>
          :
          <>
            <a href={OAuth} target='blank'><div className='loginBtnDark' >로그인</div></a>
            <img src={`/images/Moon.png`} className='changeModeBtn' alt='changeModeButton' onClick={onClick} />
          </>}
      </div>
      <Header images={images} />
      <Forum images={images} />
    </div>
  );
};

export default App;