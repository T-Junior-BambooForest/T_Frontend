import React from 'react';
import '../Style/NotFound.scss';
import Header from '../Components/Header';

const Login = () => {
    return (
        <div>
            <Header />
            <div className='not_found_wrap'>
                <h1 className='not_found_page'>먼저 로그인을 하셔야합니다!</h1>
                <a className='home_button' href='https://auth.bssm.kro.kr/oauth?clientId=4bff670f&redirectURI=http://bsmboo.kro.kr:8000/oauth'>로그인하기</a>
            </div>
        </div>
    );
};

export default Login;