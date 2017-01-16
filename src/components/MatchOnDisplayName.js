import React from 'react';
import axios from 'axios';
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import NotFound from './NotFound';

class MatchOnDisplayName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
    this.getProfiles();
  }

  getProfiles = () => {
    let profiles = [];
    let rname = false;
    axios.get(`https://atom-resume.firebaseio.com/users/.json`).then((resp) => {
      rname = true
      for (var key in resp.data) {
        var obj = resp.data[key];
        profiles.push(obj.displayName);
      }
      this.setState({ profiles})
    });
    return rname;
  }

  profileExists = (str) => {
    let prm = false;
    this.state.profiles.map((i) => {
      if (i === str) {
        prm = true;
      }
    });
    // debugger
    return prm;
  }

  render() {
    return (this.profileExists('antmejia') ? (<Match exactly pattern="/antmejia" component={this.props.component}/>) : (<div className="loading">Loading<Miss component={NotFound}/></div>))
  }
}

export default MatchOnDisplayName;
