import * as React from 'react';
const style = require('./style.css');

interface Props {}
export default (props: Props) => {
  return (
    <div className={style.normal}>
      <h1>Notes</h1>
    </div>
  );
};
