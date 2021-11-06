import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debits from './components/Debits';
import Credits from './components/Credits';
import axios from "axios"
import Login from './components/Login';
import "./App.css";
import uuid from "react-uuid"


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
            credits: [],
            debitDescription: "",
            debitAmount:0,

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

    // componentDidUpdate(prevProps, prevState){
    // if(this.state.debits.length !== prevState.debits.length ||this.state.credits.length !== prevState.credits.length) //compadring the length 
    // {
    //     let debitSum = 0, creditSum = 0;
    //     this.state.debits.forEach((debit) => {
    //         debitSum += debit.amount;
    //     })

    //     this.state.credits.forEach((credit) => {
    //         creditSum += credit.amount;
    //     })

    //     let accountBalance = creditSum - debitSum;
    //     this.setState({accountBalance });
    // }
    // }

    addDebit = (e) => {
        e.preventDefault();
        this.setState({
            debits: [...this.state.debits,
            {
                amount: this.state.debitAmount,//setting whatever amount the user typed in the text field
                description: this.state.debitDescription, //setting whatever amount the user typed in the text field
                id: uuid(), //generates a new id
                date: new Date().toISOString(),//generates the current date
            }],
            accountBalance:this.state.accountBalance-this.state.debitAmount
    

        }) //keeps the old information but also add new information 
    }
    
    mockLogIn = (logInInfo) => {
        const newUser = { ...this.state.currentUser }
        newUser.userName = logInInfo.userName
        this.setState({ currentUser: newUser })
    }

    handleDescriptionChange = (e) => {
        this.setState({
            debitDescription: e.target.value //e is the change event, target is which element is being changed, the text from the element that is being changed
        })
    }

    handleAmountChange = (e) => {
        this.setState({
            debitAmount: e.target.value
        })
    }

    render() {

        const { debits } = this.state;
        const { credits } = this.state;
        const { debitDescription } = this.state;
        const { debitAmount } = this.state;
        const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} accountBalance={this.state.accountBalance}/>)
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
        const UserProfileComponent = () => (
            <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} accountBalance={this.state.accountBalance}/>
        );
        const DebitComponent = () => (<Debits addDebit={this.addDebit} debits={debits} debitDescription={debitDescription} debitAmount={debitAmount} handleAmountChange={this.handleAmountChange} handleDescriptionChange={this.handleDescriptionChange} />)
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