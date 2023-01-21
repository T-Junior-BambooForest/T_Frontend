import React, { useEffect, createContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import MyPage from './pages/MyPage'
import Manage from './pages/Manage'
import NotFound from './pages/NotFound'
import './App.scss'
import Signup from './pages/Signup'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://localhost:8081/api'

interface User {
	class: number
	code: number
	enroled: string
	grade: number
	name: string
	nickname: string
	studentNo: string
	profile: string
	isLogin: boolean
	isManager: boolean
}

const userInfo: User = {
	class: 0,
	code: 0,
	enroled: '',
	grade: 0,
	name: '',
	nickname: '',
	studentNo: '',
	profile: '',
	isLogin: false,
	isManager: false,
}

export const UserContext = createContext(userInfo)
export const SetUserContext = createContext((...props: any) => {})

const App = () => {
	const [user, setUser] = React.useState(userInfo)

	useEffect(() => {
		;(async () => {
			try {
				const res = await axios.get('/')
				setUser({
					...res.data,
					isLogin: true,
				})
			} catch (error) {
				console.log(`현재 비로그인 상태입니다. 로그인 후 서비스를 이용하실 수 있습니다.`)
			}
		})()
	}, [])

	return (
		<Router>
			<SetUserContext.Provider value={setUser}>
				<UserContext.Provider value={user}>
					<Routes>
						<Route path={'/'} element={<Home />} />
						<Route path={'/mypage'} element={<MyPage />} />
						<Route path={'/manage'} element={<Manage />} />
						<Route path={'/oauth'} element={<Signup />} />
						<Route path={'*'} element={<NotFound />} />
					</Routes>
				</UserContext.Provider>
			</SetUserContext.Provider>
		</Router>
	)
}

export default App
