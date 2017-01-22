import React from 'react';
import { shallow } from 'enzyme';

import CircularPanelComponent from './circular-panel-component';

describe('CircularPanelComponent', () => {
  it('should render any child components that are passed in props', () => {
    const renderedComponentWithChildren = shallow(
      <CircularPanelComponent>
        <h1 className="circular-panel-component__title">Test</h1>
      </CircularPanelComponent>
    );

    const innerTitle = renderedComponentWithChildren.find('.circular-panel-component__title').text();

    expect(innerTitle).to.equal('Test');
  });
});
