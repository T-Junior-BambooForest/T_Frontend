import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../Header';
import '../../Style/Management.scss';

const Management = () => {
    const isManager = true;

    return (
        <div>
            {!isManager ?
                <Navigate to='!' replace={true} />
                : null
            }
            <Header />
            <div className='management_title_box'>
                <h1 className='management_title'>
                    게시글
                </h1>
            </div>
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
                    <div className='management_button_box'>
                        <button className='accept_button' onClick='#'>수락</button>
                        <button className='refuse_button' onClick='#'>거절</button>
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
        </div>
    );
};

export default Management;