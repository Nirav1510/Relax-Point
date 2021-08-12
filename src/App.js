import React from "react";re
import './App.css'
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="app">random</div>
      <MainNav/>
    </React.Fragment>
  );
};

export default App;
