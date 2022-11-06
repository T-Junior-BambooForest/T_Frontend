import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import '../Style/Forum.scss';
import PostItem from './PostItem';

const Forum = () => {
    const [allowPost, setAllowPost] = useState();

    useEffect(() => {
        (async () => {
            try {
                let data = await getAllowPostInfo();
                setAllowPost(data.data)
                console.log(allowPost)
            } catch (error) {
                if (error instanceof AxiosError && error.response?.status >= 400) {
                    setAllowPost((prev) => ({ ...prev, isLogin: false }));
                }
            }
        })();
    }, []);

    const getAllowPostInfo = () => {
        return axios.get(process.env.REACT_APP_BOARD_URL, { withCredentials: true });
    };

    return (
        <div className='forum_wrap'>
            <div className='article_title_box'>
                <h1 className='article_title' style={localStorage.getItem('theme') === 'dark' ? { color: 'white' } : { color: 'black' }}>
                    모든 제보
                </h1>
            </div>
            <div>
                {allowPost && allowPost?.map((post, index) => (
                    <PostItem
                        key={index}
                        num={index}
                        contents={post.contents}
                        name={post.User.name}
                        date={post.createdAt}
                    />
                ))}
            </div>
        </div>
    );
};

export default Forum;