import React from 'react';
import '../Style/Header.scss';

const Header = () => {
    return (
        <div className='header_wrap'>
            <img src='/images/logoBlack.png' alt='로고' className='logo_image'></img>
            <h1 className='title'>BSMBOO</h1>
            <h1 className='subtitle'>부산소프트웨어마이스터고 대나무숲</h1>
            <div className='login_wrap'>
                <span className='mypage_button'>마이페이지</span>
                <div className='custom_line' />
                <span className='login_button'>로그인</span>
            </div>
        </div>
    );
};

export default Header;