import * as React from 'react';
const style = require('./style.css');

export namespace Notes {
    export interface Props {

    }
}
export class Notes extends React.Component<Notes.Props> {
    constructor(props: Notes.Props) {
        super(props);
    }

    render() {
        return (
            <div className={style.normal}>
                <h1>Notes</h1>
            </div>
        );
    }
}
