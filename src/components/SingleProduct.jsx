import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getOneProduct } from '../api/Http';
import { addToCart } from '../api/CartApi.jsx/CartApi';

export default function SingleProduct() {

  const  {productId} = useParams();
  const id = productId;
const [product,setProduct] = useState({});
console.log("k : : " + productId)


const addCart = () => {
  console.log("p : : " + id)
  console.log("add Cart çalıştı")
  try {

    addToCart(productId)
    .then((data)=>{console.log(data); console.log("sepete eklendi")})
  } catch (error) {
    console.log("erişim başarısız:", error);
  }
}





useEffect(()=>{

try {
  getOneProduct(productId)
.then((data)=>{console.log(data.data.product); setProduct(data.data.product); })

} catch (error) {
  console.log("erişim başarısız:", error);
}


},[]);


  return (
<section>

 
<div className="ui  equal width grid">

<div className="seven wide column">
<img src={product.image} height={280} width={230}/>
</div>







<div className="ui seven wide column container center aligned" style={{marginTop: '60px'}}>


<div className='ui content '  >
<div className="header">{product.name}</div>
</div>



<div className='content' style={{marginTop: '1px'}}>
<span className="card right floated ">
        <i className="heart outline like small icon"></i>
        {product.likesCount}
      </span>
      <span className="card left floated">
      <i class="comment small icon"></i>
      {product.rating}
      </span>
</div>

<div className="ui orange basic button" style={{marginTop: '35px'}} onClick={addCart}>
    Sepete Ekle
</div>









  </div>
</div>

















</section>

 

  )
}
