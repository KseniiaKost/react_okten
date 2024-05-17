import React, {FC, useEffect, useState} from 'react';

import {ICommentModel} from "../models/ICommentModel";
import {commentsApiService} from "../services/api.services";

const CommentsComponent:FC = () => {
    const [comments,setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        commentsApiService.getAllComments().then((value) =>  setComments(value.data))
    })




    return (
        <div>
            {comments.map((comment) =>
                <div key={comment.id}>
                    name:{comment.name} <br/>
                    body: {comment.body}
                </div>
            )
            }
            </div>
    );
};

export default CommentsComponent;