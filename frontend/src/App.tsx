import * as React from 'react'
import AppMenu from './components/AppMenu/AppMenu'
import Globules from 'react-globules'

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

const Home = () => <div></div>

const Menu = withRouter(AppMenu)

export default () => {
  return (
    <Router>
      <Menu />
      <div style={{ paddingTop: 60 }}>
        <Route path="/" component={Home} />
      </div>
    </Router>
  )
}
