import axios from 'axios'
import getCookie from '../cookie/getCookie'

const getAllPost = async () => {
	await axios.get('/post/manage', {
		headers: {
			Authorization: getCookie('Authorization'),
		},
	})
}

export default getAllPost
