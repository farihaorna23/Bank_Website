import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className="links">
            <Link to="/login">Login</Link>
            <Link to="/userProfile">UserName</Link>
            <Link to="/debits">Debit</Link>
            <Link to="/credits">Credit</Link>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Navbar;