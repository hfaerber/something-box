import React from 'react';
import Card from './Card';
import './DisplayContainer.css'

const DisplayContainer = ({ quotes, currentEpisode }) => {
  console.log('quotes being passed', quotes);
  const quoteCards = quotes.map((quote, index) => {
    return <Card
      key={index+10}
      lines={quote}
    />
  })

  return(
    <div className="DisplayContainer">
      {quoteCards}
    </div>
  )
}

export default DisplayContainer;


// got through each index of the array
// while on each index, loop over each quote and create a quote card
