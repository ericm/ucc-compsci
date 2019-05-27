import { handleActions } from "redux-actions";
import { AccountModel } from "app/models";

const initialState: AccountModel = {
    loggedIn: false
}

export const accountReducer = handleActions<AccountModel, AccountModel>(
    {

    },
    initialState
)
