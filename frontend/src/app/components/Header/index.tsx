import * as React from 'react';
// import * as style from './style.css';

export namespace Header {
    export interface Props {

    }
}

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
