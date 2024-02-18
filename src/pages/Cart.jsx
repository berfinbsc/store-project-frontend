import React, { useEffect, useState } from 'react'
import { getCart } from '../api/Http'
import CartItemPay from '../components/CartItemPay'

export default function Cart() {

const [products,setProducts] = useState([])


useEffect(()=>{

  getCart()
  .then((data)=>{
    const productsGet = data.data.cart.products
    setProducts(productsGet); 
    console.log(productsGet)
  })
  .catch(error=>console.log(error))

},[])
    
  return (



    <div>


      
      <div className="ui column divided grid">


        {
          products.map((product) =>{

            <div className="column" key={product.productId}>
             <CartItemPay product = {product}/>
            </div>

          })
        }


      



          <button className="ui orange basic button">Tamamla</button>
      </div>
      
      
      
      
      
      

















      
    </div>
  )
}
