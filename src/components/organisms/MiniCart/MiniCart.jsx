import React from 'react';
import { useState } from "react";
import cart from '../../../static/images/cart.svg'
import '../MiniCart/miniCart.scss'
import CartHeader from '../../molecules/MinicartHeader/CartHeader';
import Card from '../../molecules/MinicartCard/Card';
import DiscountCard from '../../molecules/MinicartDiscount/DiscountCard';
import CartFooter from '../../molecules/MinicartFooter/CartFooter';

const MiniCart = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false)

    return (
        <>
            <div className="cartDiv">
                <div>
                    <img src={cart} alt="cart logo" className="cartImage"
                        onClick={(evt) => { evt.preventDefault(); setIsPopupOpen(true) }}>
                    </img>
                </div>
                <div className="itemCount">
                    1 Items
                </div>
            </div>

            {isPopupOpen && <div className='cartLayout'>
                <div className='cartBox'>
                    <CartHeader onClick={() => setIsPopupOpen(false)} />
                    <div className='cartSection'>
                        <Card />
                        <DiscountCard />
                        <CartFooter onClick={() => setIsPopupOpen(false)} />
                    </div>
                </div>
            </div>}
        </>
    )
};

export default MiniCart;
