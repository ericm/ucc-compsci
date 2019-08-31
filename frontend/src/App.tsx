import * as React from 'react'
import AppMenu from './components/AppMenu/AppMenu'

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

const Home = () => <div>Home Page</div>

const Menu = withRouter(AppMenu)

export default () => {
  return (
    <Router>
      <Menu />
      <Route path="/" component={Home} />
    </Router>
  )
}
