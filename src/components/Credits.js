import Navbar from './Navbar'
import AccountBalance from './AccountBalance';

const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0, 10);
            return <li key={credit.id}> {credit.amount} {credit.description} {date}</li>
        })
    }

    return (
        <div>
            <h1>Credits</h1>
            <ul>
                {creditsView()}
            </ul>
            {/* when the form is submitted, it calls the addDebit function */}
            <form onSubmit={props.addCredit}>
                <label> Description: <input type="text" value={props.creditDescription} onChange={props.handleDescriptionChange_C} /> </label>
                <label> Amount:   <input type="text" value={props.creditAmount} onChange={props.handleAmountChange_C} /> </label>
                <input type="submit" value="Add Credit" />
            </form>

            <Navbar />
            <AccountBalance accountBalance={props.accountBalance} />
            
        </div>
    )

}

export default Credits;

