import React from 'react';

import './GameBox.css';
import ReactionBanner from './ReactionBanner';
import GuessForm from './GuessForm';
import GuessCount from './GuessCount';

export default class GameBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretNumber: Math.floor(Math.random() * 100) + 1,
      reactionText: 'Make your guess!',
      guessCount: 0,
      guessHistory: []
    };
  }

  checkGuess(guess) {
    const secret = this.state.secretNumber;

    if(guess > 0 && guess < 101) {
      if(!this.state.guessHistory.find((num) => num === guess)) {
        if(guess === secret) {
          this.setState({
            reactionText: 'You Won! Click new game to play again.'
          });
        } else if(Math.abs(guess - secret) <= 5) {
          this.setState({
            reactionText: 'RED HOT!!!'
          });
        } else if(Math.abs(guess - secret) <= 10) {
          this.setState({
            reactionText: 'Very hot!'
          });
        } else if(Math.abs(guess-secret) <= 20) {
          this.setState({
            reactionText: 'Hot'
          });
        } else {
          this.setState({
            reactionText: 'Cold'
          });
        }
        this.setState({
          guessCount: this.state.guessCount += 1,
          guessHistory: [...this.state.guessHistory, guess]
        });
      } else {
        window.alert('You already guessed that number.');
      }
    } else {
      window.alert('Please input a number between 1 and 100.');
    }
  }

  render() {
    console.log(this.state);
    const history = this.state.guessHistory;
    const historyElements = history.map((guess, index) =>
      <span key={index} className="past-guess">{guess}</span>
    );
    return (
      <div className="game-box">
        <ReactionBanner text={this.state.reactionText} />
        <GuessForm handleGuess={(guess) => this.checkGuess(guess)} />
        <GuessCount count={this.state.guessCount} />
        <div className="guess-history">
          {historyElements}
        </div>
      </div>
    );
  }
}
