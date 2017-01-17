import React from 'react';
import axios from 'axios';
import { BrowserRouter, Link } from 'react-router';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ud: {}
    }
  }
  componentDidMount() {
    this.getUserData()
  }

  handleChange = (event) => {
    let d = {...this.state.ud}
    d[event.target.name] = event.target.value
    this.setState({ ud: d });
  }

  getUserData = () => {
    axios.get(`https://atom-resume.firebaseio.com/users/${this.props.user.uid}/.json`).then((data) => {
      data = data.data
      this.setState({ud: data});
    })
  }

  setUserData = (obj) => {
    console.log('blurred');
    axios.patch(`https://atom-resume.firebaseio.com/users/${this.props.user.uid}/.json`, obj);
  }
  render() {
    return (
      <div>
        <div className="container">
          <Link to={this.props.user.displayName}>View Resume</Link>
          <div className="row">
            <h1>Profile</h1>
            <input type="text" name="firstname" value={this.state.ud.firstname} ref="firstname" placeholder="First Name" onChange={this.handleChange} onBlur={() => this.setUserData(this.state.ud)}/>
            <input type="text" name="lastname" value={this.state.ud.lastname} ref="lastname" placeholder="First Name" onChange={this.handleChange} onBlur={() => this.setUserData(this.state.ud)}/>
            <input type="text" name="curposition" value={this.state.ud.curposition} ref="lastname" placeholder="Current Position" onChange={this.handleChange} onBlur={() => this.setUserData(this.state.ud)}/>
            <textarea name="summary" value={this.state.ud.summary} ref="summary" placeholder="Summary" onChange={this.handleChange} onBlur={() => this.setUserData(this.state.ud)}></textarea>
          </div>
          <Link to="">
            <button id="signout-button">Sign Out</button>
          </Link>
        </div>
      </div>
    );
  }

}

export default Dashboard;
