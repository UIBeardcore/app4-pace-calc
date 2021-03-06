import * as React from "react";
import "./App.css";

import Box from "./Controls/Containers/Box";

const logo = require("./logo.svg");

class App extends React.Component {
  render() {
   
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Box />
      </div>
    );
  }
}

export default App;
