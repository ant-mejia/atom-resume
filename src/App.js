import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header/>
            <Match exactly pattern="/" component={Home} />
            <Match exactly pattern="/login" component={Login} />
            <Miss component={NotFound}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
