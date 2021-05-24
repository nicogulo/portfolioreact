import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faReact,
  faJs,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';

import './index.scss';
export default function SocialFollow() {
  return (
    <div class="social-container">
      {/* <h3>Social Follow</h3> */}
      <a href="https://www.reactjs.org/" className="react lang">
        <FontAwesomeIcon icon={faReact} size="1x" />
      </a>

      <a href="https://www.javascript.com/" className="js lang">
        <FontAwesomeIcon icon={faJs} size="1x" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFigma} size="2x" />
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
