import React from "react";
import "./App.css";

const DrumKitButton = ({ keyName, backgroundImage }) => (
  <button className={`button ${keyName}`} data-key={keyName} style={{ backgroundImage: `url('${backgroundImage}')` }}>
    {keyName}
  </button>
);

export default DrumKitButton;
