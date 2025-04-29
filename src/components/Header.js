import React from "react";
import logo from '../logo.svg'

function Header(){
    return (
        <header className="cabecera">
            <img src={logo} className="logo" alt="logo" ></img>
        </header>
    );
}

export default Header;