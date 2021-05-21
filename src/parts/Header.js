import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import BrandIcon from 'parts/IconText';

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? 'active' : '';
  };
  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Nico<span className="text-gray-900"> Gulo</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );
  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass('/')}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass('/brows-by')}`}>
                  <Button className="nav-link" type="link" href="/brows-by">
                    About
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass('/stories')}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass('/agents')}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
