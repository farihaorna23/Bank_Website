import React, { Component } from 'react';

class AccountBalance extends Component {
  render() {
    return (
      <div>
        <h3>Account Balance:</h3>
        <p>Balance: {this.props.accountBalance}</p>
      </div>
    );
  }
}

export default AccountBalance;