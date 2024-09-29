import React from 'react'
import "./FloorDisplay.css"

const FloorDisplay = ({floor}) => {
  return (
    <div id="floor-display">
      <h1>Floor: {floor}</h1>
    </div>
  )
}

export default FloorDisplay
