import React from "react";
import ReactDOM from "react-dom";
import MySection from "./MySection";
import MyButton from "./MyButton";

const Myexercise = ReactDOM.createRoot(document.getElementById("root"));

Myexercise.render(
  <MySection>
    <MyButton>My Button text</MyButton>
  </MySection>
);

export default App;
