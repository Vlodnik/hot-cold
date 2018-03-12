import React from 'react';

import './GameBox.css';
import ReactionBanner from './ReactionBanner';
import GuessForm from './GuessForm';
import GuessCount from './GuessCount';
import Header from './Header';

export default class GameBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideGame: false,
      hideInfo: true,
      secretNumber: Math.floor(Math.random() * 100) + 1,
      reactionText: 'Make your guess!',
      guessCount: 0,
      guessHistory: []
    };
  }

  handleInfo() {
    if(this.state.hideInfo) {
      this.setState({
        hideGame: true,
        hideInfo: false
      });
    } else {
      this.setState({
        hideGame: false,
        hideInfo: true
      });
    }
  }

  handleNew() {
    this.setState({
      secretNumber: Math.floor(Math.random() * 100) + 1,
      reactionText: 'Make your guess!',
      guessCount: 0,
      guessHistory: []
    });
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
    const history = this.state.guessHistory;
    const historyElements = history.map((guess, index) =>
      <span key={index} className="past-guess">{guess}</span>
    );
    return (
      <div className="big-box">
        <div className="info-box" hidden={this.state.hideInfo}>
          <div className="content-box">
            <h2>
              What do I do?
            </h2>
            <h3>
              This is a Hot or Cold Number Guessing Game. The game
              goes like this:
            </h3>
            <ol>
              <li>
                I pick a random secret number between 1 and 100
                and keep it hidden.
              </li>
              <li>
                You need to guess until you can find the
                hidden secret number.
              </li>
              <li>
                You will get feedback on how close ("hot") or
                far ("cold") your guess is.
              </li>
            </ol>
            <h3>So. Are you ready?</h3>
            <button type="submit" onClick={(e) => this.handleInfo()}>Got It!</button>
          </div>
        </div>
        <div hidden={this.state.hideGame}>
          <Header
            handleInfoClick={() => this.handleInfo()}
            handleNewClick={() => this.handleNew()}
          />
          <h1>HOT or COLD</h1>
          <div className="game-box">
            <ReactionBanner text={this.state.reactionText} />
            <GuessForm handleGuess={(guess) => this.checkGuess(guess)} />
            <GuessCount count={this.state.guessCount} />
            <div className="guess-history">
              {historyElements}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
