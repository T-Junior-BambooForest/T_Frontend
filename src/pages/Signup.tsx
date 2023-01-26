import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import setCookie from '../util/cookie/setCookie'

const Signup = () => {
	const navigate = useNavigate()

	useQuery('getToken', async () => (await axios.post(`/oauth${window.location.search}`)).data, {
		onSuccess: (res) => {
			setCookie('Authorization', res.data, '7')
			localStorage.setItem('code', window.location.search)
			navigate('/')
			window.location.reload()
		},
		onError: (err) => {
			console.log(err)
		},
	})

	return <></>
}

export default Signup
