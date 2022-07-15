import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Products from "./Products";
import Bag from "./Bag";

const App = () => {
  useEffect(() => {
    document.title = `Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra`;
  });
  return (
    <section>
      <div className="app">
        <Switch>
          <Route exact path="/products/:id/bag" component={Bag} />
          <Route exact path="/bag" component={Bag} />
          <div>
            <Navbar />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/products" component={Home} />
            <Route exact path="/products/:id" component={Products} />


          </div>
        </Switch>
        <Footer />
      </div>
    </section>
  );
};
export default App;
