import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Input, Label,Form } from 'semantic-ui-react'
import { getRegister } from '../api/Http';

const Register = () => {

const [userName,setUserName]=useState();
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const [passwordVerification,setPasswordVerification]=useState();


const handlerSubmit=(e)=>{
e.preventDefault();
if(!userName || !email || !password || !passwordVerification) return;
if(password!=passwordVerification) return;  // === mi == mi ?
const user ={ userName:userName,email:email,password:password}
getRegister(user)
console.log("user information has been sent")
}  


  return (
    <div>
        <Form class="ui form" onSubmit={handlerSubmit}>
<div>
    <Label>user name</Label>
    <Input type='text' name='userName' placeholder='user name' valus={userName} onChange={(e)=>setUserName(e.target.value)}></Input>
</div>

<div>
    <Label>email</Label>
    <Input type='text' name='email' placeholder='your email' valus={email} onChange={(e)=>setEmail(e.target.value)}></Input>
</div>
<div>
    <Label>password</Label>
    <Input type='text' name='password' placeholder='password' valus={password} onChange={(e)=>setPassword(e.target.value)}></Input>
</div>
<div>
    <Label>password verification</Label>
    <Input type='text' name='passwordVerification' placeholder='password verification' valus={passwordVerification} onChange={(e)=>setPasswordVerification(e.target.value)}></Input>
</div>
<div>
    <Button type='submit'>Submit</Button>
</div>
        </Form>
      
    </div>
  )
}

export default Register
