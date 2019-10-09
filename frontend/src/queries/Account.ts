import * as firebase from 'firebase/app'
import 'firebase/auth'

export default class Account {
  private $app: firebase.app.App
  private $user: firebase.User | null = null

  constructor(app: firebase.app.App) {
    this.$app = app
  }

  async signIn() {
    try {
      let result = await this.$app.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider().setCustomParameters({
          login_hint: 'example@umail.ucc.ie'
        })
      )
      this.handleUser(result.user)
    } catch (error) {
      console.error(error)
    }
  }

  private handleUser(user: firebase.User) {
    const EMAIL_REG = /[0-9]+@umail.ucc.ie/
    if (user.email.match(EMAIL_REG)) {
      // Is a valid UCC email address
      // Validation is also done on firebase but to display instant signin we do it here too.
      // If regex were to be modified here, the user wouldnt exist in our DB and website would throw exception
      this.$user = user
    }
  }

  getUser(): firebase.User {
    // Only call when checked login status
    return this.$user as firebase.User
  }

  loggedIn(): boolean {
    return !!this.$user
  }
}
