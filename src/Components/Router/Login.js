import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Header.scss';
import '../../Style/NotFound.scss';

const Login = () => {
    return (
        <div>
            <div className='header_wrap'>
                <img src='/images/logoBlack.png' alt='로고' className='logo_image'></img>
                <Link to='/' className='title_link_tag'><h1 className='title'>BSMBOO</h1></Link>
                <h1 className='subtitle'>부산소프트웨어마이스터고 대나무숲</h1>
                <div className='login_wrap'>
                    <a className='only_login_button' href='https://bssm.kro.kr/oauth/login?clientId=59b9bb6b&redirectURI=http://bsmboo.kro.kr/oauth'>로그인</a>
                </div>
            </div>
            <div className='not_found_wrap'>
                <h1 className='not_found_page'>먼저 로그인을 하셔야합니다!</h1>
                <a className='home_button' href='https://bssm.kro.kr/oauth/login?clientId=59b9bb6b&redirectURI=http://bsmboo.kro.kr/oauth'>로그인하기</a>
            </div>
        </div>
    );
};

export default Login;