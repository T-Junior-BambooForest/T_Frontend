import React from 'react';
import '../Styles/ForumItem.css';

const ForumItem = ({ text, name, date, profileImg, contentImg, images }) => {


    return (
        <div>
            {images === 'Sun' ?
                <div className='forumItem'>
                    <div className='forumItemBox'>
                        <img src={profileImg} className='profile' alt='profile' />
                        <div className='username'>{name}</div><br /><br />
                        <div className='date'>{date}</div><br />
                        <div className='line' />
                        {contentImg !== 'undefined' ? (
                            <img src={contentImg} className='articleImg' />
                        ) : null}

                        <div className='content'>{text}</div>
                    </div>
                </div>
                :
                <div className='forumItemDark'>
                    <div className='forumItemDarkBox'>
                        <img src={profileImg} className='profile' alt='profile' />
                        <div className='usernamedark'>{name}</div><br /><br />
                        <div className='datedark'>{date}</div><br />
                        <div className='line' />
                        {contentImg !== 'undefined' ? (
                            <img src={contentImg} className='articleImg' />
                        ) : null}

                        <div className='contentdark'>{text}</div>
                    </div>
                </div>}
        </div>
    );
};

export default ForumItem;