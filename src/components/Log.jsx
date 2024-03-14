import React, { useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../store/Store';
import { loginReduc } from '../store/user/UserSlice';

const Log = () => {
const dispatch = useDispatch();
    //initialState => user,isLogned
const {user,isAuthenticated} =useSelector(store=>store.user);

 
useEffect(()=>{

    const userDataString = localStorage.getItem('user')
    if(userDataString){
      const userData = JSON.parse(userDataString);
      dispatch(loginReduc(userData))
      console.log(userData);
    }
    else{
      console.log("User bulunamadı");
    }},[])




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
