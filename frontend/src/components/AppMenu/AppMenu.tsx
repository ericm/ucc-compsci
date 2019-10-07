import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import * as css from './AppMenu.css'
import { Account } from '../../queries'

interface Props extends RouteComponentProps {
  account: Account
}
export default (props: Props) => {
  const slugs = ['/', '/notes']

  const [routes, setRoutes] = React.useState<string[]>([css.set, ''])

  React.useEffect(() => {
    let tRoutes: string[] = []
    for (let i in slugs) {
      if (slugs[i] === props.location.pathname) {
        tRoutes.push(css.set)
      } else {
        tRoutes.push('')
      }
    }
    setRoutes(tRoutes)
  }, [props.location.pathname])

  const [loggedIn, setLoggedIn] = React.useState(false)

  let account = props.account

  const logIn = (e: React.MouseEvent<HTMLButtonElement>) => {}

  const logginButton = () => {
    if (loggedIn) {
      return <button className={css.account}>{account.getUser().displayName}</button>
    } else {
      return <button className={css.login}>Log In</button>
    }
  }

  return (
    <header className={css.main}>
      <h1>CK401</h1>
      <nav>
        <ul>
          <Link to={slugs[0]} className={routes[0]}>
            <li>Home</li>
          </Link>
          <Link to={slugs[1]} className={routes[1]}>
            <li>Notes</li>
          </Link>
          {logginButton()}
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
