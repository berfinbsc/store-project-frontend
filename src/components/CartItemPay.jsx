import React from 'react'
import { Grid, Item } from 'semantic-ui-react'

function CartItemPay() {


  return (
    <div>
  

<div className="ui segment equal width grid">
  
<div className="four wide column">

  <div>
  <img src="../images/elliot.jpg" alt="img" className="left floated mini ui image" />
  </div>
</div>

<div className="five wide column">
<div className="header">Product name</div>
</div>


<div className="three wide column">
<div className="ui mini segment container">
    <div className="ui basic mini button ">-</div>
    <span className="number">0</span>
    <div className="ui basic mini button ">+</div>
    </div>
</div>


<div className="two wide column">
<span className="number">1600</span>
</div>


<div className="two wide column">
<div className="ui  basic  button ">
            <i className=" trash icon"></i>
        </div>
</div>

</div>






          </div>
        
  )
}

export default CartItemPay
