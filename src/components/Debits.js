const Debits = (props) => {
    let debitsView = () => {
        const { debits } = props;
        return debits.map((debit) => {
            let date = debit.date.slice(0, 10);
            return <li key={debit.id}>{debit.amount}{debit.description}{date}</li>
        })
    }

    return (
        <div>
            <h1>Debits</h1>
            <ul>
                {debitsView()}
            </ul>

            <form>
                <input type="text" />
                <input type="text" />
                <input type="submit" value="Add Debit" />
            </form>

            <Navbar />
        </div>
    )

}

export default Debits;

