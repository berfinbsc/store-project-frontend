import React from 'react'

function ProductComponent(props) {
  return (
    <div>


      
      <div className="ui card">

      <div className="image content">
      <img src='../images/p.png' alt="img" height={350} width={400}/>
      </div>



      <div className="content" >
      <div style={{marginTop: '-12px'}}>
        <span>{props.product.name}</span>
      </div>

      <div style={{marginTop: '-5px'}}>
      <span className="right floated ">
        <i className="heart outline like small icon"></i>
        {props.product.likesCount}
      </span>
      <span className="left floated">
      <i class="comment icon small"></i>
      {props.product.rating}
      </span>
      </div>

      
      <div style={{marginTop: '30px'}}>
        <span>{props.product.price}</span>
      </div>
      </div>


      </div>











    </div>

  )
}

export default ProductComponent
