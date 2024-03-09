import React, { useState } from 'react'
import { deleteFromCart, increaseQuantity, reduceQuantity } from '../api/CartApi.jsx/CartApi'


function CartItemPay(props) {

const productProp = props.productProp;
const subTotal = props.subTotal;
const onRemove = props.onRemove;
const [product, setProduct] = useState(productProp);
console.log(props.product);


const reduce = ()=>{
    reduceQuantity(product.productId)
   .then((data)=>{ 
    setProduct(prevProduct =>({...prevProduct ,quantity : data.data.quantity , total : data.data.total
    }))
  })
  .then(subTotal)

  }





const increase = ()=>{
  try {
  
    increaseQuantity(product.productId)
    .then((data)=>{ 
      setProduct(prevProduct =>({...prevProduct ,quantity : data.data.quantity , total : data.data.total
      }))})
      .then(subTotal)
      

  } catch (error) {
    console.log("erişim başarısız:", error);
}}




  
  return (
    <div>
      
<div className="ui segment equal width grid">
  
<div className="four wide column">

  <div>
  <img src={product.image} alt="img" className="left floated  ui image" width={160} height={200}/>
  </div>
</div>



<div className="five wide column" style={{marginTop: '65px'}}>
<div className="header">{product.productName}</div>
</div>


<div className="three wide column" style={{marginTop: '50px'}}>
<div className="ui segment container">
    <div className="ui basic  button " onClick={reduce}>-</div>
    <span className="number">{product.quantity}</span>
    <div className="ui basic button  " onClick={increase}>+</div>
    </div>
</div>


<div className="one wide column" style={{marginTop: '65px'}}>
<span className="number">{product.price}</span>
</div>


<div className="one wide column" style={{marginTop: '57px'}} onClick={onRemove}>
  <div className="ui  basic  button " >
    <i className=" trash icon" ></i>
  </div>
</div>


<div className="two wide column" style={{marginTop: '65px'}}>
<span className="number">{product.total}</span>
</div>

</div>

          </div>
        
  )
}

export default CartItemPay
