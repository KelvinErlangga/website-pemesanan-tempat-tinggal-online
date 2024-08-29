import Breadcrumb from "elements/Breadcrumb";
import PageDetailTitle from "parts/PageDetailTitle";
import React, { Component } from "react";

import itemDetails from "json/itemDetails.json";

export default class Example extends Component {

  render() {
    const breadcrumb = [
      { pageTitle: "House", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className="col-auto">
          <Breadcrumb data={breadcrumb}/>
          <PageDetailTitle data={itemDetails.name}/>
          </div>
        </div>
      </div>
    );
  }
}
