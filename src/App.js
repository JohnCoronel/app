import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Header from './header';
import Home from './Home';
import Search from './search';
import Movie from './movie';
import Footer from './Footer';
import './style/normalize.css';
import './style/app.css';




class App extends Component {
  render() {
    return (
      <div className = "app">
    <Header/>
    <Switch>
      <Route exact path ="/" component = {Home}/>
      <Route path ="/search" component = {Search}/>
      <Route path = "/movie/:id" component = {Movie}/>
      </Switch>
    <Footer/>
    </div>
    );
  }
}

export default App;
