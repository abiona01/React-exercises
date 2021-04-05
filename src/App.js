import { Component } from "react";
import "./style.css";

export default class App extends Component {
  state = {
    isLoading: "Loading..."
  };
  onMouseEnter = () => {
    let x = Math.random() * 700;
    let y = Math.random() * 700;
    document.body.style.transform = `translate(${x}px, ${y}px)`;
  };

  render() {
    return (
      <div className="App">
        <div onMouseEnter={this.onMouseEnter} className="container">
          <h1>30 Days Of React</h1>
        </div>
      </div>
    );
  }
}