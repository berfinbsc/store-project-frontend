import React from 'react'
import CartItemPay from './CartItemPay'
import Cart from './CartSmall'

function CartPay() {







  return (
    <div>
      
<div className="ui column divided grid">
    <div className="column">
        <div className="">
        <CartItemPay/>

        </div>
        <div className="">
        <CartItemPay/>
        </div>
    </div>
    
</div>
<button className="ui orange basic button">Tamamla</button>


<Cart/>




    </div>
  )
}

export default CartPay
