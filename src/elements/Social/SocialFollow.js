import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faReact,
  faJs,
} from '@fortawesome/free-brands-svg-icons';

import './index.scss';
export default function SocialFollow() {
  return (
    <div class="social-container">
      {/* <h3>Social Follow</h3> */}
      <a href="https://www.reactjs.org/" className="youtube social">
        <FontAwesomeIcon icon={faReact} size="1x" />
      </a>

      <a href="https://www.javascript.com/" className="js lang">
        <FontAwesomeIcon icon={faJs} size="1x" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
