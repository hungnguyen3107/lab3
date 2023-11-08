import React from "react";

class Mycomponent extends React.Component {
  state = {
    heading: "React Awesomesauce (Busy)",
    content: "Loading...",
  };

  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        heading: "React Awesomesauce",
        content: "Done!",
      });
    }, 6000);
  }

  render() {
    const { heading, content } = this.state;
    return (
      <main>
        <h1>{heading}</h1>
        <p>{content}</p>
      </main>
    );
  }
}

export default Mycomponent;
