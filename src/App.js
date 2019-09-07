import React from "react";
import { Swich, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const HatsPage = () => {
  return <div>HatsPage</div>;
};

function App() {
  return (
    <div>
      <swich>
        <Route path="/" exact component={HomePage} />
        <Route path="/hats" exact component={HatsPage} />
      </swich>
    </div>
  );
}

export default App;
