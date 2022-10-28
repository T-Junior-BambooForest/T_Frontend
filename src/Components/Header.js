import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.scss';

const Header = () => {
    return (
        <div>
            <div className='header_wrap'>
                <div className='github_logo'>
                    <Link to={'/'}>
                        <svg width="35" height="34" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M25 0.922363C11.1875 0.922363 0 11.7224 0 25.0566C0 35.736 7.15625 44.7562 17.0937 47.954C18.3437 48.1652 18.8125 47.4411 18.8125 46.8076C18.8125 46.2344 18.7812 44.3339 18.7812 42.3126C12.5 43.4288 10.875 40.8344 10.375 39.4768C10.0937 38.783 8.875 36.6411 7.8125 36.0679C6.9375 35.6154 5.6875 34.4991 7.78125 34.469C9.75 34.4388 11.1562 36.2187 11.625 36.9427C13.875 40.593 17.4687 39.5673 18.9062 38.9338C19.125 37.3651 19.7812 36.3092 20.5 35.7059C14.9375 35.1025 9.125 33.0209 9.125 23.7896C9.125 21.165 10.0937 18.9929 11.6875 17.3035C11.4375 16.7001 10.5625 14.2264 11.9375 10.9079C11.9375 10.9079 14.0312 10.2744 18.8125 13.3817C20.8125 12.8387 22.9375 12.5671 25.0625 12.5671C27.1875 12.5671 29.3125 12.8387 31.3125 13.3817C36.0937 10.2442 38.1875 10.9079 38.1875 10.9079C39.5625 14.2264 38.6875 16.7001 38.4375 17.3035C40.0313 18.9929 41 21.1348 41 23.7896C41 33.0511 35.1562 35.1025 29.5937 35.7059C30.5 36.4601 31.2812 37.9081 31.2812 40.1707C31.2812 43.3986 31.25 45.9931 31.25 46.8076C31.25 47.4411 31.7187 48.1953 32.9687 47.954C37.9316 46.3364 42.2441 43.2572 45.2993 39.1497C48.3545 35.0423 49.9985 30.1133 50 25.0566C50 11.7224 38.8125 0.922363 25 0.922363Z" fill="white" />
                        </svg>
                    </Link>
                </div>
                <div className='team_name'>
                    <Link to={'/'}>
                        <span>T-Shape-Junior</span>
                    </Link>
                </div>
                <div className='login_btn'>
                    <span><a href={'https://auth.bssm.kro.kr/oauth?clientId=4bff670f&redirectURI=http://bsmboo.kro.kr:8000/oauth'}>LOGIN</a></span>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <span><Link to={'/mypage'}>MYPAGE</Link></span>
                </div>
            </div>
            <div className='title_box_wrap'>
                <div className='team_image_box'>
                    <img src='/images/logoWhite.png' alt='' className='logo_image' />
                </div>
                <div className='align_box'>
                    <div className='service_name'>
                        <span className='bamboo_name'>부산소마고 대나무숲</span>
                    </div>
                    <div className='align_boxs'>
                        <div className='image_box'>
                            <img src='/images/location.png' alt='' className='location_box' />
                        </div>
                        <div className='name_box'>
                            <span className='school_names'>Busan, Software Meister School</span>
                        </div>
                    </div>
                </div>
                <div className='follow_btn_box_link'>
                    <a className='a_link_button' href='https://www.instagram.com/bssm.forest/' target={'_blank'} rel={'noreferrer'}>Follow</a>
                </div>
            </div>
        </div >
    );
};

export default Header;