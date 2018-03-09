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
    this.setState({
      screen: 'info'
    });
  }

  render() {
    let Screen;

    this.state.screen === 'game' ?
      Screen = GameBox :
      Screen = Info;

    if(this.state.screen === 'game') {
      return (
        <div className="big-box">
          <Header handleClick={() => this.handleInfo() } />
          <h1>HOT or COLD</h1>
          <Screen />
        </div>
      );
    } else if(this.state.screen === 'info') {
      return (
        <div className="info-box">
          Here is the new box!
        </div>
      );
    }
  }
}
