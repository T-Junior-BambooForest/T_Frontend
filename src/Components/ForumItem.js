import React, { useEffect } from 'react';
import '../Styles/ForumItem.css';

const ForumItem = ({ text, name, date, profileImg, contentImg }) => {

    console.log(contentImg);

    return (
        <div className='forumItem'>
            <div className='forumItemBox'>
                <img src={profileImg} className='profile' />
                <div className='username'>{name}</div><br /><br />
                <div className='date'>{date}</div><br />
                <div className='line' />
                {contentImg !== 'undefined' ? (
                    <img src={contentImg} className='articleImg' />
                ) : null}

                <div className='content'>{text}</div>
            </div>
        </div>
    );
};

export default ForumItem;