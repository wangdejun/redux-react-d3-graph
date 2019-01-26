import React from 'react';
import { render } from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import GraphFlowContainer from './Container/GraphFlowContainer';
import store from "./Store/store";

render(
    <Provider store={store}>
        <GraphFlowContainer/>
    </Provider>,
    document.getElementById('root')
);
