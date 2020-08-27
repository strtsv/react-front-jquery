import React from "react";

import i1 from "../assets/images/google-play-download-138x35.png";
import i2 from "../assets/images/appstore.svg";

class CTA extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default text-center">
        <div className="container">
          <h3>Get JobsFactory App for Your Mobile</h3>
          <p className="offset-top-20px">
            <span
              style={{
                maxWidth: "670px",
              }}
            >
              Searching for jobs has never been that easy. Now you can find job
              matched your career expectation, apply for jobs and receive
              feedback right on your mobile. Start your job search now!
            </span>
          </p>
          <div className="group">
            <a className="button button-primary button-fixed-size" href="#">
              <img src={i1} alt width={138} height={35} />
            </a>
            <a className="button button-primary button-fixed-size" href="#">
              <img src={i2} alt />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default CTA;
