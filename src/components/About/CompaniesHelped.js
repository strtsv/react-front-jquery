import React from "react";

import OwlCarousel from "react-owl-carousel";
import "../../assets/css/owl.carousel.css";

import i1 from "../../assets/images/brand-1-183x44.png";
import i2 from "../../assets/images/brand-2-118x82.png";
import i3 from "../../assets/images/brand-3-137x39.png";
import i4 from "../../assets/images/brand-4-133x77.png";

const options = {
  loop: false,
  autoplay: false,
  dots: true,
  nav: false,
  items: 3,
  navText: [],
};

class CompaniesHelped extends React.Component {
  render() {
    return (
      <section className="section section-md text-center">
        <div className="container">
          <h3>Companies We've Helped</h3>
          {}
          <div
            className="owl-carousel-stretch"
            // className="owl-carousel owl-carousel-stretch"
            data-autoplay="true"
            data-autoplay-speed={3500}
            data-items={1}
            data-sm-items={2}
            data-md-items={3}
            data-lg-items={4}
            data-dots="true"
            data-dots-each={2}
            data-nav="false"
            data-stage-padding="2px"
            data-loop="true"
            data-margin={30}
            data-mouse-drag="false"
          >
            <OwlCarousel {...options}>
              <a className="link-corporate" href="#">
                <img src={i1} alt width={183} height={44} />
              </a>
              <a className="link-corporate" href="#">
                <img src={i2} alt width={118} height={82} />
              </a>
              <a className="link-corporate" href="#">
                <img src={i3} alt width={137} height={39} />
              </a>
              <a className="link-corporate" href="#">
                <img src={i4} alt width={133} height={77} />
              </a>
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default CompaniesHelped;
