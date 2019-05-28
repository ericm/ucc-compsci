import { User } from "firebase";

export interface AccountModel {
    loggedIn: boolean,
    credentials?: User
}

export namespace AccountModel {
    export enum Filter {
        ALL_INFO = "all",
        BASIC_INFO = "basic"
    }
}
