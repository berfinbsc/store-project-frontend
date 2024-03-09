import React, { useContext, useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Input, Label } from 'semantic-ui-react';
import AuthContext, { login } from '../auth/AuthContext';
const Login = ()=> {

const [email,setEmail]=useState();
const [password,setPassword]=useState();
const {login}=useContext(AuthContext)


const handlerSubmit =(e)=>{
  e.preventDefault();
  if(!email || !password) return;
login(email,password)

}

  return (
  


<Form class="ui form" onSubmit={handlerSubmit}>
  <div class="field">
    <Input type="text" name="first-name" placeholder="enter your e-mail" value={email} onChange={
      (e)=>{setEmail(e.target.value)}}
      
      />
  </div>
  <div class="field">
    <Input type="text" name="last-name" placeholder="password" value={password} onChange={
      (e)=>{setPassword(e.target.value)}}
      />
  </div>

<div className="field">
<Button class="ui green basic button" type="submit">Submit</Button>
</div>
</Form>




  )
}

export default Login;

