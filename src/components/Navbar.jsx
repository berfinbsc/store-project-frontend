import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom';




const Navbar = () => {
  return (

        <nav className='Navbar'>
          <Link to='/'>Home</Link> 
          <Link to='/about'>About</Link>
            <Link to='/product'>Products</Link>
            <Outlet />
        </nav>

    







   

  )
}

export default Navbar
