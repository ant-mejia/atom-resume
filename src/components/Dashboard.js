import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { BrowserRouter, Link } from 'react-router';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ex: false,
      ee: false,
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
      this.getExperience();
      this.getEducation();
    })
  }

  getExperience = () => {
    axios.get(`https://atom-resume.firebaseio.com/users/${this.props.user.uid}/experience/.json`).then((data) => {
      data = data.data
      console.log('asd');
      let r = this.state.ud;
      r['experience'] = data
      this.setState({ud: r});
    }).catch((err) => {console.error(err)});
  }

  getEducation = () => {
    axios.get(`https://atom-resume.firebaseio.com/users/${this.props.user.uid}/education/.json`).then((data) => {
      data = data.data
      console.log('asd');
      let r = this.state.ud;
      r['education'] = data
      this.setState({ud: r});
    }).catch((err) => {console.error(err)});
  }

  setUserData = (obj) => {
    console.log('blurred');
    axios.patch(`https://atom-resume.firebaseio.com/users/${this.props.user.uid}/.json`, obj);
  }

  renderX = () => {
    if (this.state.ud.experience) {
      let x = this.state.ud.experience
      return (
      Object.keys(x).map((item) => {
        let i = x[item];
        return (<div key={item}>
          <h3>{i.position}</h3>
          <h4>{i.company} | {i.sdate} - {i.edate}</h4>
          <p>{i.summary}</p>
        </div>)
      }))
    }
    else {
      return <div></div>
    }
  }
  renderXEdit = () => {
    if (this.state.ex) {
      return (
        <div className="container edit-wrapper col-sm-8">
          <form onSubmit={(e) => this.toggleX(e)}>
            <input type="text" placeholder="Position" name="position"/>
            <input type="text" placeholder="Company" name="company"/>
            <input type="text" placeholder="Start Date" name="sdate"/>
            <input type="text" placeholder="End Date" name="edate"/>
            <textarea placeholder="summary" name="summary"/>
          </form>
        </div>
      )
    }
  }

  renderE = () => {
    if (this.state.ud.education) {
      let x = this.state.ud.education
      return (
        Object.keys(x).map((item) => {
          let i = x[item];
          return (<div key={item}>
            <h3>{i.degree}</h3>
            <h4>{i.university} | {i.syear} - {i.eyear}</h4>
            <p>{i.summary}</p>
          </div>)
        }))
      }
      else {
        return <div></div>
      }
    }

  renderEEdit = () => {
    if (this.state.ee) {
      return (
        <div className="container edit-wrapper col-sm-8">
          <form onSubmit={(e) => this.toggleE(e)}>
            <input type="text" placeholder="Degree" name="degree"/>
            <input type="text" placeholder="University" name="university"/>
            <input type="text" placeholder="Start Year" name="syear"/>
            <input type="text" placeholder="End Year" name="eyear"/>
            <textarea placeholder="summary" name="summary"/>
          </form>
        </div>
      )
    }
  }

  toggleX = (e) => {
    e.preventDefault();
    if ($(e.target).siblings('.edit-wrapper').length) {
      let o = {}
      $(e.target).siblings('.edit-wrapper').children().children().each(function(index, el) {
        o[$(this).attr('name')] = $(this).val();
      });
      this.sendObj(o, 'experience');
    }
    this.setState({
      ex: !this.state.ex
    })
  }

  toggleE = (e) => {
    e.preventDefault();
    if ($(e.target).siblings('.edit-wrapper').length) {
      let o = {}
      $(e.target).siblings('.edit-wrapper').children().children().each(function(index, el) {
        o[$(this).attr('name')] = $(this).val();
      });
      this.sendObj(o, 'education');
    }
    this.setState({
      ee: !this.state.ee
    })
  }

  sendObj = (obj, destination) => {
    axios.post(`https://atom-resume.firebaseio.com/users/${this.props.user.uid}/${destination}/.json`, obj).then((value) => {console.log(value);});
  }

  render() {
    return (
      <div>
        <div className="container">
          <Link to={this.props.user.displayName}>View Resume</Link>
          <div className="dash-section row">
            <h1 className="section-title">Profile<span></span></h1>
            <div className="container col-sm-6">
              <input type="text" name="firstname" value={this.state.ud.firstname} ref="firstname" placeholder="First Name" onChange={this.handleChange} onBlur={() => this.setUserData(this.state.ud)}/>
              <input type="text" name="lastname" value={this.state.ud.lastname} ref="lastname" placeholder="First Name" onChange={this.handleChange} onBlur={() => this.setUserData(this.state.ud)}/>
              <input type="text" name="curposition" value={this.state.ud.curposition} ref="lastname" placeholder="Current Position" onChange={this.handleChange} onBlur={() => this.setUserData(this.state.ud)}/>
              <textarea name="summary" value={this.state.ud.summary} ref="summary" placeholder="Summary" onChange={this.handleChange} onBlur={() => this.setUserData(this.state.ud)}></textarea>
            </div>
          </div>
          <div className="dash-section row">
            <h1 className="section-title">Experience<span></span></h1>
            <div className="container col-sm-6">
              {this.renderX()}
              <button className="add-button mc col-sm-8" onClick={this.toggleX}>Add</button>
              {this.renderXEdit()}
            </div>
          </div>
          <div className="dash-section row">
            <h1 className="section-title">Education<span></span></h1>
            <div className="container col-sm-6">
              {this.renderE()}
              <button className="add-button mc col-sm-8" onClick={this.toggleE}>Add</button>
              {this.renderEEdit()}
            </div>
          </div>
          <div className="dash-section row">
            <h1 className="section-title">Skills<span></span></h1>
            <div className="container">
            </div>
          </div>
          <button id="signout-button" onClick={this.props.signOutUser}>Sign Out</button>
        </div>
      </div>
    );
  }

}

export default Dashboard;
