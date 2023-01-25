import axios from 'axios'
import getCookie from '../cookie/getCookie'

const getManagePost = () => {
	return axios.get('/post/manage', {
		headers: {
			Authorization: `${getCookie('Authorization')}`,
		},
	})
}

export default getManagePost
