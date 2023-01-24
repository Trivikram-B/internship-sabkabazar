import React from 'react';
import '../Round/roundButton.scss'

const Round = ({children,method}) => {
    return (
        <button className='roundButton' onClick={method}>{children}</button>
    )
};

export default Round;