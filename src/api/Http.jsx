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


            if(user){
                console.log("user from getUser "+ user);
                 localStorage.setItem('user',JSON.stringify(user))
                 const getUser = localStorage.getItem('user');
                 const getUser2 = JSON.parse(getUser);

                    if(getUser2){
                      console.log("get user localstorage    : :" + getUser2)
                      return getUser2;

                    }
                    else{
                      console.log("get user localstorage hatası : : ")
                    }
            }
            else{
              return null;
            }

    } catch (error) {
        console.log("getUser işleminde hata : :" + error);                                   
}
}









  export const login = async (email, password) => {
    try {
      const resp = await instance.post(endpoints.login, { email, password });
      if (!resp.data.token) {
        throw new Error("Giriş yapılamadı : " + resp.data.message);
      }
      console.log("Login : " + resp.data.token);
      localStorage.setItem('token', resp.data.token);
    } catch (error) {
      console.log("Login işleminde hata : :" + error);
    }
  };





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



