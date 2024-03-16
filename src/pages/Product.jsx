import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../api/Http';
import ProductComponent from '../components/ProductComponent';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { store } from '../store/Store';
const Product = ()=> {

  const [products,setProducts] = useState([]);
const {user,isAuthenticated} =useSelector(store=>store.user);


useEffect(()=>{
getAllProducts()
.then((data)=>{
  setProducts(data.data.products);
   console.log(data)})
.catch((error)=>{console.log(error)})

},[])




const isLike = (id)=>{

  if(user && user.liked && user.liked.includes(id)){
    console.log(true)
    return 'orange';
  }
  console.log(false)

  return 'gray';
}










  return (
<div className="">

{user.userName }
{user.liked}

<div className="ui button right floated" >

  <Link to="/cart">
  <i className="shop icon"></i>
  </Link>
</div>


<div className="ui four column relaxed grid">
    {products.map((product) => (

     <div className="ui column" key={product._id}>  
        <ProductComponent product={product} liked={isLike(product._id)} />
      </div>
    ))}


    
  </div>


</div>

  

  )
}

export default Product;
