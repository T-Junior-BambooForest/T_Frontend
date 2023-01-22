import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
import '../Style/Header.scss'
import BambooDark from '../Image/bambooDark.svg'
import locationLogo from '../Image/location.svg'

const Header = () => {
	const user = React.useContext(UserContext)

	return (
		<div className="header-wrap">
			<div className="title_box_wrap">
				<Link to="/">
					<div className="team_image_box">
						<img src={`${BambooDark}`} alt="bamboo" />
					</div>
				</Link>
				<div className="align_box">
					<div className="service_name">
						<span className="bamboo_name">부산소마고 대나무숲</span>
					</div>
					<div className="align_boxs">
						<div className="image_box">
							<img src={`${locationLogo}`} alt="bamboo" />
						</div>
						<div className="name_box">
							<span className="school_names">Busan, Software Meister High School</span>
						</div>
					</div>
				</div>
				{user.isLogin ? (
					<Link to="/mypage" className="login">
						마이페이지
					</Link>
				) : (
					<a
						className="login"
						href="https://auth.bssm.kro.kr/oauth?clientId=4f6a1b29&redirectURI=https://api.bsmboo.kro.kr:8000/oauth">
						로그인
					</a>
				)}
			</div>
		</div>
	)
}

export default Header
