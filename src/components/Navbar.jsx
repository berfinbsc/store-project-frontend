import React from 'react'
import { Link, Outlet } from 'react-router-dom'



//rafc
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='home'>Home</Link> 
      <Link to='about'>About</Link>
      <Link to='product'>Products</Link> 
      <Outlet></Outlet>

    </nav>

  )
}

export default Navbar
