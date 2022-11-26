import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import '../Style/Forum.scss';
import PostItem from './PostItem';

const Forum = () => {
    const [allowPost, setAllowPost]: any = useState();

    useEffect(() => {
        (async () => {
            try {
                const post = await getAllowPostInfo();
                setAllowPost(post.data)
            } catch (error) {
                if (error instanceof AxiosError && error.response?.data?.code >= 400) {
                    console.log(error)
                }
            }
        })();
    }, []);

    const getAllowPostInfo = () => {
        return axios.get('/board', { withCredentials: true });
    };

    return (
        <div className='forum_wrap'>
            <div className='article_title_box'>
                <h1 className='article_title'>
                    모든 제보
                </h1>
            </div>
            <div>
                {allowPost && allowPost?.map((post: any) => (
                    <PostItem
                        key={post.AllowBoard.AllowBoardCode}
                        num={post.AllowBoard.AllowBoardCode}
                        contents={post.contents}
                        name={post.code >= 9000 ? `${post.User.name}(신입생)` : post.User.name}
                        date={post.createdAt}
                        blobImg={post?.Image?.data}
                    />
                ))}
            </div>
        </div>
    );
};

export default Forum;