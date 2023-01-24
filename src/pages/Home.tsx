import React from 'react'
const Header = React.lazy(() => import('../components/Header'))
const Posting = React.lazy(() => import('../components/Posting'))

const Home = () => {
	return (
		<React.Suspense fallback={<h1>Loading....</h1>}>
			<Header />
			<Posting />
		</React.Suspense>
	)
}

export default Home
