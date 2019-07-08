import * as React from 'react';
import * as style from './style.css';
import Slider from 'react-slick'

export namespace Home {
    export interface Props {

    }
}

export class Home extends React.Component<Home.Props> {
    constructor(props: Home.Props) {
        super(props);
    }

    render() {
        return (
            <div className={style.normal}>
                <Slider className={style.slider} dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}
