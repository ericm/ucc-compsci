import * as firebase from 'firebase/app'
import Account from '~queries/Account'
import { firebaseConfig } from '../env/firebase'

let app = firebase.initializeApp(firebaseConfig)

export default app
export { Account }
