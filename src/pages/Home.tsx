import React from 'react'
import Header from '../components/Header'
import Posting from '../components/Posting'

const Home = () => {
	return (
		<React.Suspense fallback={<h1>Loading....</h1>}>
			<Header />
			<Posting />
		</React.Suspense>
	)
}

export default Home
