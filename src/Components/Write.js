import React, { useState } from 'react';
import '../Styles/Write.css';
import Forum from './Forum';

const Write = ({ images }) => {
    const [items, setItems] = useState(
        [
            {
                id: 0,
                text: 'Hello, My name is Park Ubin. I am frontend Developer.',
                name: 'Park Ubin',
                date: '2022-09-01',
                profileImg: '/images/picture.png',
            },
            {
                id: 1,
                text: "hihi",
                name: '박우빈',
                date: '2022-01-31',
                profileImg: '/images/ForumTitleBlack.png',
            },
            {
                id: 2,
                text: "Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter ",
                name: 'Hello World',
                date: '2006-03-27',
                profileImg: '/images/undefined.jpeg',
            },
            {
                id: 3,
                text: 'please',
                name: 'Image Maker',
                date: '2022-08-13',
                contentImg: '/images/picture.png',
                profileImg: '/images/undefined.jpeg',
            }
        ]
    );

    const onSubmit = e => {
        e.preventDefault();

        fetch("#", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                postId: items.id,
                postDate: items.date,
                content: items.text,
                username: items.name,
                contentImage: items.contentImg,
                profileImage: items.profileImg,
            }),
        }).then((res) => {
            if (res.ok) {
                alert("글 작성이 완료되었습니다.");
            }
        });
    }

    const preventDefault = event => {
        event.preventDefault();
    }
    const [writeContents, setWriteContents] = useState('');

    const onChange = e => {
        setWriteContents(e.target.value);
    }

    return (
        <div>
            {images ?
                <div className='forumItem'>
                    <div className='forumItemBox'>
                        <form onSubmit={preventDefault}>
                            <img src='/images/picture.png' className='profile' alt='profile' />
                            <input
                                className='write'
                                type='text'
                                placeholder={'박우빈님, 무슨 생각을 하고 계신가요?'}
                                value={writeContents}
                                onChange={onChange}
                            />
                            <div className='line' />
                            <input type='submit' value='게시' className='btn' id='writeBtn' />
                        </form>
                    </div>
                </div>
                :
                <div className='forumItemDark'>
                    <div className='forumItemDarkBox'>
                        <form onSubmit={preventDefault}>
                            <img src='/images/picture.png' className='profile' alt='profile' />
                            <input
                                className='write'
                                type='text'
                                placeholder={'박우빈님, 무슨 생각을 하고 계신가요?'}
                                value={writeContents}
                                onChange={onChange}
                            />
                            <div className='line' />
                            <input type='submit' value='게시' className='darkBtn' id='writeBtn' onClick={onSubmit} />
                        </form>
                    </div>
                </div>}
            {
                <Forum
                    images={images}
                    items={items}
                />
            };
        </div>
    );
};

export default Write;