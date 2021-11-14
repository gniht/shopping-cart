import React, { useState, useContext} from "react";
import Item from "./Item";
import { ShopContext } from "./ShopContext";


  function Shop(props) {
         
    const {shopItems, setShopItems} = useContext(ShopContext);

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
              inCart={item.inCart}
              quantity={item.quantity}
            />;            
          })
          }
        </ul>
      </div>
    );
  }

export default Shop;