import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

interface IProps {
    post:IPostModel;
}

type IPropsType = IProps & {children?:React.ReactNode}

const PostComponent:FC<IPropsType> = ({post}) => {
    return (
        <div>
            {post.id} {post.title}{post.userId}
            <p> {post.body} </p>
        </div>
    );
};

export default PostComponent;