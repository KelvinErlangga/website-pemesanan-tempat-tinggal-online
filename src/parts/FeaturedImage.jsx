import React from "react";
import { Fade } from "react-awesome-reveal";

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid">
        {data.map((item, index) => {
          return (
            <div key={`featuredimage-${index}`} className={`item ${index > 0 ? "column-5" : "column-7"} ${index > 0 ? "row-1" : "row-2"}`}>
              <Fade triggerOnce direction="up" cascade damping={0.4}>
                <div className="h-100">
                  <figure className="img-wrapper">
                    <img className="img-cover" src={item.url} alt={item._id} />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
