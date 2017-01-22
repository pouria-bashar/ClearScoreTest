import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ScoreIndicatorContainer, { __RewireAPI__ as ScoreIndicatorContainerRewireAPI } from './score-indicator-container';
import ScoreIndicatorComponent from '../components/score-indicator-component';

describe('ScoreIndicatorContainer', () => {
  let getScoreForUserStub;

  beforeEach(() => {
    getScoreForUserStub = sinon.stub().returns(Promise.resolve(434));
    ScoreIndicatorContainerRewireAPI.__Rewire__('getScoreForUser', getScoreForUserStub);
  });

  it('should call getScoreForUser and set the result on state', () => {
    shallow(<ScoreIndicatorContainer />);

    expect(getScoreForUserStub.callCount).to.equal(1);
  });

  it('should render the ScoreIndicatorComponent and pass the score from state', () => {
    const renderedContainer = shallow(<ScoreIndicatorContainer />);

    const renderedScoreIndicatorComponent = renderedContainer.find(ScoreIndicatorComponent);

    expect(renderedScoreIndicatorComponent.length).to.equal(1);
    expect(renderedScoreIndicatorComponent.props().score).to.equal(0);
  });
});
