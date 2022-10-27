import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';

const Home = ({ userInfo }) => {
    return (
        <div>
            <Header userInfo={userInfo} />
            <Post userInfo={userInfo} />
        </div>
    );
};

export default Home;