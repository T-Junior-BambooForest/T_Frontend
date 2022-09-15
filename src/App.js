import React, { useState } from 'react';
import Header from './Components/Header';
import Write from './Components/Write';
import './Styles/Header.css';
import axios from 'axios';

const App = () => {
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

  const onClickGetData = () => {
    axios
      .get('https://bssm.kro.kr/oauth/login?clientId=59b9bb6b&redirectURI=http://bsmboo.kro.kr/oauth')
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch((e) => console.log('something went wrong :(', e));
  };

  return (
    <div className='background'
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
            <button className='loginBtn' onClick={onClickGetData}>로그인</button>
            <img src={`/images/Sun.png`} className='changeModeBtn' alt='changeModeButton' onClick={onClick} />
          </>
          :
          <>
            <button className='loginBtnDark' onClick={onClickGetData}>로그인</button>
            <img src={`/images/Moon.png`} className='changeModeBtn' alt='changeModeButton' onClick={onClick} />
          </>}
      </div>
      <Header images={images} />
      {images ?
        <img src='/images/ForumTitleWhite.png' className='forumTitle' alt='Title' /> :
        <img src='/images/ForumTitleBlack.png' className='forumTitle' alt='Title' />
      }
      <Write images={images} />
    </div>
  );
};

export default App;