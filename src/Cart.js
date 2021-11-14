import { useContext, useState, useEffect } from "react";
import { ShopContext } from "./ShopContext";
import Item from "./Item";

function Cart(props) {

  const { shopItems, setShopItems, numberOfItemsInCart, setNumberOfItemsInCart } = useContext(ShopContext);
  const [ total, setTotal ] = useState(0);
  
  useEffect(()=>{
    let cost = 0;
    shopItems.forEach(item => {
      cost += item.price*item.quantityPurchased;      
    });
    setTotal(cost.toLocaleString('en-US', {style: 'currency', currency: 'USD' }));
  },[shopItems]);

  function checkoutHandler() {
    
  }
  
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
      {numberOfItemsInCart > 0 && <button className="btb" onClick={() => checkoutHandler()}>Buy Now</button>}
    </div>
  );
}

export default Cart;
