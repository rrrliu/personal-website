import React, { Component } from 'react';

export default class Project extends Component {
    render() {
        const { name, description, img_url, technologies, link } = this.props;
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1> {name} </h1>
                    <h3> {technologies} </h3>
                    <p> {description} </p>
                    <a href={link}>
                        <img border="0" src={img_url} class="img-fluid" alt="Hmm, this doesn't seem to be working"/>
                    </a>
                </div>
            </div>
        );
    }
}