import React from 'react';
import '../../Style/NotFound.scss';
import Header from '../Header';

const Login = () => {
    return (
        <div>
            <Header />
            <div className='not_found_wrap'>
                <h1 className='not_found_page'>먼저 로그인을 하셔야합니다!</h1>
                <a className='home_button' href='https://bssm.kro.kr/oauth/login?clientId=59b9bb6b&redirectURI=http://bsmboo.kro.kr/oauth'>로그인하기</a>
            </div>
        </div>
    );
};

export default Login;