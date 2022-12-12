
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';


import React, { Component } from 'react';
import Search from './components/Search';




class App extends React.Component {
  constructor(props) {
    super(props)
    
    
  }

  render() {
    return (

      <div className="App">
        <BrowserRouter>
          <ToastContainer />
          
          <NavBar />
          <Search/>

          

          <Switch>
            <Route path="/cart" exact component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />

            
          </Switch>
          
        </BrowserRouter>

      </div>
    );
  }
  
}

export default App;
