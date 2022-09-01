import React, { useEffect, useState } from 'react';
import '../Styles/Header.css';
import '../Styles/Header_Section.css'

const Header = () => {
    const [images, setImages] = useState('Sun');
    const [logo, setLogo] = useState('T-Logo');
    const [dark, setDark] = useState(false);

    const onClick = () => {
        if (images === 'Sun') {
            setImages('Moon');
            setLogo('T-Logo-White');
        } else if (images === 'Moon') {
            setImages('Sun');
            setLogo('T-Logo');
        }
    }

    return (
        <div>
            <div className='headerBox'
                style={
                    images === 'Sun' ? {
                        backgroundColor: 'white'
                    } : {
                        backgroundColor: 'black'
                    }
                }>
                <img src={`/images/${logo}.png`} className='headerLogo' alt='logo' />
                <img src={`/images/${images}.png`} className='changeModeBtn' alt='changeModeButton' onClick={onClick} />
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