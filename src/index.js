import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameBox from './components/GameBox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GameBox />, document.getElementById('root'));
registerServiceWorker();
