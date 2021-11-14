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
        <Navbar />  {/* reffering to the navbar component and account balance componet with its props */}
        <AccountBalance accountBalance={this.props.accountBalance} />

      </div>
    );
  }
}

export default UserProfile;