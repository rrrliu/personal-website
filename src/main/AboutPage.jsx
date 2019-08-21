import React, * as react from 'react';
import linkedin from './icons/linkedin-icon.png';
import github from './icons/github-icon.png';
import spotify from './icons/spotify-icon.png';

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
              My name is Richard, and I love to build projects.
            </p>
            <p>
              I’m currently a student at UC Berkeley pursuing a dual degree in computer science and business
              under the <a href="http://met.berkeley.edu/">Management, Entrepreneurship, and Technology</a> program.
              In my free time, I enjoy cooking, swimming, and producing music.
            </p>
            <p>
              As an engineer at heart, I really love seeing things build up from start to finish &mdash;
              I hope you'll enjoy browsing through these projects as much as I enjoyed making them.
            </p>
          </div>
          <div className="col-4" data-aos="fade-left" data-aos-duration="3000">
            <img src={require('./intro-pic.jpeg')} className="img-fluid round" alt="da fuq"/>
          </div>
        </div>
      
        <div className="contact container" data-aos="fade-up" data-aos-duration="3000">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <a href="https://www.linkedin.com/in/richard-y-liu/">
                <img className="favicon" src={linkedin} alt="linkedin logo"/>
              </a>
            </div>
            <div className="col">
              <a href="https://github.com/rrrliu">
                <img className="favicon" src={github} alt="github logo"/>
              </a>
            </div>
            <div className="col">
              <a href="https://open.spotify.com/user/richardliuwa">
                <img className="favicon" src={spotify} alt="spotify logo"/>
              </a>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}
