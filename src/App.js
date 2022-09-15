import React, { useState } from 'react';
import Header from './Components/Header';
import Write from './Components/Write';
import './Styles/App.css';
import axios from 'axios';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [onMode, setOnMode] = useState(true);
  const [then, setThen] = useState(false);

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
    <div className='background'>


      <div className='headerBox'>
        <img src={`/images/T-Logo.png`} className='headerLogo' alt='logo' />
        {isLogin ?
          <>
            {/* 프로필사진 */}
          </>
          :
          <>
            <button className='loginBtn' onClick={onClickGetData}>로그인</button>
            <img src={`/images/Sun.png`} className='changeModeBtn' alt='changeModeButton' onClick={onClick} />
          </>
        }
      </div>
      <Header />
      <img src='/images/ForumTitleWhite.png' className='forumTitle' alt='Title' />
      <Write />
    </div>
  );
};

export default App;