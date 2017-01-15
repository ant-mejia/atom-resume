import React,{Component} from 'react';
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'

class MatchOnAuth extends React.Component {

  render() {
    return (
    <div>
      <Match pattern="/profile" exactly render={() => (
        this.props.isUserAuth() ? (
          <Redirect to="/dashboard"/>
        ) : (
          <Redirect to="/login"/>
        )
      )}/>
    </div>
    )
  }
}

export default MatchOnAuth;
