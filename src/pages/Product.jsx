import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../api/Http';
import ProductComponent from '../components/ProductComponent';
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
      <div className="ui column" key={product.id}>
        <ProductComponent/>
        {product.name}
      </div>
    ))}
  </div>

  )
}

export default Product;
