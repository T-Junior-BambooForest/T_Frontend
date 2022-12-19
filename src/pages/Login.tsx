import React from 'react'
import '../Style/NotFound.scss'
import Header from '../Components/Header'

const Login = () => {
    const validateURL = (url: string) => {
        const parsed = new URL(url)
        return ['https:', 'http:'].includes(parsed.protocol)
    }

    return (
        <div>
            <Header />
            <div className='not_found_wrap'>
                <h1 className='not_found_page'>먼저 로그인을 하셔야합니다!</h1>
                <a href={validateURL('https://auth.bssm.kro.kr/oauth?clientId=4bff670f&redirectURI=https://bsmboo.kro.kr:8000/oauth') ? 'https://auth.bssm.kro.kr/oauth?clientId=4bff670f&redirectURI=https://bsmboo.kro.kr:8000/oauth' : ''}>로그인하기</a>
            </div>
        </div>
    )
}

export default Login