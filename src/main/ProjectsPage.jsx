import React, { Component } from 'react';
import Project from './Project';
import camp_us from './camp-us-thumbnail.png';
import treecursion from './p5-thumbnail.png';
import attendeaux from './arduino-thumbnail.png';
import portal from './teacher-portal.png';
import e3scooter from './e3scooter-thumbnail.png';
import where2meet from './where2meet.png';

export default class ProjectsPage extends Component {
    render() {
        return (
            <div className="projects-container container">
                <div className="jumbotron" id="header" data-aos="fade-up" data-aos-duration="2000">
                    <h1>P R O J E C T S</h1>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="3000" data-aos-delay="200">
                    <Project name="YVHS Teacher Portal"
                            technologies="Amazon S3 | Express.js | React.js | PostreSQL"
                            description="Comprehensive web portal for teachers at Ygnacio Valley High School to organize their lessons and collect student feedback on their courses. Planned deployment date early 2019."
                            img_url={portal}
                            link=""
                    />
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="3000" data-aos-delay="300">
                    <Project name="Where2Meet"
                            technologies="Firebase | Google Maps API | Yelp API | React.js"
                            description="Web app that finds the best place for a group to meet by finding venues on Yelp near the midpoint of their locations."
                            img_url={where2meet}
                            link="https://wheretwomeet.firebaseapp.com/"
                    />
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="2500" data-aos-delay="400">
                    <Project name="Attendeaux"
                            technologies="Arduino C++ | Adafruit Fingerprint Sensor | Python"
                            description="A biometric identity verification product for teachers to track daily attendance. Simple, sleek, and robust."
                            img_url={attendeaux}
                            link=""
                    />
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="2500" data-aos-delay="500">
                    <Project class="camp-us"
                            name="Camp&sdot;us"
                            technologies="Google App Engine | Python | jQuery | HTML/CSS"
                            description="A social media platform for students to connect with their campus community."
                            img_url={camp_us}
                            link="https://cssi-camp-us.appspot.com/"
                    />
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="2500" data-aos-delay="500">
                    <Project name="Treecursion"
                            technologies="JavaScript | p5.js"
                            description="Educational website designed to teach the fundamentals of tree recursion through Fibonacci."
                            img_url={treecursion}
                            link="https://rrrliu.github.io/p5-project/empty-example/"
                    />
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="2500" data-aos-delay="500">
                    <Project name="e3Scooter"
                            technologies="Express.js | Python | MongoDB"
                            description="Location-based electric scooter rideshare app targeting the traffic crisis in Sao Paulo, Brazil."
                            img_url={e3scooter}
                            link="https://devpost.com/software/e3mega-lscr7f"
                    />
                </div>
            </div>
        );
    }
}