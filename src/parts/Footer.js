import React from 'react';
// import Button from 'elements/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import IconText from 'parts/IconText';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-6 text-center" style={{ width: 350 }}>
            <IconText />
            {/* <p className="brand-tagline">Let's Connect.</p> */}
          </div>
          <div className="col-6 text-center">
            <h6 className="mt-2">Let's Connect</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="https://instagram.com/_nanithefvck" target="blank">
                  <p className="brand-tagline">
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                    _nanithefvck
                  </p>
                </a>
              </li>
              <li className="list-group-item">
                <a href="https://twitter.com/_xnfvk" target="blank">
                  <p className="brand-tagline">
                    {' '}
                    <FontAwesomeIcon icon={faTwitter} size="1x" /> _xnfvk
                  </p>
                </a>
              </li>
              <li className="list-group-item">
                <a href="https://github.com/nicogulo" target="blank">
                  <p className="brand-tagline">
                    {' '}
                    <FontAwesomeIcon icon={faGithub} size="1x" /> nicogulo
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">Copyright 2021</div>
        </div>
      </div>
    </footer>
  );
}
