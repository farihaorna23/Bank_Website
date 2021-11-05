import Navbar from './Navbar'

const Debits = (props) => {
    let debitsView = () => {
        const { debits } = props;
        return debits.map((debit) => {
            let date = debit.date.slice(0, 10);
            return <li key={debit.id}> {debit.amount} {debit.description} {date}</li>
        })
    }


    return (
        <div>
            <h1>Debits</h1>
            <ul>
                {debitsView()}
            </ul>
            {/* when the form is submitted, it calls the addDebit function */}
            <form onSubmit={props.addDebit}>
                <input type="text" value={props.debitDescription} onChange={props.handleDescriptionChange} />
                <input type="text" value={props.debitAmount} onChange={props.handleAmountChange} />
                <input type="submit" value="Add Debit" />
            </form>

            <Navbar />
        </div>
    )

}

export default Debits;

