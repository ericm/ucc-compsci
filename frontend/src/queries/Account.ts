import * as firebase from 'firebase/app'
import 'firebase/auth'

export default class Account {
  app: firebase.app.App

  constructor(app: firebase.app.App) {
    this.app = app
  }

}

