import '../stylesheets/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';

import ScoreIndicatorContainer from './containers/score-indicator-container';

ReactDOM.render(<ScoreIndicatorContainer />, document.querySelector('#main'));
