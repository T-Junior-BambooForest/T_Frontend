import React from 'react';
import Header from '../Header';
import Post from '../Post';

const Home = ({ userInfo }) => {
    return (
        <div>
            <Header userInfo={userInfo} />
            <Post userInfo={userInfo} />
        </div>
    );
};

export default Home;