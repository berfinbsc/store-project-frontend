import React, { useEffect, useState } from 'react'
import { getAbout } from '../api/Http';

const  About =  ()=> {
 // const res = await getAbout();
  //console.log(res)
const [msg,setMsg]=useState();
useEffect(async()=>{

  try {
    const resp = await getAbout()
    setMsg(resp)
  } catch (error) {
    console.log("GET ABOUT ERROR")
    
  }

},[])

  return (
    <div>
      <p>berfin basci {msg}</p>
    </div>
  )
}
export default About;
