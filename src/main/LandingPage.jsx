import React, { Component } from 'react';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-container container-fluid">
                {/* <About /> */}
                <div className="wrapper">
                    <h1 className="name" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="150">
                        R I C H A R D &ensp; L I U
                    </h1>
                    {/* <br/> */}
                    <h2 className="subtitle" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="800">
                        engineer&ensp;<span className="silver">//</span>&ensp;explorer&ensp;<span className="silver">//</span>&ensp;educator
                    </h2>
                </div>
            </div>
        );
    }
}