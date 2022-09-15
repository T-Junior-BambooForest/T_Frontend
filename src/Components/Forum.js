import React from 'react';
import ForumItem from './ForumItem.js';

const Forum = ({ items }) => {

    return (
        <div>
            {
                items.map((item) => (
                    <ForumItem
                        key={item.id}
                        text={item.text}
                        name={item.name}
                        date={item.date}
                        profileImg={item.profileImg}
                        contentImg={item.contentImg}
                    />
                ))
            }
        </div>
    );
};


export default Forum;
