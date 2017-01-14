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

  signOutUser = () => {
    firebase.auth().signOut();
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
            <Match exactly pattern="/login" component={() => <Login setUser={this.setUser} signInUser={this.signInUser}/>} />
            <Miss component={NotFound}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
