import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import {commentsApiService, postApiService} from "../services/api.services";
import {IPostModel} from "../models/IPostModel";

const PostsComponents:FC = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        postApiService.getAllPosts().then((value) => setPosts(value.data))
    })



    return (
        <div>
            {posts.map((post) =>
                <div key={post.userID}>
                    title:{post.title} <br/>
                    body:{post.body}
                </div>
            )}
        </div>
    );
};

export default PostsComponents;