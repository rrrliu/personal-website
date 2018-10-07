import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div className="App">
        <h2>
            {this.props.name}
        </h2>
        <img src="{this.props.image}" alt=""/>
        <p>
            {this.props.description}
        </p>
      </div>
    );
  }
}

export default Project;
