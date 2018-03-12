import React from 'react';

import './Header.css';

export default function Header(props) {
  return (
    <div className="header">
      <a href="#" className="top-link info" onClick={() => props.handleInfoClick()}>What?</a>
      <a href="#" className="top-link new" onClick={() => props.handleNewClick()}>New Game</a>
    </div>
  )
}
