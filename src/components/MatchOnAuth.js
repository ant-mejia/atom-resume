import React,{Component} from 'react';
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'

class MatchOnAuth extends React.Component {

  render() {
    return (
        <Match render={() => (
          <p>Hello World!</p>
        )}/>
    );
  }

}

export default MatchOnAuth;
