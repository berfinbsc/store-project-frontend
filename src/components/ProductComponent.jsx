import React from 'react'
import { Link } from 'react-router-dom'
import Log from './Log'
import likeApi from '../api/likeApi/LikeApi';
import { useDispatch, useSelector } from 'react-redux';
import { loginReduc } from '../store/user/UserSlice';
import { store } from '../store/Store';

function ProductComponent(props) {


  const color = props.userLikes || ""
  const dispatch = useDispatch();
  const {user,isAuthenticated} =useSelector(store=>store.user);

  const addLike = async(productId) => {
    const likes = await likeApi(productId);
    user.liked=likes
    dispatch(loginReduc(user))
    await localStorage.setItem('user', JSON.stringify(user));


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
            <i className={`like  icon ${color}`}></i>
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
