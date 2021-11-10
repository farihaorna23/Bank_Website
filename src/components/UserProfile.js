import React, { Component } from 'react';
import Navbar from './Navbar'
import AccountBalance from './AccountBalance';


class UserProfile extends Component {
  render() {
    return (
      <div className="container">
        <h1>User Profile</h1>

        <div>Username: {this.props.userName}</div>
        <div>Member Since: {this.props.memberSince}</div>
        <Navbar />
        <AccountBalance accountBalance={this.props.accountBalance} />

      </div>
    );
  }
}

export default UserProfile;