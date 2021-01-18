import React from 'react';
import Partners from '../../components/Partners';
import conStyle from "./styles/Content.module.css";


const Content = () => {
    return(
        <div className={conStyle.cards}>
        <div className={conStyle.options}>
            <div className={conStyle.optionOne}>
                <h4>Nairabox Events</h4>
                <p>Bring you closer to unforgettable experiences.</p>
            </div>
            <div className={conStyle.optionTwo}>
                <h4>nairabox Food</h4>
                <p>all the food you need in one place</p>
            </div>
            <div className={conStyle.optionThree}>
                <h4>nairabox Movies</h4>
                <p>everything Movies.</p>
            </div>
            
        </div>
        <div className={conStyle.option}>
        <div className={conStyle.optionFour}>
                <h4>nairabox Airtime</h4>
                <p>Airtime top up just got easier</p>
            </div>
            <div className={conStyle.optionFive}>
                <h4>nairabox Bill Payments</h4>
                <p>Pay your Bills whenever, wherever..</p>
            </div>
            <div className={conStyle.optionSix}>
                <h4>nairabox tv</h4>
                <p>watch top rated content on our youtube channel</p>
            </div>
            
        </div>
        <Partners />
        </div>
    )
}

export default Content;