import axios from 'axios'

const getToken = async (query: string) => {
	await axios.get(`/oauth${query}`)
}

export default getToken
