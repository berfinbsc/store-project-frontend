import { endpoints, instance } from "./Api"


export const login=(email,password)=>{
    instance.post(endpoints.login,{email:email,password:password})
  
}

export const getRegister=(user)=>{
    instance.post(endpoints.register,user)
}

export const getAllProducts=()=>{
    instance.get(endpoints.products);
}

export const getOneProduct=(id)=>{
    instance.get(endpoints.products+"/"+id);
}