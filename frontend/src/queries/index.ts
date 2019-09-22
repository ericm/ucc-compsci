import * as firebase from 'firebase/app'
import Account from '~queries/Account'

let app = firebase.initializeApp({})

export default app
export { Account }
