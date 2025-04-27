import React from "react";
import '../App.css'
import imgMenu from '../imgmenu.jpg'
import { useNavigate } from 'react-router-dom';


function Main(){

    const navigate = useNavigate();

    const ButtonReservations = () => {
    
    navigate('/reservations'); 
    window.scrollTo(0, 0);
    };

    return(
            <main className="menu">
                <div className="box-menu">
                </div>
                <div className="texto1">
                    Little Lemon
                </div>
                <div className="texto2">
                     Chicago
                </div>
                <div className="texto3">
                     We are a family owned
                    Mediterranean restaurant,
                    focused on tradicional
                    recipes served with a modern
                    twist.
                </div>
                <div className="btn-reserve">
                    <button 
                    className='box-btn-reserve'
                    onClick={ButtonReservations}
                    >
                        XD a table</button>
                </div>
                <div className="imgMenu">
                    <img src={imgMenu} alt="food" className="img-box"></img>
                </div>
            </main>
    );
}
export default Main;