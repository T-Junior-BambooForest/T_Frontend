import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import Home from './Components/Router/Home';
import MyPage from './Components/Router/MyPage';
import Management from './Components/Router/Management';
import NotFound from './Components/Router/NotFound';
import Login from './Components/Router/Login';

const userInfo = {
  isLogin: false,
  usercode: 0,
  nickname: "",
  name: "",
  grade: 0,
  classNo: 0,
  studentNo: 0,
};

const App = () => {
  const [user, setUser] = useState(userInfo);

  useEffect(() => {
    (async () => {
      try {
        setUser({
          ...(await getUserInfo()).data,
          isLogin: true,
        });
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 401) {
          setUser((prev) => ({ ...prev, isLogin: false }));
        }
      }
    })();
  }, []);

  const getUserInfo = () => {
    return axios.get("#", { withCredentials: true });
  };

  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home isLogin={userInfo.isLogin} />} />
        <Route path={'/mypage'} element={<MyPage />} />
        <Route path={'/management'} element={<Management />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;