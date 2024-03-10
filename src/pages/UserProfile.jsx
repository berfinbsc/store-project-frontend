import React, { useContext } from 'react'
import { AuthContext } from './Login';

export default function UserProfile(){


const {user}=useContext(AuthContext);




  return (
    <div>
      {user.userName}
    </div>
  )
}
