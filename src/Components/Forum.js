import React, { useState } from 'react';
import ForumItem from './ForumItem.js';

const Forum = () => {
    const [items, setItems] = useState('');

    return (
        <>
            {
                items.map((article) => (
                    <ForumItem
                        key={article.id}
                        text={article.text}
                    />
                ))
            }
        </>
    );
};

export default Forum;
