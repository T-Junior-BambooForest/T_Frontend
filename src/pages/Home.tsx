import React, { useContext } from 'react';
import { UserContext } from '../App';
import Header from '../Components/Header';
import Posting from '../Components/Posting';

const Home = () => {
    const user = useContext(UserContext);
    console.log(user)
    return (
        <div>
            <Header />
            <Posting />
        </div>
    );
};

export default Home;