import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../api/Http';
import ProductComponent from '../components/ProductComponent';
import { Link } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { addLiked, logOutReduc, loginReduc } from '../store/user/UserSlice';
import Log from '../components/Log';
import { store } from '../store/Store';
import Filter from '../components/Filter';



const Product = ()=> {
 
    const dispatch = useDispatch();
    const [products,setProducts] = useState([]);
    const {user,isAuthenticated,userLiked} = useSelector(store=>store.user);
   

    useEffect(()=>{
      const checkUserSession =async()=>{    
    try {
      
          const userData =  await localStorage.getItem('user')
          const  userLocal =  JSON.parse(userData);
          const likesData = await localStorage.getItem('liked')
          const  likesLocal=  JSON.parse(likesData)

          console.log(userLocal);
          console.log(likesLocal);

          if(userLocal){
            await dispatch(loginReduc(userLocal))
            await dispatch(addLiked(likesLocal))
            console.log(user)
            console.log(userLiked)
          
          } else{
            console.log("not logined");
          }

      } catch (error) {
                console.log("user data fetching error : : " + error);
      } }
            checkUserSession();
            },[dispatch])





      useEffect(()=>{
          getAllProducts()
          .then((data)=>{
            setProducts(data.data.products);
            console.log(data)
            console.log("LOGOUT TETıKLEMESı BASARıSıZ RENDER GEREKLı")
          })
          .catch((error)=>{
            console.log(error)
          })  
      },[logOutReduc])




 







const isLike = (id)=>{
if(isAuthenticated && userLiked){
 return userLiked.includes(id) ? 'orange' : 'gray';
  

}
return 'gray';

}






  return (
    <div className="">

      <Log></Log>
      <Filter/>
      
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
