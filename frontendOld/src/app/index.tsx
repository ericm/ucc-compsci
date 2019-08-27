import * as React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Home, Notes } from 'app/containers'
import { Header } from 'app/components'
import { hot } from 'react-hot-loader'

export const App = hot(module)(() => {
  // Firebase hook

  return (
    <Router>
      <Header />
      <div style={{ paddingTop: 60 }}>
        <Route exact path="/" component={Home} />
        <Route path="/notes" component={Notes} />
      </div>
    </Router>
  )
})
