import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import '../Style/Forum.scss';
import PostItem from './PostItem';

type AllowBoard = {
    AllowBoardCode: number,
}

type UserType = {
    name: string,
}

interface PostType {
    AllowBoard: AllowBoard,
    contents: string,
    User: UserType,
    createdAt: any,
}

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
                        name={post.User.name}
                        date={post.createdAt}
                        blobImg={post?.Image?.data}
                    />
                ))}
            </div>
        </div>
    );
};

export default Forum;