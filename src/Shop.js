import React, { useState, useContext} from "react";
import Item from "./Item";
import { ShopContext } from "./ShopContext";


  function Shop(props) {
    {/* it may be better to track state of cart and cart items with context API */ }
     
    const {shopItems, itemsInCart, setItemsInCart} = useContext(ShopContext);

    return (
      <div>
        <h1>Time to shop!</h1>
        <ul>
          {
          shopItems.map(item => {
            console.log(item)            
            return <Item 
              key={item.name} 
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
            />;            
          })
          }
        </ul>
      </div>
    );
  }

export default Shop;