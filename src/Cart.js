import { useContext, useState } from "react";
import { ShopContext } from "./ShopContext";

function Cart(props) {

  const { shopItems, itemsInCart, setItemsInCart } = useContext(ShopContext);

  const [ total, setTotal ] = useState(0);
  
  return (
    <div className='cart'>
      <h2>You have {`${itemsInCart.length}`} items in your cart.</h2>
      <ul>
        {itemsInCart.map(item => <li>{item.name}</li>)}        
      </ul>
    </div>
  );
}

export default Cart;
