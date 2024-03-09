import React, { useState } from 'react'
import { createContext } from'react'
import Login, { getUser } from '../api/Http';
import { endpoints, instance } from '../api/Api';

const AuthContext = createContext();



export default function AuthContext() {

const [user,setUser] = useState(null);





const login = async(email,password) => {

try {
  
const token = await Login(email,password);
await localStorage.removeItem('token')
await localStorage.setItem('token',token)

const getUser = await getUser()
setUser(getUser);

} catch (error) {
 
  console.log("Login işleminde hata 2 : :" + error);
}}




const logOut = () => {  
    localStorage.removeItem('token')
    setUser(null)

}




  return (
   <AuthContext.Provider value={{user,logOut,login}}>
    {children}
    </AuthContext.Provider>
  )
}
