import React from 'react';
import Header from '../Components/Header';
import Post from '../Components/Post';

const Home = () => {

    return (
        <>
            {localStorage.getItem('theme') === 'dark' ?
                <div>
                    <Header />
                    <Post />
                </div>
                :
                <div style={{ backgroundColor: 'white', height: '100%' }}>
                    <Header />
                    <Post />
                </div>
            }
        </>
    );
};

export default Home;