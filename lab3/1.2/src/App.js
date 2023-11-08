import React, { useEffect, useState } from "react";
import MyButton from "./MyButton";
import MyList from "./MyList";

const App = () => {
  const appState = {
    text: "My Button",
    disabled: true,
    items: ["First", "Second", "Third"],
  };
  
  const [newAppState, setNewAppState] = useState(appState);

  useEffect(() => {
    setTimeout(() => {
      setNewAppState({ ...newAppState, disabled: false, items: [...newAppState.items, "Fourth"] });
    }, 1000);
  }, []);

  return (
    <div>
      <MyButton disabled={newAppState.disabled}>{newAppState.text}</MyButton>
      <MyList items={newAppState.items}/>
    </div>
  );
};

export default App;
