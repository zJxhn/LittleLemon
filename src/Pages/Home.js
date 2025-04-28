import React from "react";
import '../App.css'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Specials from "../components/Specials";

function Home() {
    return (
      <div className="contenedor-principal">
        <header className="cabecera">
          <Header />
        </header>
        <nav className='navegacion'>
          <Nav />
        </nav>
          <Main />
          <Specials/>
      </div>
    );
  }

export default Home;