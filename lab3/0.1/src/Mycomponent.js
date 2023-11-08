import React from "react";

class Mycomponent extends React.Component {
  state = {
    first: false,
    second: true,
  };

  handleButtonClick = (button) => {
    this.setState((prevState) => ({
      [button]: !prevState[button],
    }));
  };

  render() {
    const { first, second } = this.state;
    return (
      <main>
        <section>
          <button disabled={first} onClick={() => this.handleButtonClick("first")}>
            First
          </button>
        </section>
        <section>
          <button disabled={second} onClick={() => this.handleButtonClick("second")}>
            Second
          </button>
        </section>
      </main>
    );
  }
}

export default Mycomponent;
