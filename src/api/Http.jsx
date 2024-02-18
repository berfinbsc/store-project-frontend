import { render } from "react-dom"
import { endpoints, instance } from "./Api"

export const login=async(email,password)=>{
  try {
    const resp = await instance.post(endpoints.login,{email,password})
    console.log("get token  : "+resp.data.token)

    await localStorage.removeItem('token')

    await localStorage.setItem('token',resp.data.token)


    
  } catch (error) {
    console.log("Giriş başarısız:", error);

  }

  
}

export const getRegister=async(userName,email,password)=>{
    await  instance.post(endpoints.register,{userName,email,password})
}

export const getAllProducts=async()=>{
  return  await  instance.get(endpoints.products);

}

export const getOneProduct=async(id)=>{
  console.log("get one product : "+id)
    return await instance.get(endpoints.product+"/"+id);
}


export const getAbout=async()=>{
try {
    const token = await localStorage.getItem('token')
   console.log("get token from session storage"+token)
    const res =  await instance.get(endpoints.about,{
        headers:{Authorization:`Bearer ${token}`
        }});

        console.log("mesaj : "+res.data.msg)
        return res.data.msg
} catch (error) {
    console.log("erişim başarısız:", error);

}




}



export const addToCart=async(productId,userId)=>{

  try {
    const token = await localStorage.getItem('token')
    console.log("get token from session storage"+token)
    const res =  await instance.post(endpoints.addtocart,{productId,userId,token})
    console.log("mesaj : "+res.data.msg)
  } catch (error) {
    console.log("erişim başarısız:", error);
  }
}
