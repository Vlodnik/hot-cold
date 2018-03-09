import React from 'react';

import './Header.css';

// import InfoButton from './InfoButton';
// import NewGameButton from './NewGameButton';

const InfoButton = function() {
  return <a href="#" className="top-link info">What?</a>
}

const NewGameButton = function() {
  return <a href="#" className="top-link new">New Game</a>
}

export default function Header() {
  return (
    <div className="header">
      <InfoButton />
      <NewGameButton />
    </div>
  )
}
