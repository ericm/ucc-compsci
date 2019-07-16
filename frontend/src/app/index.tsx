import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Notes } from 'app/containers';
import { Header } from 'app/components';
import { hot } from 'react-hot-loader';
import Firebase from 'app/firebase';

export const App = hot(module)(() => {
  // Firebase hook
  const [firebase, setFirebase] = React.useState(new Firebase());

  return (
    <Router>
      <Header firebase={firebase} setFirebase={setFirebase} />
      <div style={{ paddingTop: 60 }}>
        <Route exact path="/" component={Home} />
        <Route path="/notes" component={Notes} />
      </div>
    </Router>
  );
});
