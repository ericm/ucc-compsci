import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Notes } from 'app/containers';
import { Header } from 'app/components';
import { hot } from 'react-hot-loader';
import Firebase from 'app/firebase'

// Prepare history
let firebase = new Firebase();

export const App = hot(module)(() => (
    <Router>
        <Header firebase={firebase} />
        <div style={{paddingTop: 60}}>
            <Route exact path="/" component={Home} />
            <Route path="/notes" component={Notes} />
        </div>
    </Router>
));
