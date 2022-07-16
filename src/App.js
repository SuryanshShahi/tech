import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Bag from "./components/Bag";

const App = () => {
  useEffect(() => {
    document.title = `Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra`;
  });
  return (
    <section>
      <div className="app">
        <Switch>
          <Route exact path="/products/:id/bag" component={Bag} />
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
// <Route exact path="/bag" component={Bag} />
