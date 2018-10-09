import React, { Component } from 'react';
import './App.css';
import Home from './main/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App1">
        <div className="App2">
            <Home />
         </div>
      </div>
    );
  }
}
