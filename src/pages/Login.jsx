import React, {  useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Input } from 'semantic-ui-react';
import { getUser, login } from '../api/Http'
import { useDispatch } from 'react-redux';
import { loginReduc } from '../store/user/UserSlice';

const Login = ()=> {
const dispatch = useDispatch();
const [email,setEmail]=useState();
const [password,setPassword]=useState();

 


 

const handlerSubmit = async (e) => {
  e.preventDefault();
  if (!email || !password) return;

  try {
    await login(email, password);
    const user = await getUser();
    console.log( user);
    dispatch(loginReduc(user));
  } catch (err) {
    console.log(err);
  }
};






  return (
  

<>





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

