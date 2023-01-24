import React from 'react'
import './RectangleButton.scss'

function RectangleButton({ children, functionParam }) {

  return (
    <div >
      <button className="buttonRectangle" onClick={functionParam}>{children}</button>
    </div>
  )
}

export default RectangleButton