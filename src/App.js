/*eslint-disable import/no-unresolved*/
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {Component} from 'react'
import * as firebase from 'firebase';
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Router from 'react-router/BrowserRouter'
import Dash from './components/Dashboard'
import Home from './components/Home'
import MatchOnAuth from './components/MatchOnAuth'
import MatchOnDisplayName from './components/MatchOnDisplayName'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import NotFound from './components/NotFound'

firebase.initializeApp({apiKey: "AIzaSyAns6xJMP_rxiioUbl_gOiByj3ysbjtqtY", authDomain: "atom-resume.firebaseapp.com", databaseURL: "https://atom-resume.firebaseio.com", storageBucket: "atom-resume.appspot.com", messagingSenderId: "415478292794"});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        user = {}
      }
      this.setUser(user);
    });
    if (firebase.auth().currentUser) {
      this.setState({user: firebase.auth().currentUser});
    }
  }

  isUserAuth = () => {
    if (Object.keys(this.state.user).length === 0) {
      return false;
    }
    return true;
  }

  setUser = (user) => {
    this.setState({user});
  }

  signInUser = (cred, fn) => {
    firebase.auth().signInWithEmailAndPassword(cred.email, cred.password).then((data) => {
      this.setUser(data);
      fn ? fn(data) : fn = 0;
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  signOutUser = (fn) => {
    firebase.auth().signOut().then((data) => {
      if (fn) {
        console.log(fn);
        fn(data);
      }
    });
  }
//component={({ params }) => <UserProfile />}/>
  render() {
    return (
      <Router>
        {({...router}) => (
          <div className="App">
            <Header isUserAuth={this.isUserAuth} user={this.state.user} router={router}/>
            <Match exactly pattern="/" component={Home}/>
            <Match pattern="/login" component={() => <Login user={this.state.user} signInUser={this.signInUser} isUserAuth={this.isUserAuth} />}/>
            <MatchOnAuth user={this.state.user} isUserAuth={this.isUserAuth} pattern="/profile" component={Dash}/>
            <MatchOnDisplayName path={location} router={router}/>
            <Miss location={location} component={NotFound}/>
            <Footer/>
          </div>
        )}
      </Router>
    );
  }
}
// const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
//   <Match {...rest} render={props => (
//     false ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }}/>
//     )
//   )}/>
// )

export default App

/*
import React, { Component } from 'react';
import * as firebase from 'firebase';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import './App.css';

firebase.initializeApp({
  apiKey: "AIzaSyAns6xJMP_rxiioUbl_gOiByj3ysbjtqtY",
  authDomain: "atom-resume.firebaseapp.com",
  databaseURL: "https://atom-resume.firebaseio.com",
  storageBucket: "atom-resume.appspot.com",
  messagingSenderId: "415478292794"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  signInUser = (cred, fn) => {
    firebase.auth().signInWithEmailAndPassword(cred.email, cred.password)
    .then((data) => {
      this.setUser(data);
      fn(data)
    })
    .catch(function(error) {
      console.log(error.message);
    });
  }

  signOutUser = (fn) => {
    firebase.auth().signOut().then(fn());
  }

  getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        user = {}
      }
      this.setUser(user);
    });
    if (firebase.auth().currentUser) {
      this.setState({
        user: firebase.auth().currentUser
      });
    }
  }
  setUser = (user) => {
    this.setState({user});
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header user={this.state.user} signOutUser={this.signOutUser} />
            <Match exactly pattern="/" component={Home} />
            <Match exactly pattern="/dash" component={Dashboard} />
            <Match exactly pattern="/login" component={() => <Login user={this.state.user} setUser={this.setUser} signInUser={this.signInUser} signOutUser={this.signOutUser}/>} />
            <Miss component={NotFound}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

 */
