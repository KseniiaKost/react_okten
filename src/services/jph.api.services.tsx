import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {"Content-Type": "application/json; charset=UTF-8"}
})

const getAllUsers = ():Promise<AxiosResponse<IUserModel[]>> => {
    return axiosInstance.get('/users')
}

const getAllPostsOfSingleUser = (id:number):Promise<AxiosResponse<IPostModel[]>> => {
    return axiosInstance.get('/users/'+ id + '/posts')
}

export {
    getAllUsers,
    getAllPostsOfSingleUser
}