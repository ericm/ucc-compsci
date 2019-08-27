import * as React from 'react'
import AppMenu from './components/AppMenu/AppMenu'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const Home = () => (
  <div>
    <AppMenu />
    Home Page
  </div>
)

export default () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  )
}
