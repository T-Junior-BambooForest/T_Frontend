import axios from 'axios'
import getCookie from '../cookie/getCookie'

const deletePost = (postCode: number) => {
	return axios.delete('post/delete', {
		headers: {
			Authorization: `${getCookie('Authorization')}`,
		},
		data: {
			postCode,
		},
	})
}

export default deletePost
