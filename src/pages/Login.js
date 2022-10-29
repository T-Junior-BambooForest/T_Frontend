import React from 'react';
import '../Style/NotFound.scss';
import Header from '../Components/Header';

const Login = () => {
    function validateURL(url) {
        const parsed = new URL(url)
        return ['https:', 'http:'].includes(parsed.protocol)
    }

    return (
        <div>
            <Header />
            <div className='not_found_wrap'>
                <h1 className='not_found_page'>먼저 로그인을 하셔야합니다!</h1>
                <a href={validateURL(process.env.REACT_APP_LOGIN_URL) ? process.env.REACT_APP_LOGIN_URL : ''}>로그인하기</a>
            </div>
        </div>
    );
};

export default Login;