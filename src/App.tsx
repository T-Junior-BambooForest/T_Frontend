import React, { useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Manage from './pages/Manage';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import './App.scss';
import Freshman from './pages/Freshman';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://api.bsmboo.kro.kr:8000'

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
  isManager: boolean
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
  isManager: false,
};

export const UserContext = createContext(userInfo);
export const SetUserContext = createContext((...props: any) => { });

const App = () => {
  const [user, setUser]: any = React.useState(userInfo);

  useEffect(() => {

    (async () => {
      try {
        const user = await getUserInfo();
        setUser({
          ...user.data.data,
          isLogin: true,
        })

      } catch (error) {
        if (error instanceof AxiosError && error.response?.data?.code >= 400) {
          console.log(`현재 비로그인 상태입니다. 로그인 후 서비스를 이용하실 수 있습니다.`)
        }
      }
    })();
  }, []);

  const getUserInfo = () => {
    return axios.get('/isLogin', { withCredentials: true });

  };

  return (
    <Router>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/mypage'} element={<MyPage />} />
            <Route path={'/manage'} element={<Manage />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/new'} element={<Freshman />} />
            <Route path={'*'} element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </SetUserContext.Provider>
    </Router>
  );
};

export default App;