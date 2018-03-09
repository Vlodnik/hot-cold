import React from 'react';

import './GuessForm.css';

export default function GuessForm() {
  return (
    <form className="guess-form">
      <input type="text" placeholder="Enter your Guess" />
      <button type="submit">Guess</button>
    </form>
  );
}
