import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../api/Http';
import ProductComponent from '../components/ProductComponent';
import { Link } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { store } from '../store/Store';
import { logOutReduc, loginReduc } from '../store/user/UserSlice';
import Log from '../components/Log';



const Product = ()=> {
  const {user,isAuthenticated,userLiked} = useSelector(store=>store.user);

    const dispatch = useDispatch();
    const [products,setProducts] = useState([]);

      useEffect(()=>{

          getAllProducts()
          .then((data)=>{
            setProducts(data.data.products);
            console.log(data)
          })
          .catch((error)=>{
            console.log(error)
          })
        
      },[])




 
useEffect(()=>{

 const checkUserSession =async()=>{

        const userData =  await localStorage.getItem('user')
        userData = await JSON.parse(userData);
        const likeArray = await localStorage.getItem('liked')
        likeArray= await JSON.parse(likeArray)

        console.log(userData);
        console.log(likeArray);

        if(userData && userLiked){
          dispatch(loginReduc(userData))
          dispatch(addLiked(likeArray))
        }
        else{
          console.log("not logined");
          dispatch(logOutReduc());
        }}

 checkUserSession();

 },[dispatch])






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
        <ProductComponent product={product} like={isLike(product._id)} />
      </div>
    ))}


    
  </div>


</div>

  

  )
}

export default Product;
