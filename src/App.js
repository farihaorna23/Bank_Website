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
    //constructor. Initial state.
    constructor() {
        super();

        this.state = {
            accountBalance: 14568.27,
            currentUser: {
                userName: 'fariha_hossain',
                memberSince: '07/23/96',
            },
            // adding variables to the state and intializing them to empty string and array
            debits: [],
            credits: [],
            debitDescription: "",
            debitAmount: "",
            creditDescription: "",
            creditAmount: "",

        }
    }

    async componentDidMount() {
        //axios call to endpoints
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

   
    //users would be able to add amount and description to the list of debit data
    addDebit = (e) => {
        e.preventDefault(); //prevents the page from refreshing automatically
        this.setState({
            debits: [...this.state.debits,
            {
                amount: this.state.debitAmount,//setting whatever amount the user typed in the text field
                description: this.state.debitDescription, //setting whatever description the user typed in the text field
                id: uuid(), //generates a new id
                date: new Date().toISOString(),//generates the current date
            }],
            accountBalance: this.state.accountBalance - this.state.debitAmount 
            // calculates the new accountBalance

        }) //keeps the old information but also add new information 
    }

    //users would be able to add amount and description to the list of credit data
    addCredit = (e) => {
        
        e.preventDefault();//prevents the page from refreshing automatically
        
        this.setState({
            credits: [...this.state.credits,
            {
                amount: this.state.creditAmount,//setting whatever amount the user typed in the text field
                description: this.state.creditDescription, //setting whatever amount the user typed in the text field
                id: uuid(), //generates a new id
                date: new Date().toISOString(),//generates the current date
            }],
            accountBalance: this.state.accountBalance + Number(this.state.creditAmount)
            // calculates the new accountBalance

        }) //keeps the old information but also add new information 
    }

    mockLogIn = (logInInfo) => {
        const newUser = { ...this.state.currentUser }
        newUser.userName = logInInfo.userName
        this.setState({ currentUser: newUser })
    }
    
    
    handleDescriptionChange = (e) => {
        //for debit
        //setting the state
        // updating the value of debitDescripion
        this.setState({
            debitDescription: e.target.value //e is the change event, target is which element is being changed, the value is the text from the element that is being changed
        })
    }

    handleAmountChange = (e) => {
        //for debit
        //setting the state
        // updating the value of debitAmount
        this.setState({
            debitAmount: e.target.value //e is the change event, target is which element is being changed, the value is the text from the element that is being changed
        })
    }

    handleDescriptionChange_C = (e) => {
        //for credit
        //setting the state
        // updating the value of creditDescripion
        this.setState({
            creditDescription: e.target.value //e is the change event, target is which element is being changed, the text from the element that is being changed
        })
    }

    handleAmountChange_C = (e) => {
        //for credit
        //setting the state
        // updating the value of creditAmount
        this.setState({
            creditAmount: e.target.value //e is the change event, target is which element is being changed, the value is the text from the element that is being changed
        })
    }

    render() {
        // destructuring it
        const { debits } = this.state;
        const { credits } = this.state;
        const { debitDescription } = this.state;
        const { debitAmount } = this.state;
        const { creditDescription } = this.state;
        const { creditAmount } = this.state;
        
        //functions that returns components with props passed to it
        //passing the props from the parents to the child
        const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} accountBalance={this.state.accountBalance} />)
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
        const UserProfileComponent = () => (
            <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} accountBalance={this.state.accountBalance} />
        );
        const DebitComponent = () => (<Debits addDebit={this.addDebit} debits={debits} debitDescription={debitDescription} debitAmount={debitAmount} handleAmountChange={this.handleAmountChange} handleDescriptionChange={this.handleDescriptionChange} accountBalance={this.state.accountBalance} />)
        const CreditComponent = () => (<Credits addCredit={this.addCredit} credits={credits} creditDescription={creditDescription} creditAmount={creditAmount} handleAmountChange_C={this.handleAmountChange_C} handleDescriptionChange_C={this.handleDescriptionChange_C} accountBalance={this.state.accountBalance}/>)
        
        //In render there are functions that returns components with props passed to it
        //path for each component/page
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