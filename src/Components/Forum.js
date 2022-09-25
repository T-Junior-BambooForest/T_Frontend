import React from 'react';
import '../Style/Forum.scss';
import PostItem from './PostItem';

const Forum = ({ postInfo, userInfo }) => {

    return (
        <div className='forum_wrap'>
            <div className='article_title_box'>
                <h1 className='article_title'>
                    게시글
                </h1>
            </div>
            <div>
                {postInfo && postInfo.map((post) => (
                    <PostItem
                        key={post.postId}
                        text={post.text}
                        name={userInfo && userInfo[0].name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Forum;