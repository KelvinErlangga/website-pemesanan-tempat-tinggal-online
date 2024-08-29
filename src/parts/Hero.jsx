import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconTraveller from "assets/icons/ic_traveller.svg";
import IconCities from "assets/icons/ic_cities.svg";
import IconTreasure from "assets/icons/ic_treasures.svg";
import { Fade } from "react-awesome-reveal";

import Button from "elements/Button";

import numberFormat from "utils/numberFormat";

const Hero = (props) => {
  function showMostPopular() {
    window.scrollTo({
      top: props.refMostPopular.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <Fade triggerOnce>
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="fw-bold line-height-1 mb-3">
            Find perfect place, <br />
            escape daily routine
          </h1>
          <p className="mb-4 fw-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
            We provide everything you need to enjoy your moments with family. Book now for a memorable and hassle-free getaway.
          </p>
          <Button className="btn px-5" hasShadow isPrimary onclick={showMostPopular}>
            Show Me
          </Button>
          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col-auto" style={{ marginRight: 25 }}>
              <img width="32" height="32" src={IconTraveller} alt={`${props.data.travellers} Travellers`} />
              <h6 className="mt-3">
                {numberFormat(props.data.travellers)} <span className="text-gray-500 fw-light">Travellers</span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 25 }}>
              <img width="32" height="32" src={IconCities} alt={`${props.data.cities} Cities`} />
              <h6 className="mt-3">
                {numberFormat(props.data.cities)} <span className="text-gray-500 fw-light">Cities</span>
              </h6>
            </div>
            <div className="col-auto">
              <img width="32" height="32" src={IconTreasure} alt={`${props.data.treasures} Treasures`} />
              <h6 className="mt-3">
                {numberFormat(props.data.treasures)} <span className="text-gray-500 fw-light">Treasures</span>
              </h6>
            </div>
          </div>
        </div>

        <div style={{ width: 520, height: 410, position: "relative", marginLeft: "16rem", marginTop: "4rem" }}>
          <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute" style={{ top: "-40px", left: "-39px", zIndex: 1 }} />
          <img src={ImageHeroFrame} alt="Room with couches" className="img-fluid position-absolute" style={{ top: "0", right: "0" }} />
        </div>
      </div>
    </section>
    </Fade>
  );
};

export default Hero;
