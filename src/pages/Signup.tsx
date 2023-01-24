import { AxiosResponse } from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getToken from '../util/api/getToken'
import setCookie from '../util/cookie/setCookie'

const Signup = () => {
	const navigate = useNavigate()

	React.useEffect(() => {
		;(async () => {
			const res = (await getToken(window.location.search)) as unknown as AxiosResponse
			setCookie('Authorization', res.data, '7')
			navigate('/')
			window.location.reload()
		})()
		// eslint-disable-next-line
	}, [])

	return <></>
}

export default Signup
