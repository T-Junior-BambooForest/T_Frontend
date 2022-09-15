import React from 'react';
import '../Styles/ForumItem.css';
import styled, { css } from 'styled-components';

const ForumItem = ({ text, name, date, profileImg, contentImg }) => {

    return (
        <div>
            <div className='forumItem'>
                <div className='forumItemBox' style={{ backgroundColor: 'white' }}>
                    <img src={profileImg} className='profile' alt='profile' />
                    <div className='username' style={{ color: 'black' }}>{name}</div><br /><br />
                    <div className='date'>{date}</div><br />
                    <div className='line' />
                    {contentImg !== 'undefined' ? (
                        <img src={contentImg} className='articleImg' />
                    ) : null}

                    <div className='content'>{text}</div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ForumItem);