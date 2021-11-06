import Navbar from './Navbar'
import AccountBalance from './AccountBalance';

const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((debit) => {
            let date = debit.date.slice(0, 10);
            return <li key={debit.id}>{debit.amount}{debit.description}{date}</li>
        })
    }

    return (
        <div>
            <h1>Credits</h1>
            <ul>
                {creditsView()}
            </ul>
            <form onSubmit={props.addCredit}>
                <label> Description: <input type="text" value={props.creditDescription} onChange={props.handleDescriptionChange_C} /> </label>
                <label> Amount:   <input type="text" value={props.creditAmount} onChange={props.handleAmountChange_C} /> </label>
                <input type="submit" value="Add Credit" />
            </form>

            <Navbar />
            {/* <AccountBalance accountBalance={this.props.accountBalance} /> */}
        </div>
    )

}

export default Credits;

