import React from 'react';

import './GameBox.css';
import ReactionBanner from './ReactionBanner';
import GuessForm from './GuessForm';
import GuessCount from './GuessCount';
import GuessHistory from './GuessHistory';

export default class GameBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretNumber: Math.floor(Math.random() * 100) + 1,
      reactionText: 'Make your guess!',
      guessCount: 0,
      lastGuess: null,
      guessHistory: []
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="game-box">
        <ReactionBanner text={this.state.reactionText} />
        <GuessForm />
        <GuessCount />
        <GuessHistory />
      </div>
    );
  }
}
