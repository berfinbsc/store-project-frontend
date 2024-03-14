import { endpoints, instance } from "./Api"






export const getUser=async()=>{
  const token = await localStorage.getItem('token')
  console.log("get token from session storage"+token);
    if(!token){
        return console.log("token yok : : ");
    }
    try { 
        const data = await instance.get(endpoints.user, {
            headers: {
                Authorization:`Bearer ${token}`
            }
        })
        const user = data.data;
        console.log(user);
        await localStorage.setItem('user', JSON.stringify(user));
      

    } catch (error) {
        console.log("getUser işleminde hata : :" + error);                                   
}
}







export const login=async(email,password)=>{

  try {
  instance.post(endpoints.login,{email,password}).then(resp=>{
    if(!resp.data.token){
      throw new Error("Giriş yapılamadı : "+ resp.data.message )
    }
    console.log("Login : "+resp.data.token);
    localStorage.setItem('token',resp.data.token);
  })

     
  } catch (error) {
    console.log("Login işleminde hata : :" + error);

  }}









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



