import React from 'react';
import Line from './Line';
import './Card.css';

const Card = ({ lines }) => {
  const displayLines = lines.map((line, index) => {
    return <Line
      key={index+100}
      line={line}
    />
  })
  return(
    <div className='card'> {displayLines} </div>
  )
}

export default Card;
