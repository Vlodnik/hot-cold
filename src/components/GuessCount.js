import React from 'react';

import './GuessCount.css';

export default function GuessCount(props) {
  return (
    <h2 className="guess-count">
      Guess #
      <span>{props.count}</span>
      !
    </h2>
  );
}
