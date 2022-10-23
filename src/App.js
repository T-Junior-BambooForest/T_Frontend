import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import Home from './Components/Router/Home';
import MyPage from './Components/Router/MyPage';
import Management from './Components/Router/Management';
import NotFound from './Components/Router/NotFound';
import Login from './Components/Router/Login';

const App = () => {
  const [userInfo, setUserInfo] = useState([{
    isLogin: true,
    usercode: 57,
    nickname: "ubinp",
    name: "박우빈",
    grade: 1,
    classNo: 4,
    studentNo: 9,
    isManager: true,
  }]);

  const getUserInfo = () => {
    axios.get('http://bsmboo.kro.kr/islogin')
      .then((response) => {
        console.log(response)
      })
  };

  useEffect(() => {
    getUserInfo();
  })

  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home userInfo={userInfo} />} />
        <Route path={'/mypage'} element={<MyPage userInfo={userInfo} />} />
        <Route path={'/management'} element={<Management userInfo={userInfo} />} />
        <Route path={'/login'} element={<Login userInfo={userInfo} />} />
        <Route path={'*'} element={<NotFound userInfo={userInfo} />} />
      </Routes>
    </Router>
  );
};

export default App;