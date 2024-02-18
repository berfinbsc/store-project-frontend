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
    addtocart : "/addtocart",

}


/*
http.interceptors.request.use((config)=>{
    const token=getToken();
    config.headers.authorization=`Bearer ${token}`
    return config;

})


*/