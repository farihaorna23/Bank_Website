import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debits from './components/Debits';
import Credits from './components/Credits';
import axios from "axios"
import Login from './components/Login';
import "./App.css";


class App extends Component {

    constructor() {
        super();

        this.state = {
            accountBalance: 14568.27,
            currentUser: {
                userName: 'joe_shmo',
                memberSince: '07/23/96',
            },
            debits: [],
            credits: []
        }
    }

    async componentDidMount() {
        let debits = await axios.get("https://moj-api.herokuapp.com/debits");
        let credits = await axios.get("https://moj-api.herokuapp.com/credits");

        //getting data from API response
        debits = debits.data;
        credits = credits.data;

        let debitSum = 0, creditSum = 0;
        debits.forEach((debit) => {
            debitSum += debit.amount;
        })

        credits.forEach((credit) => {
            creditSum += credit.amount;
        })

        let accountBalance = creditSum - debitSum;
        this.setState({ debits, credits, accountBalance });

    }

    addDebit = (e) => {

    }

    addCredit = (e) => {

    }

    mockLogIn = (logInInfo) => {
        const newUser = { ...this.state.currentUser }
        newUser.userName = logInInfo.userName
        this.setState({ currentUser: newUser })
    }

    render() {

        const { debits } = this.state;
        const { credits } = this.state;
        const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
        const UserProfileComponent = () => (
            <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
        );
        const DebitComponent = () => (<Debits addDebit={this.addDebit} debits={debits} />)
        const CreditComponent = () => (<Credits addCredit={this.addCredit} credits={credits} />)

        return (
            <Router>
                <div className="App">
                    <Route exact path="/" render={HomeComponent} />
                    <Route exact path="/userProfile" render={UserProfileComponent} />
                    <Route exact path="/debits" render={DebitComponent} />
                    <Route exact path="/login" render={LogInComponent} />
                    <Route exact path="/credits" render={CreditComponent} />
                </div>
            </Router>
        );
    }

}

export default App;