import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home";
import Filter from "./Filter";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import WishList from "./WishList";
import Checkout from "./Checkout";
import CarousalFilter from "./CarousalFilter";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/filter">
          <ChakraProvider>
            <Filter />
          </ChakraProvider>
        </Route>

        <Route path="/productdetail">
          <ChakraProvider>
            <ProductDetail />
          </ChakraProvider>
        </Route>

        <Route path="/wishlist">
          <ChakraProvider>
            <WishList />
          </ChakraProvider>
        </Route>

        <Route path="/hotpicks">
          <ChakraProvider>
            <CarousalFilter />
          </ChakraProvider>
        </Route>

        <Route path="/checkout">
          <ChakraProvider>
            <Checkout />
          </ChakraProvider>
        </Route>

        <Route path="/">
          <ChakraProvider>
            <Home />
          </ChakraProvider>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
