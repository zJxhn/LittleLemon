import React from "react";
import '../App.css'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Specials from "../components/Specials";

function Home() {
    return (
      <div className="contenedor-principal">
        <div className="header-fix">
          <Header />
          <Nav />
        </div>
          <Main />
          <Specials/>
      </div>
    );
  }

export default Home;