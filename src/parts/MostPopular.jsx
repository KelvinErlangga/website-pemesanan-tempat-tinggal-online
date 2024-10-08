import Button from "elements/Button";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function MostPopular(props) {
  return (
    <section className="container" ref={props.refMostPopular}>
      <Fade triggerOnce direction="up" cascade damping={0.4}>
        <h4 className="mb-4">Most Popular</h4>
        <div className="row">
          <div className="container-grid">
            {props.data.map((item, index) => {
              return (
                <div key={`mostpopular-${index}`} className={`item column-4${index === 0 ? " row-2" : " row-1"}`}>
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}
                      <span className="fw-light">/{item.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <img src={item.imageUrl} alt={item.name} className="img-cover" />
                    </figure>
                    <div className="meta-wrapper">
                      <Button type="link" className="stretched-link d-block text-white" href={`/properties/${item._id}`}>
                        <h5>{item.name}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </section>
  );
}
