import React from 'react';
import patStyle from "./styles/Partners.module.css";

const Partners = () => {
    return (
        <div className={patStyle.info}>
            <h1>Some of the patners we have <br/> worked with</h1>
            <div className={patStyle.logos}>
                <img src="./static/img/alat.png" alt="alat logo" />
                <img src="./static/img/firstbank.png" alt="firstbank logo"/>
                <img src="./static/img/unity.png" alt="unity logo" />
                <img src="./static/img/visalogo.png" alt="visa logo" />
                <img src="./static/img/jumiaone.png" alt="jumia logo" />
            </div>
            <div className={patStyle.logoTwo}>
            <img src="./static/img/access.png" alt="access logo" />
                <img src="./static/img/9pay.png" alt="9pay logo"/>
                <img src="./static/img/fcmb.png" alt="fcmb logo" />
                <img src="./static/img/uber.png" alt="uber logo" />
                <img src="./static/img/UBA.png" alt="uba logo" />
                <img src="./static/img/expresspay.png" alt="expresspay logo" />
            </div>

        </div>

    )
}

export default Partners;