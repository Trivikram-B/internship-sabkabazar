import React from 'react';
import '../Close/closeButton.scss'

const Close = ({method,buttonType}) => {
    return(
        <button className={"closeButton" } onClick={method}>X</button>
    )
};

export default Close;