import React from 'react';
import topStyle from "./style/Header.module.css"

const Header = () => {
    return(
        <div className={topStyle.body}>
            
            <div className={`card ${topStyle.details}`}>
            <a href="">
                <img src='./static/img/nairabox_green_black.png' alt="banner" />
            </a>
            <ul>
                <li>Featured Services</li>
                <li>Our Partners</li>
                <li>Contact Us</li>
            </ul>
            <div className={topStyle.images}>
            <img src='./static/img/google.png' alt="google logo" />
            <img src='./static/img/apple.png' alt="apple logo" />
            </div>
        </div>
        <div className={topStyle.text}>
        <h1>Your One-Step LifeStyle <br/> Website </h1>
        <p>Thinking of the ultimate way to buy cinema tickets, event tickets, orders <br/>
        food, pay bills and buy airtime? Think Nairabox</p>
        </div>
        </div>
    )
}
export default Header;