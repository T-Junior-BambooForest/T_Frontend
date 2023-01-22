import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import setCookie from '../util/setCookie'

const Signup = () => {
	const navigate = useNavigate()

	const getToken = async () => {
		try {
			const res = await axios.get(`/oauth${window.location.search}`)
			setCookie('Authorization', res.data, '7')
			navigate('/')
			window.location.reload()
		} catch (err) {
			console.log(err)
			alert('로그인 도중 오류가 발생했습니다.')
			navigate('/')
			window.location.reload()
		}
	}

	React.useEffect(() => {
		getToken()
		// eslint-disable-next-line
	}, [])

	return <></>
}

export default Signup
