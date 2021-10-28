import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <div className="navBar">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </div>      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />        
        <Route path="/about" component={About} />        
      </Switch>   
    </BrowserRouter>   
  );
}

export default App;
