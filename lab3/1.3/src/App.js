import React from "react";
import ReactDOM from "react-dom";
import MyButton from "./MyButton";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function render({ second }) {
  root.render(
    <main>
      <MyButton />
      <MyButton text={second.text} disabled={second.disabled} />
    </main>
  );
}

render({
  second: {
    text: "Second Button",
    disabled: true,
  },
});

export default App;
