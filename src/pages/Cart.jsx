import React, { useEffect, useState } from 'react'
import { deleteFromCart, getCart } from '../api/CartApi.jsx/CartApi'
import CartItemPay from '../components/CartItemPay'

export default function Cart() {

const [products,setProducts] = useState([]);
const [cartTotal,setSubtotal] = useState(0);


useEffect(()=>{

  getCart()
  .then((data)=>{
    setProducts(data.data.cart.products); 
    setSubtotal(data.data.cart.subTotal);
  })
  .catch(error=>console.log(error))

},[])


const onRemove = (productId) => {

    deleteFromCart(productId)
   .then(() => {
    setProducts(prevProducts => prevProducts.filter(product => product.productId!== productId));
    subTotal();
  })
   .catch(error=>console.log(error))

}

const subTotal = ()=>{
  getCart()
  .then((data)=>{
    setSubtotal(data.data.cart.subTotal);
  })
  .catch(error=>console.log(error))
}

    
  return (
    <div>


      
      <div className="">


        {
          products.map((product) =>(

            <div className="column" key={product.productId}>
             <CartItemPay productProp = {product} onRemove = {()=>onRemove(product.productId)} subTotal = {() => subTotal()}/>
            </div>

          ))
        }

        <div>{cartTotal}</div>
          <button className="ui orange basic button">Tamamla</button>
      </div>
      
      
      
      
      
      

















      
    </div>
  )
}
