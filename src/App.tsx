import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersComponent from "./components/users/UsersComponent";
import PostsComponent from "./components/posts/PostsComponent";
import {getAllPostsOfSingleUser} from "./services/jph.api.services";


const App = () => {
    const lift = (userId:number) => {getAllPostsOfSingleUser(userId).then(({data}) => {console.log(data)})}
  return (
      <div>
         <UsersComponent lift={lift}/>
          <PostsComponent/>
      </div>
  );
};

export default App;

