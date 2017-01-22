import React from 'react';
import { shallow } from 'enzyme';

import ScoreIndicatorComponent from './score-indicator-component';
import CircularPanelComponent from './circular-panel-component';
import CircularScoreIndicatorComponent from './circular-score-indicator-component';

describe('ScoreIndicatorComponent', () => {
  it('should render a CircularScoreIndicatorComponent with the passed score prop and a CircularPanelComponent', () => {
    const renderedComponent = shallow(<ScoreIndicatorComponent score={ 300 }/>);

    const circularPanelComponent = renderedComponent.find(CircularPanelComponent);
    const circularScoreIndicatorComponent = renderedComponent.find(CircularScoreIndicatorComponent);

    expect(circularPanelComponent.length).to.equal(1);
    expect(circularScoreIndicatorComponent.length).to.equal(1);
    expect(circularScoreIndicatorComponent.props().score).to.equal(300);
  });
});
