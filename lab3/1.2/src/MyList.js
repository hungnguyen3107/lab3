import React from "react";

const MyList = (props) => {
  return (
    <ul>
      {props.item.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
};

export default MyList;
