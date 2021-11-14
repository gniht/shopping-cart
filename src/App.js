import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";
import { ShopContext } from './ShopContext';
import { shopInventory } from './shopInventory';


function App() {  

  const [ shopItems, setShopItems] = useState(shopInventory);
  const [ itemsInCart, setItemsInCart ] = useState(0);

    
  useEffect(() => {    
    let count = 0;
    shopItems.forEach(item => {           
      count += item.quantity;
    });
    setItemsInCart(count);
  }, [shopItems]);
   
  return (
    <BrowserRouter>
      <div className="navBar">        
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/shop">Shop</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/cart">Cart{` (${itemsInCart} items)`}</Link>
      </div>
      <ShopContext.Provider value={{ shopItems, setShopItems }}>           
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} /> 
          <Route path="/cart" component={Cart} />        
        </Switch>
      </ShopContext.Provider>
    </BrowserRouter>   
  );
}

export default App;
