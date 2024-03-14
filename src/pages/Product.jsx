import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../api/Http';
import ProductComponent from '../components/ProductComponent';
import { Link } from 'react-router-dom';
import Log from '../components/Log';
const Product = ()=> {

  const [products,setProducts] = useState([]);


useEffect(()=>{

getAllProducts()
.then((data)=>{setProducts(data.data.products); console.log(data)})
.catch((error)=>{console.log(error)})

},[])




  return (
<div className="">



<div className="ui button right floated" >

  <Link to="/cart">
  <i className="shop icon"></i>
  </Link>
</div>


<div className="ui four column relaxed grid">
    {products.map((product) => (
      <div className="ui column" key={product._id}>
        <ProductComponent product={product} />
      </div>
    ))}
  </div>



</div>

  

  )
}

export default Product;
