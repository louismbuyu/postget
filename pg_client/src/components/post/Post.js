import React, {Component} from 'react';
import './Post.scss'
import { Input, notification} from "antd";
import axios from 'axios';

class Post extends Component {
    postThePost = (value) => {
        if (value){
            axios
                .post('/api/post/post', {text: value})
                .then(response => {
                    if(response.data.success){
                        this.openNotificationWithIcon('success',response.data.message);
                    }
                })
                .catch(error => {
                    this.openNotificationWithIcon('error',error);
                })
        }else{
            this.openNotificationWithIcon('error','No post provided! Please provide a post!');
        }
    };

    openNotificationWithIcon = (type,message) => {
        notification[type]({
            message: type,
            description: message,
        });
    };

    render() {
        return (
            <div className="Post">
                <div className="title">
                    The Post
                </div>
                <div className="input">
                    <Input.Search
                        placeholder="input the post"
                        enterButton="Post"
                        size="default"
                        onSearch={value => this.postThePost(value)}
                    />
                </div>
            </div>
        );
    }
}

export default Post;