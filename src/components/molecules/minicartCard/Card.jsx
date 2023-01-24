import React from 'react';
import './card.scss'
import Round from '../../atoms/Buttons/Round/Round'

const Card = () => {
    return(
        <>
        <div className='cardBody'>
        <img alt="apple" src={require("../../../static/images/products/fruit-n-veg/apple.jpg")} className='cardImage' ></img>
        <h2 className='cardTitle'>Apple-Washington,Regular,4 pcs</h2>
        <div className='cardCounter'>
        <Round>-</Round>
        <p className='counterText'>1</p>
        <Round>+</Round>
        <p className='counterMultiply'>X</p>
        <p className='counterText'>187</p>
        </div>
        <p className='itemTotalprice'>Rs. 187</p>
        </div>
        </>
    )
};

export default Card;
