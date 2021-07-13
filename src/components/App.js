import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../css/app.css";
import Header from "./partials/Header";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Login from "./pages/Login";
import Footer from "./partials/Footer";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />

        <main className="app__main">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}></Route>

              <Route exact path="/books" component={Books}></Route>

              <Route exact path="/login" component={Login}></Route>
            </Switch>
          </BrowserRouter>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
