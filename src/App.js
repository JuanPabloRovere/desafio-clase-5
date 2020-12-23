import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import {Switch, Route, BrowserRouter } from 'react-router-dom';


export default function App() {
  return (
    <div>
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" component={ItemListContainer}/>
      <Route path='/itemdetail/:id' component={ItemDetailContainer}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}
