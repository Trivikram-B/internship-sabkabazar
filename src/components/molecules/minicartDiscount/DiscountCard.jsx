import React from 'react';
import './discountCard.scss'

const DiscountCard = () => {
    return (
        <>
            <div className='cardDiscount'>
                <img alt="apple" src={require("../../../static/images/lowest-price.png")} className='cardImage' ></img>
                <p className='cardText'>You won't find it cheaper anywhere</p>
            </div>
        </>
    )
};

export default DiscountCard;