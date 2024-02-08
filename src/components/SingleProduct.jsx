import React from 'react'

export default function SingleProduct() {

  //const {productId} =useParams();
//const product =products.find((product)=>product.id===productId);
//const {image,name}=product;
//<Link to='/product'>back to products</Link>

  return (
<section>

 
<div className="ui  equal width grid">

<div className="seven wide column">
<img src="" alt=""  height={400} width={500}/>
</div>







<div className="ui seven wide column container center aligned" style={{marginTop: '60px'}}>


<div className='ui content '  >
<div className="header">Product name Product name Product name</div>
</div>



<div className='content' style={{marginTop: '10px'}}>
<span className="card right floated ">
        <i className="heart outline like icon"></i>
        17 likes
      </span>
      <span className="card left floated">
      <i class="comment icon"></i>
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
