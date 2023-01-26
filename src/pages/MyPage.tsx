import React from 'react'
import '../style/MyPage.scss'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import userState from '../util/atom/userStore'
const Header = React.lazy(() => import('../components/Header'))

const MyPage = () => {
	const user = useRecoilValue(userState)

	const onDefaultProfile = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		if (e.target instanceof HTMLImageElement) {
			e.target.src = 'https://bssm.kro.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_default.99e93808.png&w=128&q=75'
		}
	}

	return (
		<div className="mypage_wrap">
			<React.Suspense>
				<Header />
			</React.Suspense>
			<div className="myprofile_title_box">
				<h1 className="myprofile_title">유저 정보</h1>
			</div>
			<div className="myprofile_image_box">
				<img
					className="myprofile_image"
					src={`https://auth.bssm.kro.kr/_next/image?url=https%3A%2F%2Fauth.bssm.kro.kr%2Fresource%2Fuser%2Fprofile%2F${user.code}.png&w=256&q=75`}
					onError={onDefaultProfile}
					alt={'profile'}
				/>
			</div>
			<div className="user_info_wrap">
				<div className="user_nickname_box">
					<span className="user_nickname">{user.name || '익명'}</span>
				</div>
				<div className="user_school_info_box">
					{user.isLogin ? (
						<>
							<span className="user_grade">{user.grade || '?'}학년</span>
							<span className="user_class">{user.class || '?'}반</span>
							<span className="user_name">{user.name || '익명'}</span>
						</>
					) : (
						<span>로그인이 필요합니다.</span>
					)}
				</div>
				{user.role === 'ADMIN' ? (
					<div className="management_page">
						<Link to="/manage" className="management_button">
							관리자 페이지
						</Link>
					</div>
				) : null}
			</div>
		</div>
	)
}

export default MyPage
