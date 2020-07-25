import React from 'react';
import { Link } from 'react-router-dom';
import BG from '../assets/background.jpg';

const About = () => {
    return (
        <div>
            <Link to="/Home">Home 으로</Link>
            <p>
                About 입니다.
            </p>
            <img src={BG}></img>
        </div>
    )
}

export default About;
