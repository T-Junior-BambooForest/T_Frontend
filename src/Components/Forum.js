import React, { useState } from 'react';
import ForumItem from './ForumItem.js';

const Forum = () => {
    const [items, setItems] = useState(
        [
            // {
            //     id: 0,
            //     text: 'Hello, My name is Park Ubin. I am frontend Developer.',
            //     name: 'Park Ubin',
            //     date: '2022-09-01',
            // },
            // {
            //     id: 1,
            //     text: "It is just Text content. so this sentence is don't have mean. Have a nice day, Bro.",
            //     name: 'Test Case Developer',
            //     date: '2021-12-28',
            // },
            // {
            //     id: 2,
            //     text: "hihi",
            //     name: '박우빈',
            //     date: '2022-01-31',
            // },
            // {
            //     id: 3,
            //     text: "Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter ",
            //     name: 'Hello World',
            //     date: '2006-03-27',
            // },
            {
                id: 4,
                text: 'please',
                name: 'Image Maker',
                date: '2022-08-13',
                profileImg: '../images/undefined.jpeg',
                contentImg: '../images/picture.png',
            }
        ]
    );
    return (
        <div>
            <img src={require('../images/ForumTitleWhite.png')} className='forumTitle' />
            {
                items.map((item) => (
                    <ForumItem
                        key={item.id}
                        text={item.text}
                        name={item.name}
                        date={item.date}
                        profileImg={item.profileImg}
                    />
                ))
            }
        </div>
    );
};

export default Forum;
