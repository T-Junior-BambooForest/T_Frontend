import React from 'react';
import '../Styles/Header.css';

const Header = () => {
    return (
        <div className='headerBox'>
            <img src={require('../images/T-Logo.png')} className='headerLogo' />
        </div>
    );
};

export default Header;