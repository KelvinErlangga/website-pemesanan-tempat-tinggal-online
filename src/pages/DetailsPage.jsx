import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import React, { Component } from "react";

import itemDetails from "json/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import Footer from "parts/Footer";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import ThingsToDo from "parts/ThingsToDo";
import Testimonial from "parts/Testimonial";
import { Fade } from "react-awesome-reveal";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details | Vinstay";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "House", pageHref: "" },
      { pageTitle: "Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
        <FeaturedImage data={itemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade direction="up" triggerOnce>
                <PageDetailDescription data={itemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade direction="up" triggerOnce>
                <BookingForm itemDetails={itemDetails} />
              </Fade>
            </div>
          </div>
        </section>
        <ThingsToDo data={itemDetails.todo} />
        <Testimonial data={itemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
