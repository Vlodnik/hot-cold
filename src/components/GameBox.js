import React from 'react';

import './GameBox.css';
import ReactionBanner from './ReactionBanner';
import GuessForm from './GuessForm';
import GuessCount from './GuessCount';
import GuessHistory from './GuessHistory';

export default function GameBox() {
  return (
    <div className="game-box">
      <ReactionBanner />
      <GuessForm />
      <GuessCount />
      <GuessHistory />
    </div>
  );
}
