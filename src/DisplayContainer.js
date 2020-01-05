import React from 'react';
import Card from './Card';
import './DisplayContainer.css'

const DisplayContainer = ({ quotes, searchMatches }) => {
  console.log('quotes being passed', quotes);
  let displayQuotes = () => {
    if (searchMatches.length <=0 ) {
      return quotes
    } else {
      return searchMatches
    }
  };
  const quoteCards = displayQuotes.map((quote, index) => {
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


export const mapStateToProps = state => ({
  quotes: state.quotes,
  searchMatches: state.searchMatches
})

export default DisplayContainer;
