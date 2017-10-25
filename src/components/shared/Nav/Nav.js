import React, { Component } from 'react';
import './Nav.css'
import './hamburger.css'
import search from '../../../assets/svgs/search.svg'
import Facebook from '../../../assets/svgs/Facebook.svg'
import Twitter from '../../../assets/svgs/Twitter.svg'
import Spotify from '../../../assets/svgs/Spotify.svg'
import person from '../../../assets/images/matt.jpg'
import menu from '../../../assets/svgs/menu.svg'
import logo from '../../../assets/svgs/logo.svg'
import MobileNavOverlay from '../MobileNavOverlay'

class Nav extends Component {
  constructor(){
    super();
    this.state = {
      mobileIsActive:false
    }
  }
  render() {
    return(
      <nav className="navbar">
        <div className="navbar-pad">
          <h1 className="navbar-logo">viibly</h1>
          <div className="nav-buttons">
            <img src={Spotify} className="nav-button spotify"></img>
            <img src={Twitter} className="nav-button twitter"></img>
            <img src={Facebook} className="nav-button facebook"></img>
            <img src={search} className="nav-button search"></img>
            <img src={person} className="nav-button person"></img>
            <button className={"hamburger hamburger--elastic " + (this.state.mobileIsActive ? "is-active": "")} onClick={() => {this.setState({ mobileIsActive:!this.state.mobileIsActive })}} type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            {/* <img src={menu} className="nav-button menu"></img> */}
          </div>
        </div>
        <div className="mobile-nav-bar">
          <a className="mobile-nav-bar-item">Festival Select</a>
          <a className="mobile-nav-bar-item">Playlist Generator</a>
        </div>
        <MobileNavOverlay mobileIsActive={this.state.mobileIsActive}/>
      </nav>
    );

  }

}

export default Nav;
