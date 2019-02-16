import React, {Component} from 'react';
import './Get.scss';
import {Button} from "antd";
import PostItem from "../postitem/PostItem";
import axios from 'axios';

class Get extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }

    getAllPosts = () => {
        axios.get('/api/post/posts')
            .then(response => {
                if (response.data.success){
                    this.setState({
                        posts: response.data.posts
                    })
                }
            })
            .catch(error => {
                console.log("Error: ",error);
            })
    };

    render() {
        return (
            <div className="Get">
                <div className="title">
                    The Get
                </div>
                <div className="action">
                    <Button onClick={this.getAllPosts} type="primary" block>Get The Posts</Button>
                </div>
                <div className="content">
                    {
                        this.state.posts.map((post,index) => {
                            return (<PostItem key={index} post={post}/>)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Get;