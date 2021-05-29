import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import About from 'parts/About';
import Portfolios from 'parts/Portfolios';
// import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

import landingPage from 'json/landingPage.json';
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refAbout = React.createRef();
  }
  componentDidMount() {
    window.title = `Nico Gulo's Portfolio`;
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refAbout={this.refAbout} />
        <About refAbout={this.refAbout} data={landingPage.About} />
        <Portfolios data={landingPage.portfolios} />
        {/* <Testimony data={landingPage.testimonial} /> */}
        <Footer />
      </>
    );
  }
}
