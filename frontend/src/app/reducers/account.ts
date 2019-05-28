import { handleActions } from "redux-actions";
import { AccountModel } from "app/models";
import { AccountActions } from "app/actions";
import * as firebase from "firebase";

let initialState: AccountModel

if (!!firebase.auth().currentUser && firebase.auth().currentUser !== null) {
    initialState = {
        loggedIn: true,
        credentials: firebase.auth().currentUser as firebase.User
    }
} else {
    initialState = {
        loggedIn: false
    }
}

export const accountReducer = handleActions<AccountModel, AccountModel>(
    {
        [AccountActions.Type.LOGIN]: (state, action) => {
            if (!state.loggedIn && !!action.payload && !!action.payload.credentials) {
                return {
                    loggedIn: true,
                    credentials: action.payload.credentials
                };
            } else {
                return {
                    loggedIn: false
                };
            }
        },
        [AccountActions.Type.LOGOUT]: state => {
            if (state.loggedIn) {
                return {
                    loggedIn: false,
                    credentials: undefined
                };
            } else {
                return state;
            }
        },
        [AccountActions.Type.EDIT_INFO]: (state, action) => {
            if (state.loggedIn && !!action.payload && !!action.payload.credentials) {
                return {
                    loggedIn: true,
                    credentials: action.payload.credentials
                };
            }
            return state;
        }
    },
    initialState
)
