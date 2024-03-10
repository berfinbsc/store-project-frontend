import React, { createContext, useContext, useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Input } from 'semantic-ui-react';
import { getUser, login } from '../api/Http';
import LogSing from '../components/LogSing';
import UserProfile from './UserProfile';


export const AuthContext = React.createContext();

const Login = ({UserProfile})=> {

const [email,setEmail]=useState();
const [password,setPassword]=useState();
const [user,setUser] = useState(null);
const [isLogin,setLogin] = useState(false);





const handlerSubmit =async(e)=>{
  e.preventDefault();
  if(!email || !password) return;

  login(email,password).then(()=>{
    setLogin(true);
  }).then(()=>{
    getUser().then(user=>{
      //console.log(user.userName)
      setUser(user.userName);
    })
  });
 

    


}



const handleLogout = () => {
  localStorage.removeItem('token');
  setUser(null);
  setLogin(false);
};


  return (
  

<>
<AuthContext.Provider value={{user}}>
    <UserProfile/>
    </AuthContext.Provider>




<Form className="ui form" onSubmit={handlerSubmit}>

  <div className="field">
    <Input type="text" name="first-name" placeholder="enter your e-mail" value={email} onChange={
      (e)=>{setEmail(e.target.value)}}
      
      />
  </div>
  <div className="field">
    <Input type="text" name="last-name" placeholder="password" value={password} onChange={
      (e)=>{setPassword(e.target.value)}}
      />
  </div>

<div className="field">
<Button className="ui green basic button" type="submit">Submit</Button>
</div>
</Form>



</>



  )
}

export default Login;

