import React from 'react'
import products from '../data'
import { Link } from 'react-router-dom'
const Product = ()=> {
  return (

<section>
{
 products.map((product)=>{
return(<article key={product.id}>
  <img src={product.image} alt="" width={800} height={600}/>
<h2>{product.name}</h2>
<Link to={`/product/${product.id}`}>see information</Link>
</article>)
 })
}
</section>



  )
}

export default Product;
