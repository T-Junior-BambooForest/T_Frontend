import React, { useState } from 'react';
import Header from './Components/Header';
import Write from './Components/Write';
import './Styles/Header.css';
import axios from 'axios';

const App = () => {
  const [logo, setLogo] = useState('T-Logo');
  const [isLogin, setIsLogin] = useState(false);
  const [onMode, setOnMode] = useState(true);

  const onClick = () => {
    if (onMode) {
      localStorage.setItem('theme', 'dark')
      setOnMode(false)
    } else {
      localStorage.setItem('theme', 'light')
      setOnMode(true)
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
        localStorage.getItem('theme') === 'light' ? {
          backgroundColor: 'white',
        } : {
          backgroundColor: 'black'
        }
      }>


      <div className='headerBox'
        style={
          localStorage.getItem('theme') === 'light' ? {
            backgroundColor: 'white'
          } : {
            backgroundColor: '#101010'
          }
        }>
        {localStorage.getItem('theme') === 'dark' ?
          <img src={`/images/T-Logo-White.png`} className='headerLogo' alt='logo' />
          :
          <img src={`/images/T-Logo.png`} className='headerLogo' alt='logo' />
        }
        {isLogin ?
          <>
            {/* 프로필사진 */}
          </>
          :
          <>
            {localStorage.getItem('theme') === 'light' ?
              <>
                <button className='loginBtn' onClick={onClickGetData}>로그인</button>
                <img src={`/images/Sun.png`} className='changeModeBtn' alt='changeModeButton' onClick={onClick} />
              </>
              :
              <>
                <button className='loginBtnDark' onClick={onClickGetData}>로그인</button>
                <img src={`/images/Moon.png`} className='changeModeBtn' alt='changeModeButton' onClick={onClick} />
              </>}
          </>}
      </div>
      <Header />
      {localStorage.getItem('theme') === 'light' ?
        <img src='/images/ForumTitleWhite.png' className='forumTitle' alt='Title' /> :
        <img src='/images/ForumTitleBlack.png' className='forumTitle' alt='Title' />
      }
      <Write />
    </div>
  );
};

export default App;