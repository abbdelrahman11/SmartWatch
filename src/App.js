import React from "react";
import Header from "./Components/Haeder/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import features from "./Components/Section/Section";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/about" component={About} />
            <Route path="/features" component={features} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
