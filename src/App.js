import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";
import { ShopContext } from './ShopContext';
import {shopItems} from './shopItems';

function App() {
  
  const [ itemsInCart, setItemsInCart ] = useState([]);
  
  return (
    <BrowserRouter>
      <div className="navBar">        
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/shop">Shop</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/cart">Cart</Link>
      </div>
      <ShopContext.Provider value={{ shopItems, itemsInCart, setItemsInCart }}>           
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
