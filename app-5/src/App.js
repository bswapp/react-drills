import React, { Component } from "react";
import Image from './Image'
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Image url={"https://http.cat/409"} />
      </div>
    );
  }
}

export default App;
