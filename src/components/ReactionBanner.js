import React from 'react';

import './ReactionBanner.css';

export default function ReactionBanner(props) {
  return (
    <div className="reaction-banner">
      {props.text}
    </div>
  )
}
