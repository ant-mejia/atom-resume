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

  showExperience = () => {
    if (this.state.profile.experience) {
    return ( Object.keys(this.state.profile.experience).map((item) => {
        let o = this.state.profile.experience[item];
        return (
          <li key={item}>
            <div>
              <h4>{o.position} | {o.sdate} - {o.edate}</h4>
              <h4>{o.company}</h4>
              <p>{o.summary}</p>
            </div>
          </li>
        )
      }))
    }
  }

  showEducation = () => {
    if (this.state.profile.education) {
    return ( Object.keys(this.state.profile.education).map((item) => {
        let o = this.state.profile.education[item];
        return (
          <li key={item}>
            <div>
              <h4>{o.degree} | {o.syear} - {o.eyear}</h4>
              <h4>{o.university}</h4>
              <p>{o.summary}</p>
            </div>
          </li>
        )
      }))
    }
  }

  showSkills() {
    if (this.state.profile.skills) {
      return (Object.keys(this.state.profile.skills).map((i) => {
        return (
          <li key={i} className="skill">{this.state.profile.skills[i].skill}</li>
        )
      }))
    }
  }

  render() {
    let profile = this.state.profile;
    return (
      <div id="resume-view">
        <div className="container wrapper">
          <div className="top row">
            <div className="top-row container">
              <div className="top-header ct col-sm-6">
                <div className="name"><h1>{profile.firstname} {profile.lastname}</h1></div>
                <div className="current-position"><h2><span>{profile.curposition}</span></h2></div>
              </div>
              <div className="summary col-sm-6">
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
            <div className="col-sm-6">
              <div className="experience-wrapper">
                <h3 className="wrapper-title acap lt">Experience</h3>
                <ul className="experience-list resume-list">
                  {this.showExperience()}
                </ul>
              </div>
            </div>
            <div className="education-wrapper col-sm-6">
              <h3 className="wrapper-title acap lt">Education</h3>
              <ul className="education-list resume-list">
                {this.showEducation()}
              </ul>
            </div>
          </div>
          <div className="tech-details row">
            <div className="col-sm-6">
              <div className="skills-wrapper">
                <h3 className="wrapper-title acap lt">Skills</h3>
                <ul className="skills-list">
                  {this.showSkills()}
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="project-wrapper">
                <h3 className="wrapper-title acap lt">Projects</h3>
                <ul className="project-list resume-list">
                  <li>
                    <div>
                      <h4>My Degree | 01.17 - 01.17</h4>
                      <h4>My University</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>My Degree | 01.17 - 01.17</h4>
                      <h4>My University</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default UserProfile;
