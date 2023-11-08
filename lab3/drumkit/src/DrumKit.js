import React from "react";
import DrumKitButton from "./DrumKitButton";

const DrumKit = () => (
  <div className="all">
    <DrumKitButton keyName="w" backgroundImage="img/w.png" />
    <DrumKitButton keyName="a" backgroundImage="img/a.png" />
    <DrumKitButton keyName="s" backgroundImage="img/s.png" />
    <DrumKitButton keyName="d" backgroundImage="img/d.png" />
    <DrumKitButton keyName="j" backgroundImage="img/j.png" />
    <DrumKitButton keyName="k" backgroundImage="img/k.png" />
    <DrumKitButton keyName="l" backgroundImage="img/l.png" />
  </div>
);

export default DrumKit;
