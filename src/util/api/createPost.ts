import axios from 'axios'
import getCookie from '../cookie/getCookie'

const createPost = async (category: string, isAnonymous: boolean, contents: string, image: string, imageType: string) => {
	return (
		await axios.post(
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
	).data
}

export default createPost
