import React from 'react';
import Fade from 'react-reveal/Fade';

import ImageHero from 'assets/images/img-hero.png';
import ImageHero_ from 'assets/images/img-hero-frame.jpg';

import Button from 'elements/Button';

export default function Hero(props) {
  function ShowAbout() {
    window.scrollTo({
      top: props.refAbout.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  return (
    <Fade bottom>
      <section className="container hero" style={{ margin: '120px auto' }}>
        <div className="row align-items-center">
          <div className="col-auto hero-card mr-5">
            <div style={{ width: 420, height: 350 }}>
              <img
                src={ImageHero}
                alt="profile pict"
                className="img-fluid position-absolute pict-hero"
                style={{ margin: '-30px -15px -15px 0', zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="profile pict frame"
                className="img-fluid position-absolute pict-frame"
                style={{ margin: '0 0 0 -30px' }}
              />
            </div>
          </div>
          <div className="col-auto px-5" style={{ width: 530 }}>
            <h1 className="h2 font-weight-bold line-height-1 mb-3">
              Hello, Holla, こんにちは 👋, <br />
              I'm Nico Gulo <br />a Frontend Web Developer
            </h1>

            <Button
              className="btn btn-scroll px-5"
              hasShadow
              onClick={ShowAbout}
              style={{ borderRadius: 30 }}
            >
              Scroll Down
            </Button>
          </div>
        </div>
      </section>
    </Fade>
  );
}
