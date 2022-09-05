import React, { useState } from 'react';
import ForumItem from './ForumItem.js';

const Forum = ({ images }) => {
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
    return (
        <div>
            {images === 'Sun' ?
                <img src='/images/ForumTitleWhite.png' className='forumTitle' alt='Title' /> :
                <img src='/images/ForumTitleBlack.png' className='forumTitle' alt='Title' />
            }

            {
                items.map((item) => (
                    <ForumItem
                        key={item.id}
                        text={item.text}
                        name={item.name}
                        date={item.date}
                        profileImg={item.profileImg}
                        contentImg={item.contentImg}
                        images={images}
                    />
                ))
            }
        </div>
    );
};


export default Forum;
