import React from 'react'
import { Link } from 'react-router-dom'




const Navbar = () => {
  return (


<div className="ui secondary menu" style={{ width: '75vw', margin: 'auto' ,position:'relative', top: '-350px',zIndex: 1000}}>
  <a className="header item"><Link to='home'>Home</Link> </a>
  <a className="item"><Link to='about'>About</Link></a>
  <a className="item"><Link to='product'>Products</Link> </a>
  <div className="right menu">
    <a className=" ui primary button ">Sign Up</a>
  </div>



</div>




   

  )
}

export default Navbar
