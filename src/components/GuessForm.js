import React from 'react';

import './GuessForm.css';

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: null
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = this.numInput.value;
    const guess = parseInt(input, 10);
    this.props.handleGuess(guess)
    this.numInput.value = '';
  }

  render() {
    return (
      <form className="guess-form" onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="number"
          placeholder="Enter your Guess"
          ref={input => this.numInput = input}
        />
        <button type="submit">Guess</button>
      </form>
    );
  }
}
