import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../api/Http';
import ProductComponent from '../components/ProductComponent';
import { Link } from 'react-router-dom';

const Product = ()=> {

  const [products,setProducts] = useState([]);


useEffect(()=>{

getAllProducts()
.then((data)=>{setProducts(data.data.products); console.log(data.data.products)})
.catch((error)=>{console.log(error)})

},[])




  return (

    <div className="ui four column relaxed grid">
    {products.map((product) => (
      <div className="ui column" key={product._id}>
        <ProductComponent product={product} />
      </div>
    ))}
  </div>

  )
}

export default Product;
