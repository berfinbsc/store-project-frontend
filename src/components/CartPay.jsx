import React from 'react'
import CartItemPay from './CartItemPay'
import Cart from './Cart'

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
<button class="ui orange basic button">Tamamla</button>


<Cart/>




    </div>
  )
}

export default CartPay
