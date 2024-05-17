import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers:{}
})

const userApiService = {
   getAllUsers:(): Promise<AxiosResponse<IUserModel[]>> =>{
       return axiosInstance.get("/users")
   },

   getUserById: (userId:number): Promise<AxiosResponse<IUserModel>> => {
       return axiosInstance.get(`/users/${userId}` )
   }
}

const  postApiService = {
    getAllPosts: ():Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get("/posts")
    }
}

const commentsApiService = {
    getAllComments: ():Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get("/posts")
    }
}





export {
    userApiService,
    postApiService,
    commentsApiService
}