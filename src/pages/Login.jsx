import React, {  useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Input } from 'semantic-ui-react';
import { login } from '../api/Http'


const Login = ()=> {

const [email,setEmail]=useState();
const [password,setPassword]=useState();






const handlerSubmit =async(e)=>{
  e.preventDefault();
  if(!email || !password) return;

  login(email,password)

}





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

