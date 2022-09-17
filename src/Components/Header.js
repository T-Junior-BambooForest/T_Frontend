import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.scss';

const Header = ({ isLogin }) => {

    return (
        <div className='header_wrap'>
            <img src='/images/logoBlack.png' alt='로고' className='logo_image'></img>
            <Link to='/' className='title_link_tag'><h1 className='title'>BSMBOO</h1></Link>
            <h1 className='subtitle'>부산소프트웨어마이스터고 대나무숲</h1>
            <div className='login_wrap'>
                {isLogin ?
                    <Link to='/mypage' className='mypage_button'>마이페이지</Link>
                    :
                    <Link to='/login' className='mypage_button'>마이페이지</Link>
                }
                <div className='custom_line' />
                <a className='login_button' href='https://bssm.kro.kr/oauth/login?clientId=59b9bb6b&redirectURI=http://bsmboo.kro.kr/oauth'>로그인</a>
            </div>
        </div>
    );
};

export default Header;