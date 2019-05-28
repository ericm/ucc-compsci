import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from 'app/containers/Home';
import { hot } from 'react-hot-loader';
import { Header } from './components';
import { AccountActions } from './actions';

export const App = hot(module)(() => (
    <Switch>
        <Header actions={AccountActions} />
        <Route path="/" component={Home} />
    </Switch>
));
