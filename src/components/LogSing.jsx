import React, { useContext } from 'react'
import { AuthContext } from '../pages/Login';

export default function LogSing() {

    const {isLogin}=useContext(AuthContext);


  return (
    <div>
      {isLogin? "logOut": "logIn"}
    </div>
  )
}
