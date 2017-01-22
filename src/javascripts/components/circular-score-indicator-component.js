import React, { Component, PropTypes } from 'react';

import { Circle } from 'react-progressbar.js';

import getScoreColourLevel from '../utils/get-score-colour-level';

import '../../stylesheets/components/circular-score-indicator-component';

export default class CircularScoreIndicatorComponent extends Component {

  // Class names here would ideally follow BEM (e.g. circular-score-indicator-component__text)
  // but unfortunately the react-progressbar.js lib creates a div with a progressbar-text class
  getInnerScoreIndicatorText () {
    return `<p>
      <span class="progressbar-text__title">
        Your credit score is
      </span>
      <span class="progressbar-text__score">
        ${this.props.score}
      </span>
      <span class="progressbar-text__out-of-text">
        out of 700
      </span>
    </p>`;
  }

  render () {
    const score = this.props.score;
    const calculatedPercentage = score / 700;
    const scoreLevelColour = getScoreColourLevel(score);

    const options = {
      easing: 'bounce',
      duration: 2000,
      color: scoreLevelColour,
      from: { color: '#fff' },
      to: { color: scoreLevelColour },
      step: function(state, circle, attachment) {
         circle.path.setAttribute('stroke', state.color);
      },
      strokeWidth: 2
    };

    return (
        <Circle
            progress={calculatedPercentage}
            text={this.getInnerScoreIndicatorText()}
            options={options}
            initialAnimate={true}
            containerClassName={'circular-score-indicator-component'} />
    );
  }
}

CircularScoreIndicatorComponent.PropTypes = {
  score: PropTypes.number.isRequired
};
