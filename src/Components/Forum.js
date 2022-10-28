import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import '../Style/Forum.scss';
import PostItem from './PostItem';

const Forum = () => {
    const [allowPost, setAllowPost] = useState();

    useEffect(() => {
        (async () => {
            try {
                const data = await getAllowPostInfo();
                setAllowPost(...data.data)

            } catch (error) {
                if (error instanceof AxiosError && error.response?.status >= 400) {
                    setAllowPost((prev) => ({ ...prev, isLogin: false }));
                }
            }
        })();
    }, []);

    const getAllowPostInfo = () => {
        return axios.get("http://bsmboo.kro.kr:8000/board", { withCredentials: true });
    };

    return (
        <div className='forum_wrap'>
            <div className='article_title_box'>
                <h1 className='article_title' style={{ color: '#E5EDF5' }}>
                    모든 제보
                </h1>
            </div>
            <div>
                {allowPost && allowPost.reverse().map((post, index) => (
                    <PostItem
                        key={post.boardCode}
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