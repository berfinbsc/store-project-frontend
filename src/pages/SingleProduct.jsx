import React from 'react'
import products from '../data';
import { Link, useParams } from 'react-router-dom';



const SingleProduct = ()=> {
  const {productId} =useParams();
const product =products.find((product)=>product.id===productId);

const {image,name}=product;
  return (
<section>

<h3>{name}</h3>
    <img src={image} alt={name} />

<Link to='/product'>back to products</Link>
</section>

 

  )
}

export default SingleProduct;
