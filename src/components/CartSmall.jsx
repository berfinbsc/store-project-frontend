import React from 'react'
import CartItem from './CartItem'

function CartSmall() {

  return (
    <div>
    <div className="ui card">

        <CartItem/>
        <CartItem/>
        <CartItem/>

        <div className="extra content">
     
           <div className="ui two">
           <button className="ui orange basic button">Sepet</button>
            <button className="ui green basic button">Tamamla</button>
           </div>

        </div>
    </div>

    </div>
  )
}

export default CartSmall
