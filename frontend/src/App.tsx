import * as React from 'react'
import AppMenu from './components/AppMenu/AppMenu'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const Home = () => <div>Home Page</div>

export default () => {
  return (
    <Router>
      <AppMenu />
      <Route path="/" component={Home} />
    </Router>
  )
}
