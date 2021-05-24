import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs } from '@fortawesome/free-brands-svg-icons';
import CV from 'assets/CV.pdf';

import '../elements/Social/index.scss';

export default function About(props) {
  return (
    <section className="container pt-5" ref={props.refAbout}>
      <Fade bottom>
        <h4>About Me</h4>
        <div className="row align-items-center">
          <div className="col-6 pr-2" style={{ width: 530 }}>
            <p
              className="h5 mb-4 font-weight-light"
              style={{ lineHeight: '170%' }}
            >
              Saya adalah Mahasiswa semester akhir dari Institut teknologi PLN
              Jakarta. Saat Ini saya sedang mendalami Frontend Web Developer,
              dan sangat menyukai teknologi
              <Button
                className="btn-lang px-4 mx-3"
                hasShadow
                style={{ borderRadius: 30 }}
              >
                React{' '}
                <a href="https://www.reactjs.org/" className="react px-2">
                  <FontAwesomeIcon icon={faReact} size="2x" />
                </a>
              </Button>
              dan
              <Button
                className="btn-lang px-4 mx-3"
                hasShadow
                style={{ borderRadius: 30 }}
              >
                JavaScript{' '}
                <a href="https://www.javascript.com/" className="js px-2">
                  <FontAwesomeIcon icon={faJs} size="2x" />
                </a>
              </Button>
            </p>
          </div>
          <div className="col-6 pr-2 text-center" style={{ width: 530 }}>
            <a href={CV} target="blank">
              <Button
                className="btn px-5"
                hasShadow
                isPrimary
                style={{ borderRadius: 30 }}
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
}
