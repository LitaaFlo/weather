import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SaveLocal from './actions/AddCity'
import NotFound from './404';
import configureStore from './store/devTools'
import { Provider } from 'react-redux'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

import './index.css';

const store = configureStore()
store.subscribe(() => store.dispatch(SaveLocal(store.getState())))
ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/test" component={NotFound} />
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));

// serviceWorker.unregister();
