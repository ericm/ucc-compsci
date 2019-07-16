import * as React from 'react';
const style = require('./style.css');
import Slider from 'react-slick';

interface Props {}

export default (props: Props) => {
  return (
    <div className={style.normal}>
      <Slider
        className={style.slider}
        dots={true}
        infinite={true}
        speed={500}
        arrows={false}
        autoplay={true}
        slidesToShow={1}
        slidesToScroll={1}
      >
        <div>
          <h3>CK401: UCC Computer Science</h3>
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
};
