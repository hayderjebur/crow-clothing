import React from "react";
import { Swich, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from "./pages/shop/Shop.component";

function App() {
  return (
    <div>
      <swich>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
      </swich>
    </div>
  );
}

export default App;
