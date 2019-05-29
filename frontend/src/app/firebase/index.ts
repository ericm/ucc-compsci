import firebase from '@firebase/app';
import '@firebase/auth';
import { firebaseConfig } from '../../environment/firebase';
import { FirebaseApp } from '@firebase/app-types';
import { FirebaseAuth } from '@firebase/auth-types';

export default class Firebase {
    public firebase: FirebaseApp

    constructor() {
        this.firebase = firebase.initializeApp(firebaseConfig);
    }

    private getAuth = () => {
        if (!!this.firebase.auth) {
            return this.firebase.auth();
        } else {
            return {} as FirebaseAuth;
        }
    }

    public login = (email: string, password: string) =>
        this.getAuth().signInWithEmailAndPassword(email, password)

    public loggedIn = () => {
        return this.getAuth().currentUser !== null;
    }

    public getCredentials = () => this.getAuth().currentUser

}
