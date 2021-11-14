import React, { useState, useContext} from "react";
import Item from "./Item";
import { ShopContext } from "./ShopContext";


  function Shop(props) {
         
    const { shopItems } = useContext(ShopContext);

    return (
      <div>
        <h1>Time to shop!</h1>
        <ul>
          {
          shopItems.map(item => {                       
            return (<Item                
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
              inCart={item.inCart}
              quantityPurchased={item.quantityPurchased}
            />);            
          })
          }
        </ul>
      </div>
    );
  }

export default Shop;