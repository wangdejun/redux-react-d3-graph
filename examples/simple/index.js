
import React, { Component } from 'react';
import GraphFlow from '../../src';

class Test extends Component {
    render() {
        return (
            <div>
                <GraphFlow/>
            </div>
        );
    }
}

ReactDOM.render(<Test>, document.getElementById('root'));
