import React, { Component } from 'react';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-container container-fluid">
                {/* <About /> */}
                <div className="wrapper">
                    <h1 className="name">
                        R I C H A R D &ensp; L I U
                    </h1>
                    {/* <br/> */}
                    <h2 className="subtitle">
                        engineer // entrepreneur // educator
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