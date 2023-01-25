import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import setCookie from '../util/cookie/setCookie'

const Signup = () => {
	const navigate = useNavigate()

	React.useEffect(() => {
		;(async () => {
			try {
				const res = await axios.post(`/oauth${window.location.search}`)
				setCookie('Authorization', res.data.data, '7')
				localStorage.setItem('code', window.location.search)
				navigate('/')
				window.location.reload()
			} catch (err) {
				console.log(err)
			}
		})()
		// eslint-disable-next-line
	}, [])

	return <></>
}

export default Signup
