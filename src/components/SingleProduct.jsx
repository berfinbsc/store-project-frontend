import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../api/Http';

export default function SingleProduct() {

 const  {productId} = useParams();

const [product,setProduct] = useState([]);


useEffect(()=>{
getOneProduct(productId)
.then((data)=>{setProduct(data.data.product); console.log(data.data.product)})

},[]);

<Link to='/product'>back to products</Link>

  return (
<section>

 
<div className="ui  equal width grid">

<div className="seven wide column">
<img src="" alt=""  height={400} width={500}/>
</div>







<div className="ui seven wide column container center aligned" style={{marginTop: '60px'}}>


<div className='ui content '  >
<div className="header">{product.name}</div>
</div>



<div className='content' style={{marginTop: '10px'}}>
<span className="card right floated ">
        <i className="heart outline like icon"></i>
        {product.likesCount}
      </span>
      <span className="card left floated">
      <i class="comment icon"></i>
      {product.rating}
      </span>
</div>

<div className="ui orange basic button" style={{marginTop: '35px'}}>
    Sepete Ekle
</div>









  </div>
</div>

















</section>

 

  )
}
