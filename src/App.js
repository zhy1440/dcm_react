import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import TickingClock from "./utils/TickingClock.react";
import MainBoard from "./main/MainBoard .react";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to DCM</h1>
        </header> */}
                <MainBoard />
            </div>
        );
    }
}

export default App;
