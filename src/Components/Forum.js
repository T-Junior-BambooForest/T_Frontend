import React from 'react';
import '../Style/Forum.scss';
import PostItem from './PostItem';

const Forum = () => {
    return (
        <div className='forum_wrap'>
            <div className='article_title_box'>
                <h1 className='article_title'>
                    게시글
                </h1>
            </div>
            <div>
                {/* {props.map((prop) => {
                    <PostItem
                        key={key}
                    />
                })
                } */}
                <PostItem />
            </div>
        </div>
    );
};

export default Forum;