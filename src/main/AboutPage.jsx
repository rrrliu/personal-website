import React, * as react from 'react';

export default class AboutPage extends react.Component {
  render() {
    return (
      <div className="about-container container">
        <div className="row">
          <div className="col-8">
            <h1>
              Introduction
            </h1>
            <br/>
            <p>
              Hey there!
            </p>
            <p>
              My name is Richard and I love to build projects in my free time.
            </p>
            <p>
              I’m currently a student at UC Berkeley hoping to apply software to education,
              fitness, and music. Currently, I'm pursuing a dual degree in computer science
              and business administration under the Management, Entrepreneurship, and Technology
              program.
            </p>
            <p>
              As an engineer at heart, I really enjoyed making these projects &mdash; I hope you'll find them
              interesting too!
            </p>
          </div>
          <div className="col-4">
            <img src={require('./intro-pic.jpg')} className="img-fluid round" alt="da fuq"/>
          </div>
        </div>
      </div>
      // <div class="container">
      //   <div class="row">
      //     <div class="col">
      //       1 of 3
      //     </div>
      //     <div class="col-6">
      //       2 of 3 (wider)
      //     </div>
      //     <div class="col">
      //       3 of 3
      //     </div>
      //   </div>
      //   <div class="row">
      //     <div class="col">
      //       1 of 3
      //     </div>
      //     <div class="col-5">
      //       2 of 3 (wider)
      //     </div>
      //     <div class="col">
      //       3 of 3
      //     </div>
      //   </div>
      // </div>
    );
  }
}
