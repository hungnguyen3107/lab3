import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <section>
      <header>
        <h1>A Header</h1>
      </header>
      <nav>
        <a href="item">Nav item</a>
      </nav>
      <main>
        <p>The main content ......</p>
      </main>
      <footer>
        <small>&copy; 2023</small>
      </footer>
    </section>
  );

  return <div></div>;
};

export default App;
