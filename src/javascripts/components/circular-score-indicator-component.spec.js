import React from 'react';
import { shallow } from 'enzyme';

import CircularScoreIndicatorComponent from './circular-score-indicator-component';
import scoreColourLevelConstants from '../constants/score-colour-levels';

describe('CircularScoreIndicatorComponent', () => {
  let renderedComponent;

  const props = {
    score: '560'
  };

  beforeEach(() => {
    renderedComponent = shallow(<CircularScoreIndicatorComponent { ...props } />);
  });

  it('should pass the calculatedPercentage to the Circle component as the "progress" prop', () => {
    // 560/700 = 0.8
    expect(renderedComponent.props().progress).to.equal(0.8);
  });

  it('should pass the correct "color" and "to" options to the Circle component', () => {
    const expectedOptions = {
      color: scoreColourLevelConstants.GREAT,
      to: { color: scoreColourLevelConstants.GREAT }
    };

    const options = renderedComponent.props().options;

    expect(options.to).to.deep.equal(expectedOptions.to);
    expect(options.color).to.equal(expectedOptions.color);
  });

  it('should pass JSX to the Circle component to render the inner score text', () => {
    expect(renderedComponent.props().text).to.equal(`<p>
      <span class="progressbar-text__title">
        Your credit score is
      </span>
      <span class="progressbar-text__score">
        560
      </span>
      <span class="progressbar-text__out-of-text">
        out of 700
      </span>
    </p>`);
  });
});
