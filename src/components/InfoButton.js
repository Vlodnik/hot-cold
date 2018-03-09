import React from 'react';

import './InfoButton.css';

export default function InfoButton(props) {
  return <a href="#" className="top-link info" onClick={() => props.handleClick()}>What?</a>
}
