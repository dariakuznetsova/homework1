import React, { Component } from 'react';
import './NewsPost.css';

class NewsPost extends Component {

    render() {
       return (
        <p>
            {this.props.text}
        </p>
       )
    }
}

export default NewsPost;
