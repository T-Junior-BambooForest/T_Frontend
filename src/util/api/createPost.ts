import axios from 'axios'
import getCookie from '../cookie/getCookie'

const createPost = async (category: string, isAnonymous: boolean, contents: string, Image: string, imageType: string) => {
	await axios.post('/post/create', {
		headers: {
			Authorization: getCookie('Authorization'),
		},
		category,
		isAnonymous,
		contents,
		Image,
		imageType,
	})
}

export default createPost
