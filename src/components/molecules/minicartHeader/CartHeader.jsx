import React from 'react';
import './cartHeader.scss'
import Close from '../../atoms/Buttons/Close/Close'

const CartHeader = ({onClick}) => {
    return (
        <>
            <div className='cartHeader'>
                <h1 className='headerLabel'>My Cart (1 item)</h1>
                <Close method={onClick} />
            </div>
        </>
    )
}

export default CartHeader;