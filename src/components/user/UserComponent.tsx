import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {getAllPostsOfSingleUser} from "../../services/jph.api.services";
import {IPostModel} from "../../models/IPostModel";

interface IProps{
    user: IUserModel
}

type IPropsType = IProps & {children?:React.ReactNode} & {lift?:(userId:number) => void}
const UserComponent:FC<IPropsType> = ({user, lift}) => {

    const onClickHandler = () => {
        if(lift){
            lift(user.id)
        }
    }
    return (
        <div>
            {user.id} {user.firstName} {user.lastName} {user.gender} {user.age} {user.email}

            <div>
                <button onClick={onClickHandler}>click</button>
            </div>

            <hr/>
        </div>
    );
};

export default UserComponent;