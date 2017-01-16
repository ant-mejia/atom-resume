import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }

  getProfile = (name) => {
    console.log(name);
  }

  render() {
    return (
      <div>User Profile</div>
    );
  }

}

export default UserProfile;
