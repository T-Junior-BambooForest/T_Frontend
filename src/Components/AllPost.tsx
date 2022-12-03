import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import { List, AutoSizer } from 'react-virtualized';
import '../Style/Forum.scss';
import '../Style/PostItem.scss';


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


    list = {allowPost && allowPost?.map((post: any) => (
        <PostItem
            key={post.AllowBoard.AllowBoardCode}
            num={post.AllowBoard.AllowBoardCode}
            contents={post.contents}
            name={post.User.name}
            date={post.createdAt}
            blobImg={post?.Image}
        />
    ))}


    type PostItemType = {
        num: number,
        contents: string,
        name: string,
        date: string,
        blobImg: any,
    }

    const randererrow = ({ num, contents, name, date, blobImg }: PostItemType) => {
        return (
            <div className='content_box_wrap'>
                <div className='content_box'>
                    <div className='header_info_box'>
                        <span className='count_text'>대나무숲 #{num}번째 제보</span>
                        <div className='date_text_box'>
                            <span className='date_text'>
                                {parseInt(date.slice(11, 13)) > 12 ?
                                    `${date.slice(0, 4)}년 ${date.slice(5, 7)}월 ${date.slice(8, 10)}일 PM ${parseInt(date.slice(11, 13)) - 12}${date.slice(13, 16)}`
                                    :
                                    `${date.slice(0, 4)}년 ${date.slice(5, 7)}월 ${date.slice(8, 10)}일 AM ${parseInt(date.slice(11, 13))}${date.slice(13, 16)}`
                                }</span>
                        </div>
                        <div className='author_text_box'>
                            <span className='author_text'>{name}</span>
                        </div>
                    </div>
                    <div className='text_box'>
                        <span className='content_text'>{contents.replace(/<br>/gi, '\n')}</span>
                        {blobImg ?
                            <img src={blobImg} alt='img' className='img' />
                            : ''}
                    </div>
                </div>
            </div >
        );
    };

    return (
        <div className='forum_wrap'>
            <div className='article_title_box'>
                <h1 className='article_title'>
                    모든 제보
                </h1>
            </div>
            <div> 
                <List
                    width={800}
                    height={600}
                    rowHeight={50}
                    rowRenderer={randererrow} // 항목렌더링할때쓰는 함수
                    rowCount={allowPost.data.length} // 항목의 개수
                    overscanRowCount={3}
                    />
            </div>
        </div>
    );
};

export default Forum;
