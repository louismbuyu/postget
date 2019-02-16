import React, {Component} from 'react';
import './PostItem.scss';

class PostItem extends Component {
    render() {
        return (
            <div className="PostItem">{this.props.post.text}</div>
        );
    }
}

export default PostItem;