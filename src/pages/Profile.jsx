import React, { useContext } from 'react'
import { AuthContext } from '../App';

export const Profile = () => {


const {user,logOut}=useContext(AuthContext);




  return (
    <div>
        <button onClick={logOut}>Logout</button>

    </div>
  )
}
