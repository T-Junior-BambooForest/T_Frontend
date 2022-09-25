import React, { useCallback, useState } from 'react';
import '../Style/Post.scss';
import axios from 'axios';
import Forum from './Forum';

const Post = ({ userInfo }) => {
    const [date] = useState(new Date());
    const [isAnony, setIsAnony] = useState(true);
    const [postInfo, setPostInfo] = useState([
        {
            postId: 1,
            postDate: date,
            text: 'ㅁ',
        },
        {
            postId: 2,
            postDate: date,
            text: 'ㄴ',
        },
        {
            postId: 3,
            postDate: date,
            text: 'ㅇㄴ머ㅜ람ㅍ',
        },
    ])

    const onClickIsAnony = useCallback(() => {
        setIsAnony(!isAnony);
    }, [isAnony])

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        isAnony ? (
            axios
                .post(
                    '/bsmboo.kro.kr/users/login',
                    { postInfo },
                    { withCredentials: true, }
                )
                .then(() => {
                    // revalidate();
                })
                .catch((error) => {
                    alert(error);
                })
        ) : (
            axios
                .post(
                    '/bsmboo.kro.kr/users/login',
                    { userInfo, postInfo },
                    { withCredentials: true, }
                )
                .then(() => {
                    // revalidate();
                })
                .catch((error) => {
                    alert(error);
                })
        )

    }, [isAnony, postInfo, userInfo]
    );

    const onChangeText = useCallback((e) => {
        setPostInfo({
            text: e.target.value
        })
    }, [])

    return (
        <div className='article_wrap'>
            <div className='article_box'>
                <div className='post_title_box'>
                    <h1 className='post_title'>글 작성하기</h1>
                </div>
                <div className='editor_box'>
                    <form onSubmit={onSubmit}>
                        <input type='text' className='editor' onChange={onChangeText} />
                        <label htmlFor='anony-button'>익명 여부</label>
                        <input type='button' id='anony-button' onClick={onClickIsAnony} value='✓' />
                        <button type='submit'>게시</button>
                    </form>
                </div>
                <Forum
                    postInfo={postInfo}
                    userInfo={userInfo}
                />
            </div>
        </div>

    );
};

export default Post;