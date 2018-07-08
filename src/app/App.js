import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'

import Header from './common/header/index'
import {Footer} from './common/footer/index'

import Home from './home/index';
import MoviePage from './movie/index';
import './app.css';




class App extends Component {
  render() {
    return (
      <div className = "app">
    <Header/>
    <Switch>
      <Route exact path ="/" component = {Home}/>
      <Route path = "/movie/:id" component = {MoviePage}/>
      </Switch>
    <Footer/>
    </div>
    );
  }
}

export default App;
