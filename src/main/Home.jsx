import React, { Component } from 'react';
import Landing from './LandingPage';
import About from './AboutPage';
import Projects from './ProjectsPage';

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Landing />
                <About />
                <Projects />
            </div>
        );
    }
}