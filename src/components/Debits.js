import Navbar from './Navbar'
import AccountBalance from './AccountBalance';

//formats the debit data in a list. The way we want it to be viewed.
const Debits = (props) => {
    let debitsView = () => {
        const { debits } = props;
        return debits.map((debit) => {
            let date = debit.date.slice(0, 10);
            return <li key={debit.id}> {debit.amount} {debit.description} {date}</li>
        })
    }


    return (
        <div className="container">
            <h1>Debits</h1>
            <ul>
                {/* displays all the debit data */}
                {debitsView()}
            </ul>
           
            {/* Form. text box for password and username. The third imput is for the submit button */}
            {/*passing props to the debit component in value */}
            {/* the value would be whatever is typed into the text field */}
            {/* onChange would call a function that would be updating whatever the user is typing in the text field */}
            
            <form onSubmit={props.addDebit}>  {/* when the form is submitted, it calls the addDebit function */}
                <label> Description: <input type="text" value={props.debitDescription} onChange={props.handleDescriptionChange} /> </label>
                <label> Amount:   <input type="text" value={props.debitAmount} onChange={props.handleAmountChange} /> </label>
                <input type="submit" value="Add Debit" />
            </form>
             {/* calling the navbar component and account balance componet with its props */}
            <Navbar />
            <AccountBalance accountBalance={props.accountBalance} />

        </div>
    )

}

export default Debits;

