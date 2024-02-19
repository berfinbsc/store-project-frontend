import React, { useState } from 'react'
import { deleteFromCart, increaseQuantity, reduceQuantity } from '../api/CartApi.jsx/CartApi'


function CartItemPay(props) {

console.log(props.product);

const reduce = ()=>{

  try {
    reduceQuantity(props.product.productId)
   .then((data)=>{console.log(data)})

  } catch (error) {
    console.log("erişim başarısız:", error);
  }

}

const increase = ()=>{
  try {
    const id = props.product.productId;
    console.log("id : "+id)
    increaseQuantity(id)
    .then((data)=>{console.log(data)})
  } catch (error) {
    console.log("erişim başarısız:", error);

  }
}

const remove = ()=>{
  try {
    console.log("cococococo")
    deleteFromCart(props.product.productId)
    .then((data)=>{console.log(data)})
  } catch (error) {
console.log("erişim başarısız:", error);
  }
}


  return (
    <div>
      
<div className="ui segment equal width grid">
  
<div className="four wide column">

  <div>
  <img src={props.product.image} alt="img" className="left floated  ui image" width={160} height={200}/>
  </div>
</div>



<div className="five wide column" style={{marginTop: '65px'}}>
<div className="header">{props.product.productName}</div>
</div>


<div className="three wide column" style={{marginTop: '50px'}}>
<div className="ui segment container">
    <div className="ui basic  button " onClick={reduce}>-</div>
    <span className="number">{props.product.quantity}</span>
    <div className="ui basic button  " onClick={increase}>+</div>
    </div>
</div>


<div className="two wide column" style={{marginTop: '65px'}}>
<span className="number">{props.product.price}</span>
</div>


<div className="two wide column" style={{marginTop: '57px'}} onClick={remove}>
  <div className="ui  basic  button " >
    <i className=" trash icon" ></i>
  </div>
</div>

</div>

          </div>
        
  )
}

export default CartItemPay
