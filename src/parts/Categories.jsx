import React from "react";
import Button from "elements/Button";
import { Fade } from "react-awesome-reveal";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <Fade direction="up" triggerOnce key={`fade-${index1}`}>
        <section className="container" key={`category-${index1}`}>
          <h4 className="mb-3">{category.name}</h4>
          <div className="container-grid">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">There is no property in this category</div>
              </div>
            ) : (
              category.items.map((item, index2) => {
                return (
                  <div className="item column-3 row-1" key={`category-${index1}-item-${index2}`}>
                    <div className="card card-categories">
                      {item.isPopular && (
                        <div className="tag">
                          Popular <span className="fw-light">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img src={item.imageUrl} alt={item.name} className="img-cover" />
                      </figure>
                      <div className="meta-wrapper mx-3 mb-2">
                        <Button type="link" className="stretched-link d-block text-gray-800" href={`/properties/${item._id}`}>
                          <h5 className="h4">{item.name}</h5>
                        </Button>
                        <span className="text-gray-500">
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </Fade>
    );
  });
}
