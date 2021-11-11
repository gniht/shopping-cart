import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";

function App() {
  
  return (
    <BrowserRouter>
      <div className="navBar">        
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/shop">Shop</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/cart">Cart</Link>
      </div>      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />        
        <Route path="/about" component={About} />        
        <Route path="/cart" component={Cart} />        
      </Switch>   
    </BrowserRouter>   
  );
}

export default App;
