import { endpoints, instance } from "../Api"


  
  
  export const getCart = async()=>{
  try {
    const token = await localStorage.getItem('token')
    console.log("get token from session storage"+token)
      const res = await instance.get(endpoints.getcart,{
        headers:{Authorization:`Bearer ${token}`
        }});
      console.log(" get cart from api : : : : : " + res)
      return res;
    }
   catch (error) {
    console.log(error)
  }}


 export const increaseQuantity = async(productId)=>{

    try {
        console.log("productId :  " + productId)
        const token = localStorage.getItem('token');
        console.log("get token from session storage"+token)
        const res = await instance.post(endpoints.increaseQuantity,{productId},
        { headers:{Authorization:`Bearer ${token}`} } 
        );
    
    return res;
    
    } catch (error) {
        console.log(error);
    
    }}



 export const reduceQuantity = async(productId)=>{

    try {
        const token = localStorage.getItem('token');
        console.log("get token from session storage"+token)
        const res = await instance.post(endpoints.reduceQuantity,{productId},{
            headers:{Authorization:`Bearer ${token}`
    }});
    console.log(res);
    return res;
    
    } catch (error) {
        console.log(error);
    
    }}




 export const deleteFromCart = async(productId)=>{

    try {
        const token = localStorage.getItem('token');
        console.log("get token from session storage "+token)
        const res = await instance.post(endpoints.deleteFromCart,{productId},{
            headers:{Authorization:`Bearer ${token}`}});
    
    return res;
    
    } catch (error) {
        console.log(error);
    
    }}





 export const addToCart = async(productId)=>{

    try {
        const token = await localStorage.getItem('token');
        console.log("get token from session storage"+token)
        const res = await instance.post(endpoints.addToCart,{productId : productId},{
            headers:{Authorization:`Bearer ${token}`
    }});
    console.log(res);
    return res;
    
    } catch (error) {

        console.log(error);
    
    }}