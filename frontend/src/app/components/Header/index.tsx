import * as React from 'react';
import Firebase from 'app/firebase'
import * as style from './style.css';

export namespace Header {
    export interface Props {
        firebase: Firebase
    }
    export interface State {

    }
}

export class Header extends React.Component<Header.Props, Header.State> {
    constructor(props: Header.Props) {
        super(props);
        this.state = {};
        console.log(this.props.firebase.loggedIn());
    }

    public render() {
        return (
            <header className={style.root}>
                <h1>CK401</h1>
            </header>
        )
    }
}
