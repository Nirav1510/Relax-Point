import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import './App.css'
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav";
import Trending from "./pages/Trending/Trending";
import Series from "./pages/Series/Series";
import Movies from "./pages/Movies/Movies";
import Search from "./pages/Search/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <MainNav/>
    </BrowserRouter>
  );
};

export default App;
