import Navbar from './Navbar'
import AccountBalance from './AccountBalance';

//formats the credit data in a list. The way we want it to be viewed.
const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0, 10);
            return <li key={credit.id}> {credit.amount} {credit.description} {date}</li>
        })
    }

    return (
        <div className="container">
            <h1>Credits</h1>
            <ul>
                {/* displays all the credit data */}
                {creditsView()}
            </ul>
            
            {/* Form. text box for password and username. The third imput is for the submit button */}
            {/*passing props to the debit component in value */}
            {/* the value would be whatever is typed into the text field */}
            {/* onChange would call a function that would be updating whatever the user is typing in the text field */}

            <form onSubmit={props.addCredit}>  {/* when the form is submitted, it calls the addCredit function */}
                <label> Description: <input type="text" value={props.creditDescription} onChange={props.handleDescriptionChange_C} /> </label>
                <label> Amount:   <input type="text" value={props.creditAmount} onChange={props.handleAmountChange_C} /> </label>
                <input type="submit" value="Add Credit" />
            </form>
             {/* calling the navbar component and account balance componet with its props */}
            <Navbar />
            <AccountBalance accountBalance={props.accountBalance} />

        </div>
    )

}

export default Credits;

