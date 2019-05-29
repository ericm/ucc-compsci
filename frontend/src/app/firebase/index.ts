import firebase from '@firebase/app';
import '@firebase/auth';
import { firebaseConfig } from '../../environment/firebase';
import { FirebaseApp } from '@firebase/app-types';
import { FirebaseAuth, User } from '@firebase/auth-types';

export default class Firebase {
    public firebase: FirebaseApp
    private user: User | null = null

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
        this.getAuth().signInWithEmailAndPassword(email, password).then(user => {
            if (!!user.user) {
                this.user = user.user;
            }
        })

    public loggedIn = () => {
        return this.user !== null;
    }

    public getUser = () => {
        if (this.user !== null) {
            return this.user;
        } else {
            return {} as User;
        }
    }

}
