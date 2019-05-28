import { createAction } from "redux-actions";
import { AccountModel } from "app/models";

export namespace AccountActions {
    export enum Type {
        LOGIN = 'LOGIN',
        LOGOUT = 'LOGOUT',
        EDIT_INFO = 'EDIT_INFO'
    }

    export const login = createAction<PartialPick<AccountModel, 'credentials'>>(Type.LOGIN);
    export const logout = createAction(Type.LOGOUT);
    export const editInfo = createAction(Type.EDIT_INFO);
}

export type AccountActions = Omit<typeof AccountActions, 'Type'>;
