import React from 'react';
import footStyle from "./styles/Footer.module.css"


const Footer = () => {
    return(
        <div className={footStyle.body}>
            <div className={footStyle.text}>
            <h2>Questions or enguiries?</h2>
            <h3>send us a message</h3>
            </div>
            <p className={footStyle.contact}>you can also call us on +234 90 800 00381</p>
            <hr className={footStyle.line}/>
            <div className={footStyle.lastText}>
            <h5>2021 Nairabox.com. All right reserved</h5>
            <p>Terms & Condition|Merchants|Policy|Press Release</p>
            </div>
        </div>
    )
}
export default Footer;