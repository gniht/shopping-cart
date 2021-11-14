import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "./ShopContext";

function Item({ name, description, price, inCart, quantityPurchased }) {

  const { shopItems, setShopItems } = useContext(ShopContext);

  const [isInCart, setIsInCart] = useState(inCart);
  const [quantity, setQuantity] = useState(quantityPurchased);

  function addOrRemoveHandler(){
    if(isInCart){
      setIsInCart(false);
      setQuantity(0);
    }else{
      setIsInCart(true);      
      setQuantity(1);
    }
  }

  function quantityChangeHandler(e){
    setQuantity(parseInt(e.target.value))    
  }

  useEffect(()=> {       
    const updatedItems = [...shopItems];
    updatedItems.forEach(element => {
      if(element.name == name){        
        element.quantityPurchased = quantity;
        element.inCart = isInCart;        
      }
    });
    setShopItems(updatedItems);
  },[quantity]);
  
  
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

