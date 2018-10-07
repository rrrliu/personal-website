import React, { Component } from 'react';
import './App.css';
import Landing from './landing/LandingPage';
import About from './about/AboutPage';
import Projects from './projects/ProjectsPage';
// import Contact from './contact/ContactPage';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <About />
        <Projects />
        {/* <Contact /> */}
      </div>
    );
  }
}
