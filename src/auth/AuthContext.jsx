import React, { useState } from 'react'
import { createContext } from'react'
import { login, getUser } from '../api/Http'

  export const AuthContext = createContext();

 export const AuthProvider = ({children}) => {

const [user,setUser] = useState(null);

const getLogin = async(email,password) => {
try {
const token = await login(email,password);
await localStorage.removeItem('token')
await localStorage.setItem('token',token)
const userGet = await getUser()
setUser(userGet);
} 
catch (error) {
  console.log("Login işleminde hata 2 : :" + error);
}}

const logOut = () => {  
    localStorage.removeItem('token')
    setUser(null)

}
  return (
   <AuthContext.Provider value={{user,logOut,getLogin}}>
    {children}
    </AuthContext.Provider>
  )
}
