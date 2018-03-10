import React from 'react';

import './Game.css';
import Header from './Header';
import GameBox from './GameBox';
// import Info from './Info';

const Info = function() {
  return <div></div>
}

const InfoScreen = function() {
  return <div></div>
}

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'game'
    };
  }

  handleInfo(event) {
    // event.preventDefault();
    // console.log(event);
    console.log('handleInfo ran');
    if(this.state.screen === 'game') {
      this.setState({
        screen: 'info'
      });
    } else {
      this.setState({
        screen: 'game'
      });
    }
  }

  render() {
    if(this.state.screen === 'game') {
      return (
        <div className="big-box">
          <Header handleClick={() => this.handleInfo() } />
          <h1>HOT or COLD</h1>
          <GameBox />
        </div>
      );
    } else if(this.state.screen === 'info') {
      return (
        <div className="info-box">
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
      );
    }
  }
}
