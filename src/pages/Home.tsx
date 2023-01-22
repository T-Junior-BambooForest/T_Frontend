import React from 'react'
const Header = React.lazy(() => import('../Components/Header'))
const Posting = React.lazy(() => import('../Components/Posting'))

const Home = () => {
	return (
		<React.Suspense fallback={<h1>Loading....</h1>}>
			<Header />
			<Posting />
		</React.Suspense>
	)
}

export default Home
