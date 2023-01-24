import axios from 'axios'
import getCookie from '../cookie/getCookie'

const deletePost = async (postCode: number) => {
	await axios.delete('/post/delete', {
		headers: {
			Authorization: getCookie('Authorization'),
		},
		data: { postCode },
	})
}

export default deletePost
