import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import '../Style/Forum.scss'
import PostItem from './PostItem'

interface AllowPostType {
    AllowBoard: AllowBoard
    contents: string,
    User: User,
    createdAt: string,
    Image: string,
}

type User = {
    name: string,
}

type AllowBoard = {
    AllowBoardCode: number
}

const AllPost = () => {
    const [allowPost, setAllowPost] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const post = await getAllowPostInfo()
                setAllowPost(post.data)
            } catch (error) {
                if (error instanceof AxiosError && error.response?.data?.code >= 400) {
                    alert('에러가 발생했습니다.')
                    console.log(error)
                }
            }
        })()
    }, [])

    const getAllowPostInfo = () => {
        return axios.get('/board', { withCredentials: true })
    };

    return (
        <div className='forum_wrap'>
            <div className='article_title_box'>
                <h1 className='article_title'>모든 제보</h1>
            </div>
            <div>
                {allowPost && allowPost?.map((post: AllowPostType) => (
                    <PostItem
                        key={post.AllowBoard.AllowBoardCode}
                        num={post.AllowBoard.AllowBoardCode}
                        contents={post.contents}
                        name={post.User.name}
                        date={post.createdAt}
                        blobImg={post?.Image}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllPost;