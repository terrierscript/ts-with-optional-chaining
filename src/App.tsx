import React, { Component } from 'react';
import './App.css';
import { getFooBaz } from "./experimental/optional-chain.js"

class App extends Component {
  render() {
    console.log("vaild", getFooBaz({
      foo: {
        baz: "this is foo baz"
      }
    }))
    console.log("invalid", getFooBaz({}))

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
