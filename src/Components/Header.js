import React from 'react';
import styled, { css } from 'styled-components';
import '../Styles/Header.css';
import '../Styles/Header_Section.css'

const Header = ({ images }) => {

    const Box = styled.div`
        ${props =>
            props.darkMode &&
            css`
                border-top:0.2px solid white;
                background-color:#101010;
                color:white;

                &:hover {
                    .home-section:hover,
                    .forum-section:hover,
                    .more-section:hover,
                    .option-section:hover {
                        border-bottom:2px solid white;
                    }
                }
            `}
    `;

    return (
        <div>
            {images === 'Sun' ? <Box darkMode={false}>
                <div className='section'>
                    <div className='home-section1'>부산소프트웨어마이스터고등학교 대나무숲</div>
                    {/* <div className='home-section'>
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
                    </div> */}
                </div>
            </Box> : <Box darkMode={true}>
                <div className='section'>
                    <div className='home-section1'>부산소프트웨어마이스터고등학교 대나무숲</div>
                    {/* <div className='home-section'>
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
                    </div> */}
                </div></Box>}
        </div>
    );
};

export default Header;