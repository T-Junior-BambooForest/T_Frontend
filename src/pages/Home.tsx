import React from 'react';
import Header from '../Components/Header';
import Posting from '../Components/Posting';

const Home = () => {

    return (
        <>
            {localStorage.getItem('theme') === 'dark' ?
                <div>
                    <Header />
                    <Posting />
                </div>
                :
                <div style={{ backgroundColor: 'white', height: '100%' }}>
                    <Header />
                    <Posting />
                </div>
            }
        </>
    );
};

export default Home;