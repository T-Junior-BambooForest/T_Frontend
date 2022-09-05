import React from 'react';
import '../Styles/Write.css';

const Write = () => {
    return (
        <div className='forumItem'>
            <div className='forumItemBox'>
                <img src='/images/picture.png' className='profile' alt='profile' />
                <div className='username'>권강빈</div><br /><br />
                <input className='write' type='text' placeholder='글쓰기'/><br /><br />
                <div className='image-upload-wrap photos'><b>사진</b><input type='file' className='photo' accept='image/*'/></div>
                <div className='image-upload-wrap'><b className='commit'>게시</b><input type='submit' className='photo' /></div>
            </div>
        </div>
    );
};

export default Write;