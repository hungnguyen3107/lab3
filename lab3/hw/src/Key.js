// Key.js
import React from "react";

const Key = (props) => (
  <div className="key">
    {props.black && <div className="black">{props.title2}</div>}
    <span>{props.title1}</span>
  </div>
);

export default Key;
