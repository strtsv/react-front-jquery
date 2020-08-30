import React from "react";
import $ from "jquery";

import OwlCarousel from "react-owl-carousel";

import i from "../../assets/images/parallax-2.jpg";

import i1 from "../../assets/images/brand-1-inverse-183x44.png";
import i2 from "../../assets/images/brand-2-inverse-118x82.png";
import i3 from "../../assets/images/brand-3-inverse-137x39.png";
import i4 from "../../assets/images/brand-4-inverse-133x77.png";
import i5 from "../../assets/images/brand-5-inverse-153x30.png";
import i6 from "../../assets/images/brand-6-inverse-90x68.png";
import i7 from "../../assets/images/brand-7-inverse-112x43.png";
import i8 from "../../assets/images/brand-8-inverse-126x22.png";
import i9 from "../../assets/images/brand-9-inverse-158x33.png";
import i10 from "../../assets/images/brand-10-inverse-137x37.png";
import i11 from "../../assets/images/brand-11-inverse-84x59.png";
import i12 from "../../assets/images/brand-12-inverse-116x51.png";

const options = {
  items: 5,
  loop: false,
  autoplay: false,
  dots: true,
  nav: false,
  navText: [
    "<div class='owl-prev'><i class='fa fa-angle-left'></i></div>",
    "<div class='owl-next'><i class='fa fa-angle-right'></i></div>",
  ],
};

class Companies extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({ imageSrc: i });
  }
  render() {
    return (
      <section
        className="parallax-container section-md bg-primary bg-overlay-1 text-center"
        data-parallax-img={i}
        data-url={i}
        data-image-src={i}
      >
        <div className="parallax-content">
          <div className="container container-fullwidth">
            <h3>Companies We've Helped</h3>
            {}
            <div
              // className="owl-carousel owl-carousel-stretch"
              className="owl-carousel-stretch"
              data-autoplay="true"
              data-autoplay-timeout={4000}
              data-items={1}
              data-sm-items={2}
              data-md-items={3}
              data-lg-items={3}
              data-xl-items={5}
              data-xxl-items={6}
              data-dots="true"
              data-nav="false"
              data-stage-padding={2}
              data-loop="false"
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
                <a className="link-corporate" href="#">
                  <img src={i5} alt width={153} height={30} />
                </a>
                <a className="link-corporate" href="#">
                  <img src={i6} alt width={90} height={68} />
                </a>
                <a className="link-corporate" href="#">
                  <img src={i7} alt width={112} height={43} />
                </a>
                <a className="link-corporate" href="#">
                  <img src={i8} alt width={126} height={22} />
                </a>
                <a className="link-corporate" href="#">
                  <img src={i9} alt width={158} height={33} />
                </a>
                <a className="link-corporate" href="#">
                  <img src={i10} alt width={137} height={37} />
                </a>
                <a className="link-corporate" href="#">
                  <img src={i11} alt width={84} height={59} />
                </a>
                <a className="link-corporate" href="#">
                  <img src={i12} alt width={116} height={51} />
                </a>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Companies;
