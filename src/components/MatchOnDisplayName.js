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
      this.setState({d:resp.data});
      for (let key in resp.data) {
        let p = {};
        p.displayName = resp.data[key].displayName;
        p.uid = key;
        profiles.push(p);
      }
      this.setState({profiles});
    });
  }


  render() {
    if (this.state.profiles) {
      return (
        <div>
          {this.state.profiles.map((p) => {
            return <Match exactly pattern={`/${p.displayName}`} key={p.uid} render={() => (<UserProfile uid={p.uid}/>)}/>
          })}
        </div>)
    }
    return (
      <div>Loading</div>
    )
  }
}

export default MatchOnDisplayName;

// setUID = (uid) => {
//   this.setState({o:uid})
// }
//
// profileExists = (str) => {
//   let prm = false;
//   this.state.profiles.map((i) => {
//     if (i.displayName === str) {
//       prm = true;
//       this.setUID(i.uid)
//     }
//   });
//   // debugger
//   return prm;
// }
//
// (this.state.profiles.map((p) => {
//   return <Match exactly pattern={`/${p.displayName}`} render={() => (<p>Correct</p>)}/>
// }))
