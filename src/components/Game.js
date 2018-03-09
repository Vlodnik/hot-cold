import React from 'react';

import './Game.css';
import Header from './Header';
import GameBox from './GameBox';

// const GameBox = function() {
//   return <div></div>;
// }

export default function Game() {
  return (
    <div className="big-box">
      <Header />
      <h1>HOT or COLD</h1>
      <GameBox />
    </div>
  );
}
