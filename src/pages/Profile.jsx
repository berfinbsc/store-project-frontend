import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';

export const Profile = () => {


const {user,logOut}=useContext(AuthContext);




  return (
    <div>
        Hello 
        <button onClick={logOut}>Logout</button>

    </div>
  )
}
