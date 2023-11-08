import React from "react";

const smartPeople = [
  { name: "Johann Goethe", age: 83, IQ: 210 },
  { name: "Jessi", age: 12, IQ: 220 },
  { name: "Adele", age: 32, IQ: 110 },
  { name: "Goethe", age: 23, IQ: 150 },
  { name: "Hana", age: 34, IQ: 210 },
  { name: "Leole", age: 23, IQ: 180 },
];

const App = () => (
  <ul>
    {smartPeople.map((person, index) => (
      <li key={index}>{person.name}</li>
    ))}
  </ul>
);

export default App;
