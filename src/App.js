import React, { Component } from 'react';
import './App.css';
import Home from './main/Home';
import CampUs from './other/CampUs';
// import E3Scooter from './e3scooter/E3Scooter';
// import Attendeaux from './attendeaux/Attendeaux';
// import Treecursion from './other/Treecursion';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App1">
        <div className="App2">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/camp-us" component={CampUs} />
              {/* <Route path="/treecursion" component={Treecursion} /> */}
            </Switch>
          </BrowserRouter>
         </div>
      </div>
    );
  }
}
