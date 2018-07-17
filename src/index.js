import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import task from './reducers';
import App from './components/App';

const store = createStore(
    task, // reducers
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
