import axios from 'axios'
import getCookie from '../cookie/getCookie'

const createPost = (category: string, isAnonymous: boolean, contents: string, image: string, imageType: string) => {
	return axios.post(
		'post/create',
		{
			category,
			isAnonymous,
			contents,
			image,
			imageType,
		},
		{
			headers: {
				Authorization: `${getCookie('Authorization')}`,
			},
		}
	)
}

export default createPost
