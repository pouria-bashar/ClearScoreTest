import React, { Component } from 'react';

import ScoreIndicatorComponent from '../components/score-indicator-component';

import { getScoreForUser } from '../services/credit-score-service';

import '../../stylesheets/containers/score-indicator-container';

export default class ScoreIndicatorContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0
    };
  }

  componentWillMount() {
    getScoreForUser().then((score) => {
      this.setState({ score });
    });
  }

  render () {
    return (
      <div className='score-indicator-container'>
        <ScoreIndicatorComponent score={ this.state.score } />
      </div>
    )
  }
}
