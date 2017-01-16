import React from 'react';
import axios from 'axios';
import Match from 'react-router/Match'

class MatchOnDisplayName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
  }

  getProfiles() {
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

  profileExists(str) {
    let prm = false;
    this.state.profiles.map((i) => {
      if (i === str) {
        prm = true;
      }
    });
    return prm;
  }

  render() {
    return (this.getProfiles() ? (<div>Yay!!</div>) : (<div>LOL</div>))

  }
}

export default MatchOnDisplayName;
