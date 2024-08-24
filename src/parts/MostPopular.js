import Button from "elements/Button";
import React from "react";

const MostPopular = (props) => {
  return (
    <div>
      <section className="container" ref={props.refMostPopular}>
        <h4 className="mb-3">Most Popular</h4>
        <div className="row">
          <div className="container-grid">
            {props.data.map((item, index) => {
              return (
                <div key={`mostpopular-${index}`} className={`item column-4${index === 0 ? " row-2" : " row-1"}`}>
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}
                      <span className="">/{item.unit}</span>
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
      </section>
    </div>
  );
};

export default MostPopular;
