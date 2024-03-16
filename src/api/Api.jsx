import axios from "axios";

  
const url ="http://localhost:3000/api/v1";

export const instance=axios.create({
    baseURL :url,
})    

export const endpoints={
    register:"/register",
    login:"/login",
    products:"/products",
    about:"/about",
    product :"/product",
    addToCart : "/addToCart",
    getcart : "/getCart",
    reduceQuantity : "/reduceQuantity",
    increaseQuantity : "/increaseQuantity",
    deleteFromCart : "/deleteFromCart",
    user : "/user",
    like : "/like",
}


/*
http.interceptors.request.use((config)=>{
    const token=getToken();
    config.headers.authorization=`Bearer ${token}`
    return config;

})


*/