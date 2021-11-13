import React, { useState, useContext } from "react";
import { ShopContext } from "./ShopContext";

function Item({ key, name, description, price}) {

  const { shopItems, itemsInCart, setItemsInCart } = useContext(ShopContext);

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
  function quantityChangeHandler(e){
    setQuantity(e.target.value)    
  }
  
  return (
    <li>
      <div className="item">
        <h4 className="productName">{name}</h4>
        {/* <img src={image} alt={description} /> */}
        <p className="productDescription">{description}</p>
        <h6>Price: ${price} each</h6>
        <div className="btn-controls">
          <button className="btn" onClick={() => addOrRemoveHandler()}>
            { inCart ? 'Remove Item' : 'Add to Cart'}
          </button>
          { inCart &&  <input type="number" min={1} value={quantity} onChange={(e) => {quantityChangeHandler(e)}}/> }
          { inCart && <h6 className="subtotal">Subtotal: {`${(price*quantity)
            .toLocaleString('en-US', {style: 'currency', currency: 'USD' })}`}</h6> } 
        </div>

      </div>    
    </li>
  );
}

export default Item;

