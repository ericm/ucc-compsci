import * as firebase from 'firebase/app'
import 'firebase/auth'

export default class Account {
  app: firebase.app.App
  user?: firebase.User

  constructor(app: firebase.app.App) {
    this.app = app
  }

  async signIn() {
    let result = await this.app.auth().signInWithPopup(
     new firebase.auth.GoogleAuthProvider().setCustomParameters({
       'login_hint': 'example@umail.ucc.ie'
     })
    )
    let token = result.credential.toJSON()
    let user = result.user

  }

}

