import React, * as react from 'react';

export default class AboutPage extends react.Component {
  render() {
    return (
      <div className="about-container container">
        <div className="jumbotron" id="header" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">
          <h1>
            I N T R O
          </h1>
        </div>
        <div className="row">
          <div className="col-7" data-aos="fade-right" data-aos-duration="3000">
            <br/>
            <p>
              Hey there!
            </p>
            <p>
              My name is Richard, and I love to build projects in my free time.
            </p>
            <p>
              I’m currently a student at UC Berkeley hoping to apply software to education,
              fitness, and music. I also love exploring new fields and learning from my peers.
              Currently, I'm pursuing a dual degree in computer science and business administration
              under the Management, Entrepreneurship, and Technology program.
            </p>
            <p>
              As an engineer at heart, I really love seeing things build up from start to finish &mdash;
              I hope you'll enjoy at these projects as much as I enjoyed making them.
            </p>
          </div>
          <div className="col-4" data-aos="fade-left" data-aos-duration="3000">
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
