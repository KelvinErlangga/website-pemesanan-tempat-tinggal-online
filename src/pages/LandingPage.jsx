import React, { Component } from "react";
import "elements/Button";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPopular from "parts/MostPopular";
import Categories from "parts/Categories";

import landingPage from "json/landingPage.json";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPopular = React.createRef();
  }
  componentDidMount() {
    window.title = "Home | Vinstay";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPopular={this.refMostPopular} data={landingPage.hero} />
        <MostPopular refMostPopular={this.refMostPopular} data={landingPage.mostPopular} />
        <Categories data={landingPage.categories} />
        <Testimonial data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
