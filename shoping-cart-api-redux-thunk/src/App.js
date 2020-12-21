import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
//
import store from "./store";
import Navbar from "./layout/Navbar";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import ProductView from "./components/products/ProductView";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar/>

          <Switch>
            <Route exact path="/" component={Cart}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/products/:id" component={ProductView}/>
            <Route exact path="/cart" component={Cart}/>
          </Switch>

        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
