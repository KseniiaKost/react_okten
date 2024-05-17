import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import UsersComponent from "../components/UsersComponent";
import PostsComponents from "../components/PostsComponents";
import CommentsComponent from "../components/CommentsComponent";

export const routerConfig = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {
                    index:true,
                    element: <UsersComponent/>
                },
                {
                    path: 'users',
                    element: <UsersComponent/>
                },
                {
                    path: 'posts',
                    element: <PostsComponents/>
                },

                {
                    path: 'comments',
                    element: <CommentsComponent/>
                }
            ]
        }
    ]
)