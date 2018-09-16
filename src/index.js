import React, { Component } from 'react';
import Draw from './Draw';

class GraphFlow extends Component {
  constructor(props) {
    super(props);
    this.draw = new Draw();
  }

  componentDidMount(){
    let draw = this.draw;
    draw.init();
  }

  render() {
    return (
      <div>
        <svg id="board" width={2000} height={2000}>
          <g>
            <defs>
              <marker id="arrow" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" viewBox="0 0 12 12" refX="6" refY="6" orient="auto">
                <path d="M0,3 L6,6 L0,9 L3,6 L0,3" fill="#000"></path>
              </marker>
            </defs>
          </g>
          <g id="main" className="container" />
        </svg>
      </div>
    );
  }
}

export default GraphFlow;
