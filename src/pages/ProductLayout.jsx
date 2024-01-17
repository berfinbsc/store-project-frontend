import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductLayout = () => {
  return (
    <div>
      <h2>products here</h2>
      <Outlet/>
    </div>
  )
}

export default ProductLayout
