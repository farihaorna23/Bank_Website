// a repetable component that is being used in all the other component
import { Link } from 'react-router-dom';
// Navbar function returns links to all the components/pages
function Navbar() {
    return (
        <div className="links">
            <Link to="/login">Login</Link>
            <Link to="/userProfile">UserName</Link>
            <Link to="/debits">Debits</Link>
            <Link to="/credits">Credits</Link>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Navbar;