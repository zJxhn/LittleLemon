import React from "react";
import '../App.css'
import Header from '../components/Header';
import Nav from '../components/Nav';

function Menu(){
    return(
        <div className="contenedor-principal">
            <header className="cabecera">
                <Header />
            </header>
            <nav className='navegacion'>
                <Nav />
            </nav>
        </div>
    )
}

export default Menu;