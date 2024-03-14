import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Log from './Log';




const Navbar = () => {
  return (

        <nav className='Navbar'>
                      <Log></Log>

          <Link to='/'>Home</Link> 
          <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>

            <Outlet />
        </nav>

    







   

  )
}

export default Navbar
