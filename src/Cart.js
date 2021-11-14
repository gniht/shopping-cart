import { useContext, useState } from "react";
import { ShopContext } from "./ShopContext";
import Item from "./Item";

function Cart(props) {

  const { shopItems, setShopItems, numberOfItemsInCart } = useContext(ShopContext);
  const [ total, setTotal ] = useState(0);  
  
  return (
    <div className='cart'>
      <h2>You have {`${numberOfItemsInCart}`} items in your cart.</h2>
      <ul>
        {shopItems.map(item => {
          if(item.inCart){
            return (<Item 
              key={item.name} 
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
              inCart={item.inCart}
              quantityPurchased={item.quantityPurchased}
            />);
          }          
        })}        
      </ul>
      <h2 className="cartTotal">Total: {`${total}`}</h2>
      
    </div>
  );
}

export default Cart;
