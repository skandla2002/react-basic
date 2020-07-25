import React from 'react';

class Like extends React.Component {
    constructor(props){
        super(props);
        this.state = { liked: false };
    }

    onClick = () => {
        if(this.state.liked){
            this.setState({
                liked: false
            })
        } else {
                this.setState({
                    liked: true
                })
        }
    }

    render(){
        const text = this.state.liked ? '좋아요 취소' : '좋아요';
        return React.createElement(
            'button',
            {
                onClick: this.onClick
            },
            text,
        )
    }
}

export default Like;