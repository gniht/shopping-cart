import React, { useState } from "react";

function Item({name, description, price}) {
  
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  function addOrRemoveHandler(){
    if(inCart){
      setInCart(false);
      setQuantity(0);
    }else{
      setInCart(true);
      setQuantity(1);
    }
  }
  
  return (
    <li className="item">
      {console.log(name)}
      <h4 className="productName">{name}</h4>
      {/* <img src={image} alt={description} /> */}
      <p className="productDescription">{description}</p>
      <h6>{price}</h6>
      <button className="btn" onClick={() => addOrRemoveHandler()}>
        { inCart ? 'Remove Item' : 'Add to Cart'}
      </button>       
    </li>
  );
}

export default Item;

