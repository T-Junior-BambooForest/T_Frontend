import React, { useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Manage from './pages/Manage';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import './App.scss';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://bsmboo.kro.kr:8000'

interface User {
  class: number,
  code: number,
  enroled: string,
  grade: number,
  name: string,
  nickname: string,
  studentNo: string,
  profile: string,
  isLogin: boolean,
  isManage: boolean
}

const userInfo: User = {
  class: 0,
  code: 0,
  enroled: "",
  grade: 0,
  name: "",
  nickname: "",
  studentNo: "",
  profile: "",
  isLogin: false,
  isManage: false,
};

export const UserContext = createContext(userInfo);

const App = () => {
  const [user, setUser] = React.useState(userInfo);

  useEffect(() => {
    (async () => {
      try {
        const user = await getUserInfo();
        setUser({
          ...user.data.data,
          isLogin: true,
          isManage: user.data.data.code === 43 || user.data.data.code === 45 || user.data.data.code === 66 ? true : false
        })

      } catch (error) {
        if (error instanceof AxiosError && error.response?.data?.code >= 400) {
          console.log(error)
        }
      }
    })();
  }, []);

  const getUserInfo = () => {
    return axios.get('/isLogin', { withCredentials: true });

  };

  return (
    <Router>
      <UserContext.Provider value={user}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/mypage'} element={<MyPage />} />
          <Route path={'/management'} element={<Manage />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;