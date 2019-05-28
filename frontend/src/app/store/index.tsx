import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import { reactReduxFirebase } from "react-redux-firebase";
import { compose, createStore } from "redux";

export const createStoreWithFirebase = compose(reactReduxFirebase(firebase, { userProfile: 'users' }))(createStore);
