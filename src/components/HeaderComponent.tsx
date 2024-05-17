import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            Header
            <br/>
            <Link to={'users'} >Users</Link>
            <br/>
            <Link to={'posts'} >Posts</Link>
            <br/>
            <Link to={'comments'} >Comments</Link>
          <hr/>
        </div>
    );
};

export default HeaderComponent;