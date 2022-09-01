import React from 'react';
import '../Styles/ForumItem.css';

const ForumItem = ({ key, text }) => {
    return (
        <div className='forumItem'>
            <div className='forumItemBox'>
                <img src={require('../images/defaultProfile.jpeg')} className='profile' />
                <div className='username'>{'Ubin'}</div><br /><br />
                <div className='date'>{'2022-08-31'}</div><br />
                <div className='content'>{'asnjbkkvnjvnjknkankvjn'}</div>
            </div>
        </div>
    );
};

export default ForumItem;