import React from 'react'
import CartItem from './CartItem'

function Cart() {

  return (
    <div>
    <div className="ui card">

        <CartItem/>
        <CartItem/>
        <CartItem/>

        <div className="extra content">
     
           <div className="ui two">
           <button class="ui orange basic button">Sepet</button>
            <button class="ui green basic button">Tamamla</button>
           </div>

        </div>
    </div>

    </div>
  )
}

export default Cart
