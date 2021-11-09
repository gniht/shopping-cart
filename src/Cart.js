import { useState } from "react";

function Cart(props) {

  const [ total, setTotal ] = useState(0);
  
  return (
    <ul>
      {/* todo: list items in cart and update total.  
        the code below probably doesn't work, but the idea is there:
        we need to loop over the products in-cart and add the price of 
        all the item(s) to the cart total */}
      {props.array.forEach(item => {
        setTotal(total + item.price*item.quantity);        
      })}
    </ul>
  );
}
