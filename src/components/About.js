import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Link to="/Home">Home 으로</Link>
            <p>
                About 입니다.
            </p>
        </div>
    )
}

export default About;
