import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Log from './Log'
import likeApi from '../api/likeApi/LikeApi';
import { useDispatch, useSelector } from 'react-redux';
import { addLiked, loginReduc, removeLiked } from '../store/user/UserSlice';
import { store } from '../store/Store';
import { useNavigate } from 'react-router-dom';

function ProductComponent(props) {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {user,isAuthenticated,userLiked} =useSelector(store=>store.user);
const [likeIcon,setLikeIcon] = useState(props.like)



  const addLike = async(productId) => {
if(isAuthenticated){




  if(likeIcon === 'orange'){
    setLikeIcon('gray');
   const likeArray = await likeApi(productId);
    console.log("likeArray :: " + likeArray);
    await localStorage.setItem("liked", JSON.stringify(likeArray));
    await dispatch(addLiked(likeArray));
    console.log("userLiked :: " + userLiked);
    console.log("locstor liked :: " + localStorage.getItem("liked"));
  }
  



  else if(likeIcon === 'gray'){

    setLikeIcon('orange');
    const likeArray = await likeApi(productId);
    console.log("likeArray :: " + likeArray);
    await localStorage.setItem("liked", JSON.stringify(likeArray));
    await dispatch(addLiked(likeArray));
    console.log("userLiked :: " + userLiked);
    console.log("locstor liked :: " + localStorage.getItem("liked"));

  }
}
else{
  console.log("user is not authenticated please login");
  navigate('/login')
}
}




  return (
    <div>


<div className="ui card">

          <div className="image content">
            <Link to={`/product/${props.product._id}`}>
            <img src={props.product.image} alt="img" height={250} />
            </Link>
          </div>
      



      <div className="content" >
      <div style={{marginTop: '-12px'}}>
        <Link to={`/product/${props.product._id}`}>
        <span>{props.product.name}</span>
        </Link>
      </div>

      <div style={{marginTop: '-5px'}}>

          <span className="right floated " onClick={()=>{addLike(props.product._id)}}>
            <i className={`like  icon ${likeIcon}`}></i>
            {props.product.likesCount}
          </span>


          <span className="left floated">
          <i className="comment icon "></i>
          {props.product.rating}
          </span>
          
      </div>

      
      <div style={{marginTop: '30px'}}>
        <span>{props.product.price}</span>
      </div>
      </div>


      </div>











    </div>

  )
}

export default ProductComponent
