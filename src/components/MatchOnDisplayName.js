import React from 'react';
import axios from 'axios';
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import NotFound from './NotFound'
import UserProfile from './UserProfile';

class MatchOnDisplayName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: '',
      d: {},
      o: ''
    };
  }

  componentDidMount() {
    this.getProfiles();
  }

  getProfiles = () => {
    let profiles = [];
    axios.get(`https://atom-resume.firebaseio.com/users/.json`).then((resp) => {
      this.setState({d:resp.data})
      for (let key in resp.data) {
        let p = {};
        p.displayName = resp.data[key].displayName;
        p.uid = key;
        let obj = resp.data[key];
        profiles.push(p);
      }
      this.setState({profiles})
    });
  }

  profileExists = (str) => {
    let prm = false;
    this.state.profiles.map((i) => {
      if (i.displayName === str) {
        prm = true;
        this.setState({o: i.uid})
      }
    });
    // debugger
    return prm;
  }

  render() {
    if (this.state.profiles) {
      return (this.profileExists(this.props.displayName) ? (<Match exactly pattern={`/${this.props.displayName}`} component={() => <UserProfile uid={this.state.o}/>}/>) : (<Miss component={NotFound}/>))
    }
    else if (this.state.profiles === '') {
      return (
        <div>Loading</div>
      )
    }
  }
}

export default MatchOnDisplayName;
