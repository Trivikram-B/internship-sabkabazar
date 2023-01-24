import React from 'react';
import './cartFooter.scss'
import RectangleButton from '../../atoms/Buttons/RectangleButton/RectangleButton';


const CartFooter = ({onClick}) => {
    return (
        <>
            <div className='cartFooter'>
                <p className='footerText'>Promo code can be applied on payment page</p>
                <div className='footerButton'>
                    <RectangleButton functionParam={onClick}>
                        <span>Proceed to Checkout</span>
                        <span>Rs.187 </span>
                    </RectangleButton>
                </div>
            </div>
        </>
    )
};

export default CartFooter;