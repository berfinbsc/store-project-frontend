//rafc
import React from 'react'
import { endpoints, instance } from "./Api"



const likeApi = async(productId) => {
 
    try {
        
        const token =localStorage.getItem('token')
        console.log("get token from session storage"+token)
        const res = await instance.post(endpoints.like,{productId},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        console.log(res.data);
        return res.data;

        }
        catch (error) {
                console.log("like error : : " + error);
            }


}
export default likeApi
