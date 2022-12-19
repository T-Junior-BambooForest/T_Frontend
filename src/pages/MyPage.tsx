import React, { useContext } from 'react'
import Header from '../Components/Header'
import '../Style/MyPage.scss'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

const MyPage = () => {
    const user = useContext(UserContext)

    const onDefaultProfile = (e: any) => {
        e.target.src = "https://bssm.kro.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_default.99e93808.png&w=128&q=75"
    }

    return (
        <>
            {user.isLogin ?
                <div className='mypage_wrap'>
                    <Header />
                    <div className='myprofile_title_box'>
                        <h1 className='myprofile_title'>
                            유저 정보
                        </h1>
                    </div>
                    <div className='myprofile_image_box'>
                        <img className='myprofile_image'
                            src={`https://auth.bssm.kro.kr/_next/image?url=https%3A%2F%2Fauth.bssm.kro.kr%2Fresource%2Fuser%2Fprofile%2F${user.code}.png&w=256&q=75`}
                            onError={onDefaultProfile} alt={'profile'} />
                    </div>
                    <div className='user_info_wrap'>
                        <div className='user_nickname_box'>
                            <span className='user_nickname'>{user.nickname}</span>
                        </div>
                        <div className='user_school_info_box'>
                            {user.grade === 99 ?
                                ''
                                :
                                <>
                                    <span className='user_grade'>{user.grade}학년</span>
                                    <span className='user_class'>{user.class}반</span>
                                    <span className='user_number'>{user.studentNo}번</span>
                                    <span className='user_name'>{user.name}</span>
                                </>
                            }
                        </div>
                        {user.isManager ?
                            <div className='management_page'>
                                <Link to='/manage' className='management_button'>
                                    관리자 페이지
                                </Link>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
                : (
                    <>
                        <Header />
                        <div className='need-login-wrap'><h1 >로그인이 필요합니다.</h1></div>
                    </>
                )}
        </>
    )

}

export default MyPage