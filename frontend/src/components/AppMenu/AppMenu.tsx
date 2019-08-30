import * as React from 'react'
import { Link, RouteProps } from 'react-router-dom'
import * as css from './AppMenu.css'

interface Props {
  route: RouteProps
}
export default (props: Props) => {
  return (
    <header className={css.main}>
      <h1>CK401</h1>
      <nav>
        <ul>
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={'/notes'}>
            <li>Notes</li>
          </Link>
        </ul>
      </nav>
      <svg className={css.back} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
        <polygon style={{ fill: '#5581f6' }} points="0 0 0 10 100 10 75 0" />
      </svg>
      <svg className={css.border} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
        <polygon style={{ fill: '#5581f6' }} points="100 0 0 10 0 0" />
      </svg>
    </header>
  )
}
