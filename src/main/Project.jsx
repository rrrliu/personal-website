import React, { Component } from 'react';

export default class Project extends Component {
    render() {
        const { name, description, img_url, technologies } = this.props;
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1> {name} </h1>
                    <h2> {technologies} </h2>
                    <p> {description} </p>
                    <img src={img_url} class="img-fluid" alt="Hmm, this doesn't seem to be working"/>
                </div>
            </div>
        );
    }
}