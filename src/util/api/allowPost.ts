import axios from 'axios'
import getCookie from '../cookie/getCookie'

const allowPost = async (postCode: number) => {
	return (
		await axios.put(
			'post/allow',
			{
				postCode,
			},
			{
				headers: {
					Authorization: `${getCookie('Authorization')}`,
				},
			}
		)
	).data
}

export default allowPost
