import React, { Component } from 'react';

import '../../stylesheets/components/circular-panel-component';

export default class CircularPanelComponent extends Component {
  render () {
    return (
      <div className='circular-panel-component'>
        { this.props.children }
      </div>
    )
  }
}
