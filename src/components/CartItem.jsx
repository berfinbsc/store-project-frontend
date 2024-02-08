import React from 'react'

function CartItem() {

  return (
    <div>
      
        <div className=" ui card">
          <div className="content">
            <img src="../images/elliot.jpg" alt="img" className="left floated ui image" weight={80} height={90}/>
            <div className="">Product name</div>
            <div className="meta">quantity : 2 </div>
          </div>
        
        </div>
        
      </div>

  )
}

export default CartItem
