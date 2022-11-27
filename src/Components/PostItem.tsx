import React from 'react';
import '../Style/PostItem.scss';

type PostItemType = {
    num: number,
    contents: string,
    name: string,
    date: string,
    blobImg: any,
}

const PostItem = ({ num, contents, name, date, blobImg }: PostItemType) => {
    const blob = new TextDecoder("utf-8");
    const Uint8 = new Uint8Array(blobImg)
    const imgSrc = blob.decode(Uint8)

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
                    {imgSrc ?
                        <img src={imgSrc} alt='img' className='img' />
                        : ''}
                </div>
            </div>
        </div >
    );
};

export default React.memo(PostItem);