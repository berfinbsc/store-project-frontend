import React, { useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../store/Store';
import { logOutReduc, loginReduc } from '../store/user/UserSlice';
import { Link } from 'react-router-dom';
import { LogOut } from '../api/Http';

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
      dispatch(logOutReduc()); 
      
    }},[dispatch])



    
const handleLogOut = async() => {
 try {
  await LogOut()
   await dispatch(logOutReduc());
   await dispatch(userLiked([]));
    console.log("LogOut işlemi başarılı")
  
 } catch (error) {
  console.log("LogOut işleminde hata from handleLogOut : :" + error);
 }  
}




  return (
    <div>
      
      {isAuthenticated ?
     <div>
          <i className="user icon">
            {user.userName}
          </i>
          <button className="ui primary button" onClick={handleLogOut}>
            Log Out
          </button>
     </div>
      :
      <div>
          <i className="user icon">
            Hello there!
          </i>

          <Link to="/login">
            <button className="ui primary button">
            Login
            </button>
            </Link>

            <Link to="/register">
               <button className="ui button">
              Register
              </button>
            </Link>

        
      </div>



      }
 







    </div>
  )
}

export default Log
