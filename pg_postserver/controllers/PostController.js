const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/post', (req,res) => {

    if (req.body.text) {
        const newPost = new Post({
            text: req.body.text
        });

        newPost.save(function (saveError) {
            if (saveError){
                return res.json({success:false, message: "Error on save! Error: "+saveError, error: saveError});
            }
            return res.json({success:true, message: "Post saved successfully!"});
        });
    }else{
        return res.json({success:false, message: "Please enter a post!"});
    }
});

router.get('/posts', (req,res) => {
    //A comment
    Post.find({}).exec(function (error,posts) {
        if (error){
            return res.json({success:false, message: "Error! Error: "+error, error: error});
        }
        return res.json({success:true, posts});
    });
});

module.exports = router;