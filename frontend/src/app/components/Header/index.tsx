import * as React from 'react';
import { AccountActions } from 'app/actions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { omit } from 'app/utils';
import { AccountModel } from 'app/models';
import { RootState } from 'app/reducers';
// import * as style from './style.css';

export namespace Header {
    export interface Props {
        actions?: AccountActions,
        account?: AccountModel
    }
}

@connect(
    (state: RootState): Pick<Header.Props, 'account'> => {
        return {
            account: state.account
        }
    },
    (dispatch: Dispatch): Pick<Header.Props, 'actions'> => ({
        actions: bindActionCreators(omit(AccountActions, 'Type'), dispatch),
    })
)
export class Header extends React.Component<Header.Props> {
    constructor(props: Header.Props, context?: any) {
        super(props, context);
    }

    public render() {
        return (
            <header>
                <h1>CK401</h1>
                {this.props.account!!.loggedIn}
            </header>
        )
    }
}
