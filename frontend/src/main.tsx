import { Header } from 'app/components';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { App } from './app';
import Firebase from 'app/firebase'

// prepare history
const history = createBrowserHistory();

let firebase = new Firebase();

ReactDOM.render(
    <div>
        <Header firebase={firebase} />
        <Router history={history}>
            <App />
        </Router>
    </div>,
    document.getElementById('root')
);
