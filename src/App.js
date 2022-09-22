import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import Home from './Components/Router/Home';
import MyPage from './Components/Router/MyPage';
import Management from './Components/Router/Management';
import NotFound from './Components/Router/NotFound';
import Login from './Components/Router/Login';

const App = () => {

  const getUserInfo = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        try {
          console.log(response);
        } catch (Error) {
          console.log(Error)
        }
      });
  };

  useEffect(() => {
    getUserInfo();
  }, [])

  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/mypage'} element={<MyPage />} />
        <Route path={'/management'} element={<Management />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;