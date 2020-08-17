import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>I find it kinda funny</h1>
        <p>But nobody is laughing</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
