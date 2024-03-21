import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../api/Http';
import ProductComponent from '../components/ProductComponent';
import { Link } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { addLiked, logOutReduc, loginReduc } from '../store/user/UserSlice';
import Log from '../components/Log';
import { store } from '../store/Store';



const Product = ()=> {
 
    const dispatch = useDispatch();
    const [products,setProducts] = useState([]);
    const {user,isAuthenticated,userLiked} = useSelector(store=>store.user);
    console.log(userLiked);
    console.log(user);
    console.log(isAuthenticated);


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
       const  userLocal = await JSON.parse(userData);
        const likesData = await localStorage.getItem('liked')
       const  likesLocal= await JSON.parse(likesData)

        console.log(userLocal);
        console.log(likesLocal);

        if(userLocal){
         await dispatch(loginReduc(userLocal))
         await dispatch(addLiked(likesLocal))
        }
        else{
          console.log("not logined");
        }}

 checkUserSession();

 },[])






const isLike = (id)=>{

  if(user && userLiked.includes(id)){
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
