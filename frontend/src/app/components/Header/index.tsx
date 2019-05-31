import * as React from 'react';
import Firebase from 'app/firebase'
import * as style from './style.css';
import { Link } from 'react-router-dom';

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
                <nav>
                    <ul>
                        <Link to={"/"}><li>Home</li></Link>
                        <Link to={"/notes"}><li>Notes</li></Link>
                    </ul>
                </nav>
                <svg className={style.back} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <polygon style={{fill:'#5581f6'}} points="0 0 0 10 100 10 75 0" />
                </svg>
                <svg className={style.border} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <polygon style={{fill:'#5581f6'}} points="100 0 0 10 0 0" />
                </svg>
            </header>
        )
    }
}
