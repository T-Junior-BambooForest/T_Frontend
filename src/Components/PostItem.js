import React from 'react';
import '../Style/PostItem.scss';

const PostItem = () => {
    return (
        <div className='content_box_wrap'>
            <div className='content_box'>
                <div className='profile_image_box'>
                    <img className='profile_image' src='/images/picture.png' alt='프로필' />
                </div>
                <div className='user_box'>
                    <div className='user_name_box'>
                        <h1 className='user_name'>username</h1>
                    </div>
                    <div className='post_date_box'>
                        <h1 className='post_date'>2022년 9월 31</h1>
                    </div>
                </div>
                <div className='custom_line' />
                <div className='contents'>
                    <h1 className='content'>
                        just longer letter just longer letter just longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letterjust longer letter
                    </h1>
                </div>
                <div className='content_image_box'>
                    <img className='content_image' src='/images/picture.png' alt='i' />
                </div>
            </div>
        </div>
    );
};

export default PostItem;