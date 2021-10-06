import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

function App() {
  return (
    <BrowserRouter>      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />        
      </Switch>   
    </BrowserRouter>   
  );
}

export default App;
