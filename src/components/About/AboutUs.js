import React from "react";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="section breadcrumbs-custom">
        <div className="breadcrumbs-custom-main bg-image bg-primary">
          <div className="container">
            <h3 className="breadcrumbs-custom-title">About Us</h3>
          </div>
        </div>
        <div className="breadcrumbs-custom-aside">
          <div className="container">
            <ul className="breadcrumbs-custom-path">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li className="active">About Us</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
