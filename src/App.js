import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import MyOrder from "./containers/MyOrder/MyOrder";
import {Route,Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    
    <div>
         <Layout>
            <Switch>
              <Route path="/checkout" component = { Checkout } />
              <Route path="/MyOrder" component = { MyOrder } />
              <Route path="/" exact component = { BurgerBuilder } />
            </Switch>
         </Layout>      
    </div>
        
    
  );
}

export default App;
