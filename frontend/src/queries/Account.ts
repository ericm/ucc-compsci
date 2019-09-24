import * as firebase from 'firebase/app'
import 'firebase/auth'

export default class Account {
  private app: firebase.app.App
  private user: firebase.User | null = null

  constructor(app: firebase.app.App) {
    this.app = app
  }

  async signIn() {
    let result = await this.app.auth().signInWithPopup(
     new firebase.auth.GoogleAuthProvider().setCustomParameters({
       'login_hint': 'example@umail.ucc.ie'
     })
    )
    this.user = result.user

  }

  getUser(): firebase.User {
    // Only call when checked login status
    return this.user as firebase.User
  }

  loggedIn(): boolean {
    return !!this.user
  }

}

