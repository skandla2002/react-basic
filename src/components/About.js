import React from 'react';
import { Link } from 'react-router-dom';
import BG from '../assets/background.jpg';
import Button from './createelement/Button';

class About extends React.Component {
    constructor( props ){
        super(props);
        this.state = {
            existImg: false,
            buttonText: '이미지 보이기'
        }
    }
    onclick = () => {
        if(this.state.existImg){
            this.setState({
                existImg: false,
                buttonText: '이미지 보이기'
            })
        }else{
            this.setState({
                existImg: true,
                buttonText: '이미지 숨기기'
            })
        }
    }
    render() {
        const { existImg, buttonText } = this.state;
        return (
            <div>
                <Link to="/Home">Home 으로</Link>
                <p>
                    About 입니다.
                </p>
                <button onClick={this.onclick}>{buttonText}</button>
                <Button label='image label'>image show</Button>
                {
                    existImg &&
                    <img src={BG}></img>
                }
            </div>
        )
    }
}

export default About;
