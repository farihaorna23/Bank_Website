import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div className="container">
          <img src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="bank"/>
          <h1>Bank of React</h1>
          
          <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/userProfile">UserName</Link>
          <Link to="/debits">Debit</Link>
          <Link to="/userProfile">Credit</Link>
          </div>

          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;