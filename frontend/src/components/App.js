import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './todos/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';

function App() {
    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'));