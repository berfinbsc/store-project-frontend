import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../api/Http';
import ProductComponent from '../components/ProductComponent';
import { Link } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { store } from '../store/Store';
import { logOutReduc, loginReduc } from '../store/user/UserSlice';
import Log from '../components/Log';



const Product = ()=> {

    const dispatch = useDispatch();
    const [products,setProducts] = useState([]);

      useEffect(()=>{

          getAllProducts()
          .then((data)=>{
            setProducts(data.data.products);
            console.log(data)})
          .catch((error)=>{console.log(error)})
        
      },[])




 
useEffect(()=>{

 async ()=>{

  const userDataString =  await localStorage.getItem('user')
  if(userDataString){
    const userData = await JSON.parse(userDataString);
    dispatch(loginReduc(userData))
    console.log(userData);
  }
  else{
    console.log("not logined");
    dispatch(logOutReduc());
  }

 }

 },[])

  const {user,isAuthenticated} =useSelector(store=>store.user);
  const userLiked = user.liked;






const isLike = (id)=>{

  if(user && userLiked && userLiked.includes(id)){
    return 'orange';
  }

  return 'gray';
}










  return (
<div className="">
<Log></Log>


<div className="ui button right floated" >

  <Link to="/cart">
  <i className="shop icon"></i>
  </Link>
</div>


<div className="ui four column relaxed grid">
    {products.map((product) => (

     <div className="ui column" key={product._id}>  
        <ProductComponent product={product} userLikes={isLike(product._id)} />
      </div>
    ))}


    
  </div>


</div>

  

  )
}

export default Product;
