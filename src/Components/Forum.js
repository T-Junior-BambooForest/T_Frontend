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
                data = data.data;
                data.sort((a, b) => {
                    a = a.boardCode;
                    b = b.boardCode;
                    if (a > b) return -1;
                    if (a < b) return 1;
                })
                console.log(data);
                setAllowPost([...data])
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
                {allowPost && allowPost.map((post, index) => (
                    <PostItem
                        key={post.boardCode}
                        num={index + 1}
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