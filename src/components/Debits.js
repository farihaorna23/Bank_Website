const Debits = (props) => {
    let debitsView = () => {
        const { debits } = props;
        return debits.map((debit) => {
            let date = debit.date.slice(0, 10);
            return <li key={debit.id}>{debit.amount}{debit.description}{date}</li>
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();//prevents the page from refreshing
        props.addDebit(e,{amount:props.debitAmount, description:props.debitDescription})
    }

    return (
        <div>
            <h1>Debits</h1>
            <ul>
                {debitsView()}
            </ul>

            <form>
                <input type="text" value={props.debitDescription} />
                <input type="text" value={props.debitAmount} />
                <input type="submit" value="Add Debit" />
            </form>

            <Navbar />
        </div>
    )

}

export default Debits;

