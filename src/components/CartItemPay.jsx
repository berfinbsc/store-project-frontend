import React from 'react'
function CartItemPay(props) {


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
    <div className="ui basic  button ">-</div>
    <span className="number">{props.product.quantity}</span>
    <div className="ui basic button  ">+</div>
    </div>
</div>


<div className="two wide column" style={{marginTop: '65px'}}>
<span className="number">{props.product.price}</span>
</div>


<div className="two wide column" style={{marginTop: '57px'}}>
  <div className="ui  basic  button ">
    <i className=" trash icon"></i>
  </div>
</div>

</div>

          </div>
        
  )
}

export default CartItemPay
