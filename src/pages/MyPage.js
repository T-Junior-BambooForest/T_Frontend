import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import '../Style/MyPage.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const MyPage = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user)
        if (!user.isLogin) {
            navigate('/login')
        }
    }, []);

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
                            src='/images/picture.png'
                            alt='profile_image' />
                    </div>
                    <div className='user_info_wrap' style={{ marginTop: '30px' }}>
                        <div className='user_nickname_box'>
                            <span className='user_nickname'>{user.nickname}</span>
                        </div>
                        <div className='user_school_info_box'>
                            <span className='user_grade'>{user.grade}학년</span>
                            <span className='user_class'>{user.class}반</span>
                            <span className='user_number'>{user.studentNo}번</span>
                            <span className='user_name'>{user.name}</span>
                        </div>
                        {user.isManager ?
                            <div className='management_page'>
                                <Link to='/management' className='management_button'>
                                    관리자 페이지
                                </Link>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
                : <Navigate to='/login' />}
        </>
    );

};

export default MyPage;