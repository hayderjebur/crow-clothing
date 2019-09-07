import React from "react";
import { Swich, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from "./pages/shop/Shop.component";
import Header from "./component/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <swich>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
      </swich>
    </div>
  );
}

export default App;
