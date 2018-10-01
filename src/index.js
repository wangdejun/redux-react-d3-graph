import React from 'react';
import { render } from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import initialState from './Store/initialState';
import rootReducer from './Reducer/rootReducer';
import GraphFlowContainer from './Container/GraphFlowContainer';

const store = createStore(
    rootReducer,
    initialState,
    // composeWithDevTools(applyMiddleware(logger))
);


render(
    <Provider store={store}>
        <GraphFlowContainer/>
    </Provider>,
    document.getElementById('root')
);
