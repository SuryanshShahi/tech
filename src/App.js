import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Techno from "./techno";
import "./App.css";

const App = () => {
  return (
    <section>
      <div className="app">
        <Techno />
      </div>
    </section>
  );
};
export default App;
