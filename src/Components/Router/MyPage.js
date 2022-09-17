import React from 'react';
import Header from '../Header';
import '../../Style/MyPage.scss';
import { Link } from 'react-router-dom';

const MyPage = () => {
    const isManager = true;

    return (
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
            <div className='user_info_wrap'>
                <div className='user_nickname_box'>
                    <span className='user_nickname'>{'심지혜'}</span>
                </div>
                <div className='user_school_info_box'>
                    <span className='user_grade'>{'1'}학년</span>
                    <span className='user_class'>{'5'}반</span>
                    <span className='user_number'>{'21'}번</span>
                    <span className='user_name'>{'심지혜'}</span>
                </div>
                <div className='user_change_image_wrap'>
                    <div className='user_change_profile_box' >
                        <input type='file' className='user_file' />
                        <input type='button' className='user_change_file' value='변경' />
                    </div>
                </div>
                <div className='user_change_nickname_wrap'>
                    <div className='change_nickname_box'>
                        <input type='text' placeholder='변경할 닉네임을 입력해주세요.' />
                        <input type='button' className='change_button' value='변경' />
                    </div>
                </div>
                {isManager ?
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
    );

};

export default MyPage;