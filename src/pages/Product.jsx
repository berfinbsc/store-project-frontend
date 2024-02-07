import React from 'react'
import products from '../data'
const Product = ()=> {
  return (

    <div className="ui four column relaxed grid">
    {products.map((product) => (
      <div className="column" key={product.id}>
        {product.name}
      </div>
    ))}
  </div>

  )
}

export default Product;
