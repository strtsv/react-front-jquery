import React from "react";
import $ from "jquery";

import OwlCarousel from "react-owl-carousel";

import i from "../../assets/images/bg-image-7.jpg";

import i1 from "../../assets/images/user-2-73x73.jpg";
import i2 from "../../assets/images/user-1-73x73.jpg";
import i3 from "../../assets/images/user-4-73x73.jpg";

const options = {
  items: 2,
  loop: false,
  autoplay: false,
  dots: true,
  nav: false,
  navText: [
    "<div class='owl-prev'><i class='fa fa-angle-left'></i></div>",
    "<div class='owl-next'><i class='fa fa-angle-right'></i></div>",
  ],
};

class Stories extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $(".parallax-container").parallax({ imageSrc: i });
    });
  }
  render() {
    return (
      <section
        className="parallax-container section-md bg-primary bg-overlay-1 text-center"
        data-image-src={i}
        data-parallax-img={i}
        data-url={i}
        data-speed="0.7"
      >
        <div className="parallax-content">
          <div className="container">
            <h3>Success Stories </h3>
            {}
            <div
              // className="owl-carousel"
              data-items={1}
              data-md-items={2}
              data-dots="true"
              data-nav="false"
              data-stage-padding={0}
              data-loop="false"
              data-margin={30}
              data-autoplay="true"
              data-mouse-drag="false"
            >
              <OwlCarousel {...options}>
                <blockquote className="quote-mary">
                  <div className="quote-mary-main">
                    <svg
                      className="quote-mary-mark"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 36 28"
                      width={38}
                      height={28}
                    >
                      <path d="M13,0l-2.4,13.3H15V28H0V13.1L4,0H13z M34,0l-2.4,13.3H36V28H20.9V13.1L25,0H34z" />
                    </svg>
                    <div className="quote-mary-text">
                      <p>
                        If I didn’t find JobsFactory I’m pretty sure I’d be
                        nowhere, they helped me find a job in less than 2 days
                        and the job is amazing. Thank you!
                      </p>
                    </div>
                  </div>
                  <div className="quote-mary-meta">
                    <img
                      className="quote-mary-avatar"
                      src={i1}
                      alt
                      width={73}
                      height={73}
                    />
                    <div className="quote-mary-info">
                      <cite className="quote-mary-cite heading-5">
                        Karen Sanders
                      </cite>
                      <p className="quote-mary-subtitle">Marketing Director</p>
                    </div>
                  </div>
                </blockquote>
                <blockquote className="quote-mary">
                  <div className="quote-mary-main">
                    <svg
                      className="quote-mary-mark"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 36 28"
                      width={38}
                      height={28}
                    >
                      <path d="M13,0l-2.4,13.3H15V28H0V13.1L4,0H13z M34,0l-2.4,13.3H36V28H20.9V13.1L25,0H34z" />
                    </svg>
                    <div className="quote-mary-text">
                      <p>
                        Within a couple of days after posting a CV, I had
                        possible employers contacting me. After several
                        interviews, I decided to accept a position located
                        nearby.
                      </p>
                    </div>
                  </div>
                  <div className="quote-mary-meta">
                    <img
                      className="quote-mary-avatar"
                      src={i2}
                      alt
                      width={73}
                      height={73}
                    />
                    <div className="quote-mary-info">
                      <cite className="quote-mary-cite heading-5">
                        Walter Williams
                      </cite>
                      <p className="quote-mary-subtitle">HR Managers</p>
                    </div>
                  </div>
                </blockquote>
                <blockquote className="quote-mary">
                  <div className="quote-mary-main">
                    <svg
                      className="quote-mary-mark"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 36 28"
                      width={38}
                      height={28}
                    >
                      <path d="M13,0l-2.4,13.3H15V28H0V13.1L4,0H13z M34,0l-2.4,13.3H36V28H20.9V13.1L25,0H34z" />
                    </svg>
                    <div className="quote-mary-text">
                      <p>
                        I found a job as a Web Developer and applied through my
                        iPhone with the JobsFactory website! It’s very easy to
                        search for jobs and apply here!
                      </p>
                    </div>
                  </div>
                  <div className="quote-mary-meta">
                    <img
                      className="quote-mary-avatar"
                      src={i3}
                      alt
                      width={73}
                      height={73}
                    />
                    <div className="quote-mary-info">
                      <cite className="quote-mary-cite heading-5">
                        Julia Smith
                      </cite>
                      <p className="quote-mary-subtitle">Web Developer</p>
                    </div>
                  </div>
                </blockquote>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Stories;
