import * as React from 'react';
import { Link } from 'react-router-dom';
import Firebase from 'app/firebase';
const style = require('./style.css');

interface Props {
  firebase: Firebase;
  setFirebase: React.Dispatch<React.SetStateAction<Firebase>>;
}
export default (props: Props) => {
  async function login() {
    let firebase = props.firebase;
    await firebase.login('test@test.com', 'test123');
    props.setFirebase(firebase)
    
  }
  login();

  React.useEffect(() => {
    console.log(props.firebase.loggedIn());
  })
  
  return (
    <header className={style.root}>
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
      <svg
        className={style.back}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <polygon style={{ fill: '#5581f6' }} points="0 0 0 10 100 10 75 0" />
      </svg>
      <svg
        className={style.border}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <polygon style={{ fill: '#5581f6' }} points="100 0 0 10 0 0" />
      </svg>
    </header>
  );
};
