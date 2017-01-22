import React, { Component, PropTypes } from 'react';

import CircularPanelComponent from './circular-panel-component';
import CircularScoreIndicatorComponent from './circular-score-indicator-component';

export default class ScoreIndicatorComponent extends Component {
  render () {
    return (
      <div className='score-indicator-component'>
        <CircularPanelComponent>
          <CircularScoreIndicatorComponent score={this.props.score} />
        </CircularPanelComponent>
      </div>
    )
  }
}

ScoreIndicatorComponent.PropTypes = {
  score: PropTypes.number.isRequired
};
