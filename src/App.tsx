import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import MyPage from './pages/MyPage'
import Manage from './pages/Manage'
import NotFound from './pages/NotFound'
import Signup from './pages/Signup'
import { useSetRecoilState } from 'recoil'
import userState from './util/atom/userState'
import getCookie from './util/cookie/getCookie'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://api.bsmboo.kro.kr/api'

const App = () => {
	const setUser = useSetRecoilState(userState)

	useEffect(() => {
		;(async () => {
			try {
				const res = (
					await axios.get(`/oauth`, {
						headers: {
							Authorization: `${getCookie('Authorization')}`,
						},
					})
				).data
				setUser({
					...res.data,
					isLogin: true,
				})
				console.log(res.data)
			} catch (error) {
				console.log(`현재 비로그인 상태입니다. 로그인 후 서비스를 이용하실 수 있습니다.`)
			}
		})()
	}, [])

	return (
		<Router>
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/mypage'} element={<MyPage />} />
				<Route path={'/manage'} element={<Manage />} />
				<Route path={'/oauth'} element={<Signup />} />
				<Route path={'*'} element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default App
