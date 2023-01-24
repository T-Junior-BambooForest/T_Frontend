import React from 'react'
const Header = React.lazy(() => import('../componentsasvsa/Header'))
const Posting = React.lazy(() => import('../componentsasvsa/Posting'))

const Home = () => {
	return (
		<React.Suspense fallback={<h1>Loading....</h1>}>
			<Header />
			<Posting />
		</React.Suspense>
	)
}

export default Home
