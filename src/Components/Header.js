import React from 'react';
import '../Styles/Header.css';
import '../Styles/Header_Section.css'

const Header = () => {
    return (
        <div>
            <div className='headerBox'>
                <img src='../images/T-Logo.png' className='headerLogo' />
            </div>
            <div className='section'>
                <div className='home-section'>
                    HOME
                </div>
                <div className='forum-section'>
                    FORUM
                </div>
                <div className='more-section'>
                    MORE
                </div>
                <div className='option-section'>
                    OPTION
                </div>
            </div>
        </div>
    );
};

export default Header;