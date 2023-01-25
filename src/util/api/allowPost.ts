import axios from 'axios'
import getCookie from '../cookie/getCookie'

const allowPost = (postCode: number) => {
	return axios.put(
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
}

export default allowPost
