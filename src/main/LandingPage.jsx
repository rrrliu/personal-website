import React, { Component } from 'react';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-container container-fluid">
                {/* <About /> */}
                <div className="wrapper">
                    <h1 className="name" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">
                        R I C H A R D &ensp; L I U
                    </h1>
                    {/* <br/> */}
                    <h2 className="subtitle" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="1500">
                        engineer&ensp;<span className="silver">//</span>&ensp;explorer&ensp;<span className="silver">//</span>&ensp;educator
                    </h2>
                </div>
            </div>
            
            
            // <div class="row" id="box-search">
            // <div class="thumbnail text-center">
            //     <img src={require("./camp-us-thumbnail.png")} alt="bitchhhhh" class="img-responsive" />
            //     <div class="caption">
            //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quisquam?</p>
            //         </div>
            //     </div>
            // </div>
        );
    }
}