import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../api/Http';
import ProductComponent from '../components/ProductComponent';
import { Link } from 'react-router-dom';
import Icon from '@mui/material/Icon';
import { IconButton } from '@mui/material';
const Product = ()=> {

  const [products,setProducts] = useState([]);


useEffect(()=>{

getAllProducts()
.then((data)=>{setProducts(data.data.products); console.log(data.data.products)})
.catch((error)=>{console.log(error)})

},[])




  return (
<div className="">

<div class="ui button right floated" >
    <i class="shop icon"></i>
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
