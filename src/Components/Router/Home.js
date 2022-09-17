import React from 'react';
import Header from '../Header';
import Post from '../Post';

const Home = ({ isLogin }) => {
    return (
        <div>
            <Header isLogin={isLogin} />
            <Post />
        </div>
    );
};

export default Home;