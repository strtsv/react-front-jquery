import React from "react";
import $ from "jquery";

import i from "../../assets/images/parallax-1.jpg";

class Counters extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({ imageSrc: i });
  }
  render() {
    return (
      <section
        className="parallax-container section-md bg-primary bg-overlay-1 text-center"
        data-parallax-img={i}
        data-image-src={i}
      >
        <div className="parallax-content">
          <div className="container">
            <div className="row row-30">
              <div className="col-6 col-md-3">
                {}
                <article className="counter-classic">
                  <div className="counter-classic-main">
                    <div className="counter">136</div>
                  </div>
                  <div className="counter-classic-divider" />
                  <h6 className="counter-classic-title">Jobs Every Day</h6>
                </article>
              </div>
              <div className="col-6 col-md-3">
                {}
                <article className="counter-classic">
                  <div className="counter-classic-main">
                    <div className="counter">50</div>
                    <span>k</span>
                  </div>
                  <div className="counter-classic-divider" />
                  <h6 className="counter-classic-title">Current Resumes</h6>
                </article>
              </div>
              <div className="col-6 col-md-3">
                {}
                <article className="counter-classic">
                  <div className="counter-classic-main">
                    <div className="counter">764</div>
                  </div>
                  <div className="counter-classic-divider" />
                  <h6 className="counter-classic-title">Companies</h6>
                </article>
              </div>
              <div className="col-6 col-md-3">
                {}
                <article className="counter-classic">
                  <div className="counter-classic-main">
                    <span>9.5k</span>
                  </div>
                  <div className="counter-classic-divider" />
                  <h6 className="counter-classic-title">
                    Registered Vacancies
                  </h6>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Counters;
