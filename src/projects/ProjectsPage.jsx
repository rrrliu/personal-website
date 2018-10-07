import React, { Component } from 'react';
import Project from './Project';
import camp_us from './camp-us-thumbnail.png';

export default class ProjectsPage extends Component {
    render() {
        return (
            <div className="projects-container">
                <h1>Projects</h1>
                <Project name="Camp&bull;us"
                         technologies="Google App Engine | Python | jQuery | HTML/CSS"
                         description="Social media platform for students to connect with their campus community."
                         img_url={camp_us}
                         link="#"
                />
                <Project name="Treecursion"
                         technologies="JavaScript | p5.js"
                         description="Education website designed to teach the fundamentals of tree recursion through Fibonacci."
                         img_url="#"
                         link="#"
                />
                <Project name="e3Scooter"
                         technologies="Express.js | MongoDB | Python | HTML/CSS"
                         description="Location-based electric scooter rideshare app targeting the traffic crisis in Sao Paulo, Brazil."
                         img_url="#"
                         link="#"
                />
                <Project name="Attendeaux"
                         technologies="Arduino C++ | Adafruit Fingerprint Sensor | Python"
                         description="Biometric attendance tracking product for teachers."
                         img_url="#"
                         link="#"
                />
            </div>
        );
    }
}