import * as React from 'react';
import * as style from './style.css';
import { RouteComponentProps } from 'react-router';
import { Header } from 'app/components';

export namespace App {
    export interface Props extends RouteComponentProps<void> {

    }
}
export class Home extends React.Component<App.Props> {
    constructor(props: App.Props, context?: any) {
        super(props, context);
    }

    render() {
        return (
            <div className={style.normal}>
                <Header />
            </div>
        );
    }
}
