import {
    Link
} from "react-router-dom";
import './Nav.css';

function Nav() {

    return (
        <nav id="Nav">
            <Link to="/add" className="links">Add Task</Link>
            <Link to="/list" className="links">Tasks List</Link>
        </nav>
    );
}

export default Nav;