import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className='navegacion'>
            <ul>
                <li className="lista"><Link to="/" className="enlace"><b>Home</b></Link></li>
                <li className="lista"><Link to="/about" className="enlace"><b>About</b></Link></li>
                <li className="lista"><Link to="/menu" className="enlace"><b>Menu</b></Link></li>
                <li className="lista"><Link to="/reservations" className="enlace"><b>Reservations</b></Link></li>
                <li className="lista"><Link to="/order" className="enlace"><b>Order Online</b></Link></li>
                <li className="lista"><Link to="/login" className="enlace"><b>Login</b></Link></li>
            </ul>
        </nav>
    );
}
export default Nav;
