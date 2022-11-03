import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import '../Style/Header.scss';
import BambooLogo from '../svgs/bambooLogo.svg';
import BambooDark from '../svgs/bambooDark.svg';
import locationLogo from '../svgs/location.svg';
import locationDark from '../svgs/locationDark.svg';
import sun from '../svgs/sun.svg';
import moon from '../svgs/moon.svg';

const Header = () => {
    const user = useContext(UserContext)

    useEffect(() => {
        if (!localStorage.getItem('isOn')) {
            localStorage.setItem('theme', 'dark')
        }
    }, [])

    function validateURL(url) {
        const parsed = new URL(url)
        return ['https:', 'http:'].includes(parsed.protocol)
    }

    const onClickMode = () => {
        localStorage.setItem('isOn', true)
        if (localStorage.getItem('theme') === 'dark') {
            localStorage.setItem('theme', 'light')
            window.location.reload('/')
        } else {
            localStorage.setItem('theme', 'dark')
            window.location.reload('/')
        }
    }

    return (
        <div>
            <div className='header_wrap' >
                <div className='team_name'>
                    <Link to={'/'}>
                        <span className='team_name_text' style={{ cursor: 'pointer' }}></span>
                    </Link>
                </div>
                <div className='login_btn'>
                    {user.isLogin ? '' :
                        <><span><a className='login_sub_btn' href={validateURL(process.env.REACT_APP_LOGIN_URL) ? process.env.REACT_APP_LOGIN_URL : ''}>LOGIN</a></span>&nbsp;&nbsp;|&nbsp;&nbsp;</>}
                    <span><Link className='mypage_btn' to={'/mypage'}>MYPAGE</Link></span>
                    {localStorage.getItem('theme') === 'dark' ?
                        <img src={moon} alt='' className='mode-button' onClick={onClickMode} />
                        :
                        <img src={sun} alt='' className='mode-button' onClick={onClickMode} />
                    }
                </div>
            </div>
            <div className='title_box_wrap' style={localStorage.getItem('theme') === 'dark' ? null : { backgroundColor: '#f6f8fa', border: '1px solid rgba(27,31,36,0.15)' }}>
                <div className='team_image_box' style={localStorage.getItem('theme') === 'dark' ? { backgroundColor: 'black' } : { backgroundColor: '#f6f8fa', border: '1px solid rgba(27,31,36,0.15)' }}>
                    {localStorage.getItem('theme') === 'light' ?
                        <img src={BambooLogo} alt='' />
                        :
                        <img src={BambooDark} alt='' />}
                </div>
                <div className='align_box'>
                    <div className='service_name' style={localStorage.getItem('theme') === 'dark' ? { color: 'white' } : { color: 'black' }}>
                        <span className='bamboo_name'>부산소마고 대나무숲</span>
                    </div>
                    <div className='align_boxs' >
                        <div className='image_box' >
                            {localStorage.getItem('theme') === 'dark' ?
                                <img src={locationLogo} alt='' />
                                :
                                <img src={locationDark} alt='' />
                            }
                        </div>
                        <div className='name_box' >
                            <span className='school_names' style={localStorage.getItem('theme') === 'dark' ? null : { color: 'black' }}>Busan, Software Meister High School</span>
                        </div>
                    </div>
                </div>
                <div className='follow_btn_box_link' style={localStorage.getItem('theme') === 'dark' ? null : { backgroundColor: '#f6f8fa', border: '1px solid rgba(27,31,36,0.15)' }}>
                    <a className='a_link_button' href='https://www.instagram.com/bssm.forest/' target={'_blank'} rel={'noreferrer'}
                        style={localStorage.getItem('theme') === 'dark' ? null : { color: 'black' }}
                    >instagram</a>
                </div>
            </div>
        </div >
    );
};

export default Header;