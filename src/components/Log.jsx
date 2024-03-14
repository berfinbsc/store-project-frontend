import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../store/Store';

const Log = () => {

    //initialState => user,isLogned
const {user,isAuthenticated} =useSelector(store=>store.user);

 
  return (
    <div>
      
{console.log(user)}
    {user.userName ? user.userName : 'Hello' }
    <div></div>
    {isAuthenticated ? 'logined' : 'not logined '}


    </div>
  )
}

export default Log
