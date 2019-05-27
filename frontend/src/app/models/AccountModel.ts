import { auth as Auth } from "firebase";

export interface AccountModel {
    loggedIn: boolean,
    credentials?: Auth.UserCredential
}

export namespace AccountModel {
    export enum Filter {
        ALL_INFO = "all",
        BASIC_INFO = "basic"
    }
}
