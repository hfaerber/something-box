import React from 'react';
import Card from './Card';

const DisplayContainer = ({ quotes, currentEpisode }) => {
  console.log(quotes[0]);
  const quoteCards = (quotes[0]).map((quote, index) => {
    return <Card
      key={index+10}
      text={quote}
    />
  })

  return(
    <div>
      {quoteCards}
    </div>
  )
}

export default DisplayContainer;


// got through each index of the array
// while on each index, loop over each quote and create a quote card
