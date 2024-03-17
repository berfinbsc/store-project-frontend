import React, { useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../store/Store';
import { logOutReduc, loginReduc } from '../store/user/UserSlice';
import { Link } from 'react-router-dom';

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



    
const handleLogOut =() => {
  localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log(localStorage.getItem('user'));  
    dispatch(logOutReduc());
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
