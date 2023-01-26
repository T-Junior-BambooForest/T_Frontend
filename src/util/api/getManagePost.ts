import axios from 'axios'
import getCookie from '../cookie/getCookie'

const getManagePost = async () => {
	return (
		await axios.get('/post/manage', {
			headers: {
				Authorization: `${getCookie('Authorization')}`,
			},
		})
	).data
}

export default getManagePost
