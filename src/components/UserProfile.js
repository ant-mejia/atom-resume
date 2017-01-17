import React from 'react';
import axios from 'axios';
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    this.getProfile(this.props.uid);
  }

  getProfile = (id) => {
    axios.get(`https://atom-resume.firebaseio.com/users/${id}/.json`).then((rsp) => {
      if (rsp) {
        this.setState({
          profile: rsp.data
        })
      }
    })
  }

  formatPhone = (num) => {
    if (num) {
      var numbers = num.replace(/\D/g, ''),
          char = {0:'(',3:') ',6:' - '};
      let e = '';
      for (var i = 0; i < numbers.length; i++) {
          e += (char[i]||'') + numbers[i];
      }
      return e;
    }
  }

  render() {
    let profile = this.state.profile;
    return (
      <div id="resume-view">
        <div className="container wrapper">
          <div className="top row">
            <div className="top-row">
              <div className="top-header ct">
                <div className="name"><h1>{profile.firstname} {profile.lastname}</h1></div>
                <div className="current-position"><h2><span>{profile.curposition}</span></h2></div>
              </div>
              <div className="col-sm-6">
                <h3>Summary</h3>
                <p>{profile.summary}</p>
              </div>
            </div>
            <div className="top-social">
              <ul>
                <li>Phone: <span>{this.formatPhone(profile.phone)}</span></li>
                <li>Website: <span>{profile.github}</span></li>
                <li>Email: <span>{profile.email}</span></li>
              </ul>
            </div>
          </div>
          <div className="body row">
            <div className="experience-wrapper col-sm-6">
              <h3 className="wrapper-title acap lt">Experience</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default UserProfile;
