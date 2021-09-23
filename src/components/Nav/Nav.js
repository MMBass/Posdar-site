import {
    Link
} from "react-router-dom";
import './Nav.css';

function Nav() {

    return (
        <nav id="Nav">
            <Link to="/posdar-site" className="links">Add Task</Link>
            <Link to="/posdar-site/list" className="links">Tasks List</Link>
        </nav>
    );
}

export default Nav;