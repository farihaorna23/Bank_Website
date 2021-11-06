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
            {creditsView()}
        </div>
    )

}

export default Credits;

