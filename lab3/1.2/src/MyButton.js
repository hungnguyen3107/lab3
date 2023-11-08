import React from "react";

const MyButton = (props) => {
  const { disabled, children } = props;
  return <button disabled={disabled}>{children}</button>;
};

export default MyButton;
