import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faReact,
  faJs,
} from '@fortawesome/free-brands-svg-icons';

import '../elements/Social/index.scss';

export default function About(props) {
  return (
    <section className="container pt-4" ref={props.refAbout}>
      <Fade bottom>
        <h4>About Me</h4>
        <div className="row align-items-center">
          <div className="col-6 pr-2" style={{ width: 530 }}>
            <p
              className="h5 mb-4 font-weight-light"
              style={{ lineHeight: '170%' }}
            >
              Saya adalah Mahasiswa semester Akhir dari Institut teknologi PLN
              Jakarta. Saat Ini saya sedang mendalami Frontend Web Developer,
              dan sudah terbiasa munggunaka HTML, CSS, dan
              <Button
                className="btn-lang px-4 mx-3"
                hasShadow
                style={{ borderRadius: 30 }}
              >
                JavaScript{' '}
                <a href="https://www.javascript.com/" className="js lang">
                  <FontAwesomeIcon icon={faJs} size="2x" />
                </a>
              </Button>
            </p>
          </div>
          <div className="col-6 pr-2 text-center" style={{ width: 530 }}>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              style={{ borderRadius: 30 }}
            >
              Download CV
            </Button>
          </div>
        </div>
      </Fade>
    </section>
  );
}
