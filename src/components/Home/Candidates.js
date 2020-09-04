import React from "react";

import OwlCarousel from "react-owl-carousel";
import "../../assets/css/owl.carousel.css";

import i1 from "../../assets/images/candidates-grid-1-266x219.jpg";
import i2 from "../../assets/images/candidates-grid-2-266x219.jpg";
import i3 from "../../assets/images/candidates-grid-3-266x219.jpg";
import i4 from "../../assets/images/candidates-grid-4-266x219.jpg";

const options = {
  loop: false,
  autoplay: false,
  dots: false,
  nav: false,
  items: 4,
  navText: [
    "<div class='owl-prev'><i class='fa fa-angle-left'></i></div>",
    "<div class='owl-next'><i class='fa fa-angle-right'></i></div>",
  ],
};

class Candidates extends React.Component {
  render() {
    return (
      <section className="section section-sm bg-default">
        <div className="container">
          <h3 className="text-center">New Candidates</h3>
          <div
            className="owl-carousel-profile"
            // className="owl-carousel owl-carousel-profile"
            data-items={1}
            data-sm-items={2}
            data-md-items={3}
            data-lg-items={4}
            data-dots="true"
            data-nav="false"
            data-stage-padding={0}
            data-loop="false"
            data-fade="true"
            data-margin={30}
            data-mouse-drag="false"
          >
            {}
            <OwlCarousel {...options}>
              <a className="profile-classic" href="resume-page.html">
                <figure className="profile-classic-figure">
                  <img
                    className="profile-classic-image"
                    src={i1}
                    alt
                    width={266}
                    height={219}
                  />
                </figure>
                <div className="profile-classic-main">
                  <h5 className="profile-classic-name">Amanda Cook</h5>
                  <ul className="profile-classic-list">
                    <li>
                      <span className="icon mdi mdi-map-marker" />
                      <span>Los Angeles, California</span>
                    </li>
                    <li>
                      <span className="icon mdi mdi-account" />
                      <span>Junior Web Designer</span>
                    </li>
                  </ul>
                </div>
              </a>
              {}
              <a className="profile-classic" href="resume-page.html">
                <figure className="profile-classic-figure">
                  <img
                    className="profile-classic-image"
                    src={i2}
                    alt
                    width={266}
                    height={219}
                  />
                </figure>
                <div className="profile-classic-main">
                  <h5 className="profile-classic-name">Kevin Parker</h5>
                  <ul className="profile-classic-list">
                    <li>
                      <span className="icon mdi mdi-map-marker" />
                      <span>Seattle, Washington</span>
                    </li>
                    <li>
                      <span className="icon mdi mdi-account" />
                      <span>HR Manager</span>
                    </li>
                  </ul>
                </div>
              </a>
              {}
              <a className="profile-classic" href="resume-page.html">
                <figure className="profile-classic-figure">
                  <img
                    className="profile-classic-image"
                    src={i3}
                    alt
                    width={266}
                    height={219}
                  />
                </figure>
                <div className="profile-classic-main">
                  <h5 className="profile-classic-name">Sandy Williams</h5>
                  <ul className="profile-classic-list">
                    <li>
                      <span className="icon mdi mdi-map-marker" />
                      <span>Miami, Florida</span>
                    </li>
                    <li>
                      <span className="icon mdi mdi-account" />
                      <span>Sales Manager</span>
                    </li>
                  </ul>
                </div>
              </a>
              {}
              <a className="profile-classic" href="resume-page.html">
                <figure className="profile-classic-figure">
                  <img
                    className="profile-classic-image"
                    src={i4}
                    alt
                    width={266}
                    height={219}
                  />
                </figure>
                <div className="profile-classic-main">
                  <h5 className="profile-classic-name">James Johnson</h5>
                  <ul className="profile-classic-list">
                    <li>
                      <span className="icon mdi mdi-map-marker" />
                      <span>Boston, Massachusetts</span>
                    </li>
                    <li>
                      <span className="icon mdi mdi-account" />
                      <span>Programmer</span>
                    </li>
                  </ul>
                </div>
              </a>
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Candidates;
