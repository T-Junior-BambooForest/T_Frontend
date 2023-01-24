import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/NotFound.scss'
const Header = React.lazy(() => import('../componentsasvsa/Header'))

const NotFound = () => {
	return (
		<div>
			<Header />
			<div className="not_found_wrap">
				<h1 className="not_found_page">해당 페이지가 존재하지 않습니다.</h1>
				<Link to="/" className="home_button">
					홈으로 돌아가기
				</Link>
			</div>
		</div>
	)
}

export default NotFound
