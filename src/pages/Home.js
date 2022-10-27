import React from 'react';
import Header from '../Components/Header';
import Post from '../Components/Post';

const Home = ({ userInfo }) => {
    return (
        <div>
            <Header userInfo={userInfo} />
            <Post userInfo={userInfo} />
        </div>
    );
};

export default Home;