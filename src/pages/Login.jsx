import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Input, Label } from 'semantic-ui-react';
import { login } from '../api/Http';
const Login = ()=> {

const [email,setEmail]=useState();
const [password,setPassword]=useState();

const handlerSubmit =(e)=>{
  e.preventDefault();
  if(!email || !password) return;
login(email,password)

}

  return (
  


<Form class="ui form" onSubmit={handlerSubmit}>
  <div class="field">
    <Label>e-mail</Label>
    <Input type="text" name="first-name" placeholder="enter your e-mail" value={email} onChange={
      (e)=>{setEmail(e.target.value)}}
      
      />
  </div>
  <div class="field">
    <Label>password</Label>
    <Input type="text" name="last-name" placeholder="password" value={password} onChange={
      (e)=>{setPassword(e.target.value)}}
      
      />

  </div>

  <Button class="ui button" type="submit">Submit</Button>
</Form>




  )
}

export default Login;

