import { useDispatch } from "react-redux";
import { endpoints, instance } from "./Api"
import { addLiked, logOutReduc, loginReduc } from "../store/user/UserSlice";





export const getUser=async()=>{

  const token = await localStorage.getItem('token')
  console.log("get token from session storage : : "+token);
    if(!token){
        return console.log("token yok : : ");
    }
    try { 
                const resp = await instance.get(endpoints.user, {
                headers: {
                Authorization:`Bearer ${token}`
                }
            });
            console.log(resp);
            console.log(resp.data);
            const user= await resp.data;
            console.log("user from getUser "+ user);
            await localStorage.setItem('user',JSON.stringify(user))
            const liked = await user.liked;
            await localStorage.setItem('liked',JSON.stringify(liked))
            console.log("liked from getUser "+ liked);
            return user;
          

    } catch (error) {
        console.log("getUser işleminde hata : :" + error);                                   
}



}









  export const login = async (email, password) => {
    try {
      const resp = await instance.post(endpoints.login, { email, password });
      console.log(resp);
      const token = resp.data.token;
      localStorage.setItem('token', token);
      console.log("Login : " + token);
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

}}



export const LogOut = async () => {

  try {

    await localStorage.removeItem('token');
    console.log("token removed");

    await localStorage.removeItem('user');
    console.log("user removed");

    await localStorage.removeItem('liked');
    console.log("liked removed");

  } catch (error) {
    console.error("LogOut işleminde hata:", error);
  }
};



