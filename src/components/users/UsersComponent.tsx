import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import UserComponent from "../user/UserComponent";
import {getAllUsers} from "../../services/jph.api.services";


type IUsersPropsType = {lift?:(userId:number) => void}
const UsersComponent:FC<IUsersPropsType> = ({lift}) => {
    const[users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data))
    },[])


    return (
        <div>
            {users.map((user) => (<UserComponent user={user} lift={lift}/>))}
        </div>
    );
};

export default UsersComponent;