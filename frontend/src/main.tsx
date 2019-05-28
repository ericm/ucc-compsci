import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { createStoreWithFirebase } from 'app/store';
import { Router } from 'react-router';
import { App } from './app';
import { Header } from 'app/components';
import { rootReducer } from 'app/reducers';
import { firebaseConfig } from 'environment/firebase';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

firebase.initializeApp(firebaseConfig);

// prepare store
const history = createBrowserHistory();
const store = createStoreWithFirebase(rootReducer, {});

ReactDOM.render(
    <Provider store={store}>
        <Header />
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
