import React, { Component } from 'react';
import './MobileNavOverlay.css'
import Facebook from '../../../assets/svgs/Facebook.svg'
import Twitter from '../../../assets/svgs/Twitter.svg'
import Spotify from '../../../assets/svgs/Spotify.svg'

class MobileNavOverlay extends Component {

  render() {
    return(
      <div className={'mobile-nav-overlay ' + (this.props.mobileIsActive ? 'is-active': '')}>
        <ul className="mobile-nav-link-container">
          <li className="mobile-nav-link">Artists</li>
          <li className="mobile-nav-link">Festivals</li>
          <li className="mobile-nav-link">Lists</li>
          <li className="mobile-nav-link">News</li>
          <li className="mobile-nav-link">Lineups</li>
        </ul>
        <ul className="mobile-nav-social-container">
          <li className="mobile-nav-social"><img src={Spotify}></img></li>
          <li className="mobile-nav-social"><img src={Twitter}></img></li>
          <li className="mobile-nav-social"><img src={Facebook}></img></li>
        </ul>
      </div>
    );

  }

}

export default MobileNavOverlay;
