import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import '../Style/Header.scss';
import BambooDark from '../Image/bambooDark.svg';
import locationLogo from '../Image/location.svg';

const Header = ({ mode }: any) => {
    let user = useContext(UserContext)

    function validateURL(url: string) {
        const parsed = new URL(url)
        return ['https:', 'http:'].includes(parsed.protocol)
    }

    return (
        <div>
            <div className='header_wrap' >
                <div className='team_name'>
                    <Link to={'/'}>
                        <span className='team_name_text'></span>
                    </Link>
                </div>
                <div className='login_btn'>
                    {user.isLogin ? '' :
                        <>
                            <span>
                                <Link to={'/new'} className='login_sub_btn'>
                                    신입생로그인
                                </Link>
                            </span>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <span>
                                <a className='login_sub_btn'
                                    href={validateURL('https://auth.bssm.kro.kr/oauth?clientId=4f6a1b29&redirectURI=https://api.bsmboo.kro.kr:8000/oauth')
                                        ? 'https://auth.bssm.kro.kr/oauth?clientId=4f6a1b29&redirectURI=https://api.bsmboo.kro.kr:8000/oauth'
                                        : ''}>
                                    LOGIN
                                </a>
                            </span>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                        </>}
                    <span><Link className='mypage_btn' to={'/mypage'}>MYPAGE</Link></span>
                </div>
            </div>
            <div className='title_box_wrap'>
                <div className='team_image_box'>
                    <img src={`${BambooDark}`} alt='' />
                </div>
                <div className='align_box'>
                    <div className='service_name'>
                        <span className='bamboo_name'>부산소마고 대나무숲</span>
                    </div>
                    <div className='align_boxs' >
                        <div className='image_box' >
                            <img src={`${locationLogo}`} alt='' />
                        </div>
                        <div className='name_box' >
                            <span className='school_names'>Busan, Software Meister High School</span>
                        </div>
                    </div>
                </div>
                <div className='follow_btn_box_link'>
                    <a className='a_link_button'
                        href='https://www.instagram.com/bssm.forest/'
                        target={'_blank'}
                        rel={'noreferrer'}>
                        instagram
                    </a>
                </div>
            </div>
        </div >
    );
};

export default Header;