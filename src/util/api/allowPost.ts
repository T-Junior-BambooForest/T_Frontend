import axios from 'axios'
import getCookie from '../cookie/getCookie'

const allowPost = async (postCode: number) => {
	await axios.put('/post/manage', {
		headers: {
			Authorization: getCookie('Authorization'),
		},
		postCode,
	})
}

export default allowPost
