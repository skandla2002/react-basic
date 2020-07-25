import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/About">About 화면으로</Link>
            <p>Home 입니다.</p>
        </div>
    )
}

export default Home;
