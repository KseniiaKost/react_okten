import React, {useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "../post/PostComponent";



const PostsComponent = () => {
    const[posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {

    }, [])

    return (
        <div>
            {posts.map((post) => (<PostComponent post={post}/>))}
        </div>
    );
};

export default PostsComponent;