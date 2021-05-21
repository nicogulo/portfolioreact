import React from 'react';
import Fade from 'react-reveal/Fade';

import ImageHero from 'assets/images/img-hero.png';
import ImageHero_ from 'assets/images/img-hero-frame.jpg';

import Button from 'elements/Button';

export default function Hero(props) {
  function ShowMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="h2 font-weight-bold line-height-1 mb-3">
              Hallo 👋, <br />
              I'm Nico Gulo <br />a Frontend Web Developer
            </h1>

            <Button
              className="btn btn-lang px-5"
              hasShadow
              onClick={ShowMostPicked}
              style={{ borderRadius: 30 }}
            >
              Scroll Down
            </Button>
          </div>

          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="profile pict"
                className="img-fluid position-absolute"
                style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="profile pict frame"
                className="img-fluid position-absolute"
                style={{ margin: '0 -15px -15px 0' }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
