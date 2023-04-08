import axios from 'axios'
import getCookie from '../cookie/getCookie'

interface CreatePostType {
	category: string
	isAnonymous: boolean
	contents: string
	image: string
	imageType: string
}

const createPost = async ({ category, isAnonymous, contents, image, imageType }: CreatePostType) => {
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
