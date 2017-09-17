import React, { Component } from 'react';
import './splash.css';

class Splash extends Component {

  render() {
    return (
      <div className="app">
        <nav className="nav">
          <div className="logoCon">
            <h1 className="logo">
            Festival<span className="bold">Select</span>
            </h1>
          </div>
          <div className="menuSearch">
            <div className="menuSearch-search">
              <div className="searchButton">
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
              <input type="text" id="search" className="siteSearch" placeholder="Search"></input>
              <label for="search" hidden="true">Search</label>
            </div>
            <div className="menuSearch-menu">
              <span>Menu</span>
            </div>
          </div>
        </nav>
        <section className="bigPicture">
          {/* <div className="layer"></div> */}
          <div className="bigPicture-selector">
            <h2 className="bigPicture-header">Who do you want to see?</h2>
          </div>
          <div className="bigPicture-generator">
            <h2 className="bigPicture-header">What festival are you going to?</h2>
          </div>
        </section>
        <section className="fslBG">
          <h2 className="fslHeader">
            {/* <i className="fa fa-lightbulb-o fa-inline" aria-hidden="true"></i> */}
            <i className="fa fa-lightbulb-o fa-inline" aria-hidden="true"></i>
            Festival Spotlight
          </h2>
          <div className="fslCon">
            <div className="fsl-daysCon">
              <div className="fcc fsl-day"><span>sun</span></div>
              <div className="fcc fsl-day"><span>mon</span></div>
              <div className="fcc fsl-day"><span>tue</span></div>
              <div className="fcc fsl-day"><span>wed</span></div>
              <div className="fcc fsl-day active"><span>thu</span></div>
              <div className="fcc fsl-day"><span>fri</span></div>
              <div className="fcc fsl-day"><span>sat</span></div>
            </div>
            <div className="fslContent">
              <h2 className="fslContent-header">Bonnaroo Music and Arts Festival</h2>
            </div>
            <div className="fslSocial">
              <div className="fcc fsl-social-i"><i className="fa fa-facebook" aria-hidden="true"></i></div>
              <div className="fcc fsl-social-i"><i className="fa fa-twitter" aria-hidden="true"></i></div>
              <div className="fcc fsl-social-i"><i className="fa fa-youtube" aria-hidden="true"></i></div>
              <div className="fcc fsl-social-i"><i className="fa fa-instagram" aria-hidden="true"></i></div>
              <div className="fcc fsl-social-i"><i className="fa fa-tumblr" aria-hidden="true"></i></div>
            </div>
            {/* <img className="aslImg" src="/assets/bonaroo.jpg"></img> */}
          </div>
          <div className="otdCon">
            <div className="artist-otd">
              <h3 className="artist-otd-header">Artist Of The Day</h3>
              <h2 className="artist-otd-name">LCD Soundsystems</h2>
            <div className="artist-otd-content">
              </div>
              <img className="artist-otd-image"></img>
              <div></div>
            </div>
            <div className="playlist-otd">
              <h3 className="playlist-otd-header">Playlist Of The Day</h3>
              <h2 className="playlist-otd-name">Youthful Tyler</h2>
            <div className="playlist-otd-content">

              </div>
              <img className="playlist-otd-image"></img>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Splash;
