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
        this.login.bind(this)();
    }

    private async login() {
        await this.props.firebase.login("test@test.com", "test123");
        if (this.props.firebase.loggedIn()) {
            console.log(this.props.firebase.getUser());
        }
    }

    public render() {
        return (
            <header className={style.root}>
                <h1>CK401</h1>
            </header>
        )
    }
}
