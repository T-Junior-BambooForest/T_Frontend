import axios from 'axios'

const getPost = async () => {
	await axios.get('/post')
}

export default getPost
