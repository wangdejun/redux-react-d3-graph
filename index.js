import React, { Component } from 'react';
import Draw from './Draw';

class GraphFlow extends Component {
  constructor(props) {
    super(props);
    this.draw = new Draw();
  }

  render() {
    return (
      <div>
        <svg id="board" width={2000} height={2000}>
          <g id="main" className="container" />
        </svg>
      </div>
    );
  }
}

export default GraphFlow;
