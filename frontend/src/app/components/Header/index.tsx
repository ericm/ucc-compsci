import * as React from 'react';
import { AccountActions } from 'app/actions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { omit } from 'app/utils';
// import * as style from './style.css';

export namespace Header {
    export interface Props {
        actions: AccountActions
    }
}

@connect(
    (dispatch: Dispatch): Header.Props => ({
        actions: bindActionCreators(omit(AccountActions, 'Type'), dispatch)
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
            </header>
        )
    }
}
