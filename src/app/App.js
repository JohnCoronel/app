import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
// import Header from './common/header/index'
import  About from './common/footer'
import {withRouter} from 'react-router-dom'
import Home from './home/index';
import MobileSearch from './mobileSearch'
import MobileNav from './common/mobileNav/mobileNav'
import MoviePage from './movie/index';
import LoginPage from './login/loginPage'
import RegisterPage from './register'
import {fetchUser} from './actions'
import {connect} from 'react-redux'
import './app.css';




class App extends Component {
 
  componentDidMount(){
    this.props.fetchUser()
  }
  render() {
    return (
      <div className = "app">
        {/* <Header/> */}
        <Switch>
          <Route exact path ="/" component = {Home}/>
          <Route exact path = "/movie/:id" component = {MoviePage}/>
          <Route exact path = "/login" component = {LoginPage}/>
          <Route exact path = "/register" component = {RegisterPage}/>
          <Route exact path = "/search" component = {MobileSearch} />
        </Switch>
        <About/>
        <MobileNav/>
      </div>
    );
  }
}


export default withRouter(connect(null,{fetchUser})(App));
