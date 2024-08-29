import React from "react";
import { Fade } from "react-awesome-reveal";

export default function ThingsToDo({ data }) {
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
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag">
                          Popular <span className="fw-light">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img src={item.imageUrl} alt={item.name} className="img-cover" />
                      </figure>
                      <div className="meta-wrapper">
                          <h5 className="h4">{item.name}</h5>
                        <span className="text-gray-500">
                          {item.type}
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
