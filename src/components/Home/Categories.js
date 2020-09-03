import React from "react";

import OwlCarousel from "react-owl-carousel";
import "../../assets/css/owl.carousel.css";

const options = {
  loop: true,
  autoplay: false,
  dots: true,
  nav: false,
  items: 5,
};

class Categories extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default text-center">
        <div className="container container-fullwidth">
          <h3>Popular Categories</h3>
          {}
          <div
            className="owl-carousel-stretch"
            // className="owl-carousel owl-carousel-stretch"
            data-items={1}
            data-sm-items={2}
            data-md-items={3}
            data-lg-items={3}
            data-xl-items={5}
            data-xxl-items={6}
            data-dots="true"
            data-nav="false"
            data-stage-padding={1}
            data-loop="false"
            data-margin={26}
            data-md-margin={20}
            data-lg-margin={26}
            data-autoplay="false"
            data-autoplay-timeout={3500}
            data-mouse-drag="false"
          >
            <OwlCarousel {...options}>
              <a className="box-creative" href="job-listing-full.html">
                <div className="box-creative-inner">
                  <div className="icon box-creative-icon mercury-icon-calc" />
                  <p className="box-creative-title">Accounting & Finance</p>
                  <p>2590 open positions</p>
                </div>
                <div className="box-creative-dummy" />
              </a>
              <a className="box-creative" href="job-listing-full.html">
                <div className="box-creative-inner">
                  <div className="icon box-creative-icon mercury-icon-partners" />
                  <p className="box-creative-title">Sales & Marketing</p>
                  <p>1214 open positions</p>
                </div>
                <div className="box-creative-dummy" />
              </a>
              <a className="box-creative" href="job-listing-full.html">
                <div className="box-creative-inner">
                  <div className="icon box-creative-icon mercury-icon-globe" />
                  <p className="box-creative-title">Information Technology </p>
                  <p>3213 open positions</p>
                </div>
                <div className="box-creative-dummy" />
              </a>
              <a className="box-creative" href="job-listing-full.html">
                <div className="box-creative-inner">
                  <div className="icon box-creative-icon mercury-icon-cup" />
                  <p className="box-creative-title">Food Service</p>
                  <p>3213 open positions</p>
                </div>
                <div className="box-creative-dummy" />
              </a>
              <a className="box-creative" href="job-listing-full.html">
                <div className="box-creative-inner">
                  <div className="icon box-creative-icon mercury-icon-presentation-2" />
                  <p className="box-creative-title">Design & Art </p>
                  <p>3213 open positions</p>
                </div>
                <div className="box-creative-dummy" />
              </a>
              <a className="box-creative" href="job-listing-full.html">
                <div className="box-creative-inner">
                  <div className="icon box-creative-icon thin-icon-love" />
                  <p className="box-creative-title">Healthcare</p>
                  <p>3213 open positions</p>
                </div>
                <div className="box-creative-dummy" />
              </a>
              <a className="box-creative" href="job-listing-full.html">
                <div className="box-creative-inner">
                  <div className="icon box-creative-icon thin-icon-car" />
                  <p className="box-creative-title">Automotive</p>
                  <p>3813 open positions</p>
                </div>
                <div className="box-creative-dummy" />
              </a>
              <a className="box-creative" href="job-listing-full.html">
                <div className="box-creative-inner">
                  <div className="icon box-creative-icon mercury-icon-house" />
                  <p className="box-creative-title">Construction</p>
                  <p>1215 open positions</p>
                </div>
                <div className="box-creative-dummy" />
              </a>
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Categories;
