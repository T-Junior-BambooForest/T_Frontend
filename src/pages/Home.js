import React, { useContext } from 'react';
import { UserContext } from '../App';
import Header from '../Components/Header';
import Post from '../Components/Post';

const Home = () => {
    const user = useContext(UserContext);

    return (
        <div>
            <Header />
            <Post />
        </div>
    );
};

export default Home;