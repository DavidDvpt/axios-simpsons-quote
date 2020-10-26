import { Component } from "react";
import './quoteCard.css'

function QuoteCard({ quote }) {
  return (
    <div className="quoteContainer">
      <img className="quoteImage" src={quote.image} alt={quote.character} />
      <div className="quoteText">
        <h2>{quote.character}</h2>
        <p>{quote.quote}</p>
      </div>
    </div>
  );
}

export default QuoteCard;
