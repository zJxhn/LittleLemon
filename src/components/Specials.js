import React from "react";
import '../App.css'
import greeksalad from '../greeksalad.jpg'
import bruchetta from '../bruchetta.svg'
import lemonDessert from '../lemondessert.jpg'

function Specials(){
    return(
        <article className="special">
            <div className="text4">
                This weeks specials!
            </div>
            <div className="img1-especial">
                <img src={greeksalad} alt="greekSalad" className="img-greeksalad"></img>
            </div>
            <div className="boxgray1-especial">
                <div className="text1-box1-especial">Greek Salad</div>
                <div className="text2-box1-especial">Order Delivery</div>
                <div className="text3-box1-especial">$12.99</div>
            </div>
            <div className="img2-especial">
                <img src={bruchetta} alt="bruchetta" className="img-bruchetta"></img>
            </div>
            <div className="boxgray2-especial">
                <div className="text1-box2-especial">Bruchetta</div>
                <div className="text2-box2-especial">Order Delivery</div>
                <div className="text3-box2-especial">$12.99</div>
            </div>
            <div className="img3-especial">
                <img src={lemonDessert} alt="lemonDessert" className="img-lemonDessert"></img>
            </div>
            <div className="boxgray3-especial">
                <div className="text1-box3-especial">Lemon Dessert</div>
                <div className="text2-box3-especial">Order Delivery</div>
                <div className="text3-box3-especial">$12.99</div>
            </div>
        </article>
    );
}


export default Specials;