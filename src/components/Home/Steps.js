import React from "react";

class Steps extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default text-center">
        <div className="container">
          <h3>Just 3 Easy Steps to New Capabilities</h3>
          <ul className="list-linked">
            <li className="ll-item">
              <div className="icon ll-item-icon thin-icon-email-search">
                <svg
                  className="ll-item-icon-inner"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="-1 -1 102 102"
                >
                  <circle
                    cx={50}
                    cy={50}
                    r={50}
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <div className="ll-item-main">
                <h5 className="ll-item-title">
                  <a href="job-listing.html">Browse Jobs</a>
                </h5>
                <p>Easy search by category</p>
              </div>
            </li>
            <li className="ll-item">
              <div className="icon ll-item-icon mercury-icon-target-2">
                <svg
                  className="ll-item-icon-inner"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="-1 -1 102 102"
                >
                  <circle
                    cx={50}
                    cy={50}
                    r={50}
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <div className="ll-item-main">
                <h5 className="ll-item-title">
                  <a href="job-details.html">Find Your Vacancy</a>
                </h5>
                <p>Choose a suitable job</p>
              </div>
            </li>
            <li className="ll-item">
              <div className="icon ll-item-icon ll-item-icon-sm mercury-icon-e-mail-o">
                <svg
                  className="ll-item-icon-inner"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="-1 -1 102 102"
                >
                  <circle
                    cx={50}
                    cy={50}
                    r={50}
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <div className="ll-item-main">
                <h5 className="ll-item-title">
                  <a href="submit-resume.html">Submit Resume</a>
                </h5>
                <p>Get a personal job offer</p>
              </div>
            </li>
            <li className="ll-item">
              <div className="icon ll-item-icon mercury-icon-touch">
                <svg
                  className="ll-item-icon-inner"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="-1 -1 102 102"
                >
                  <circle
                    cx={50}
                    cy={50}
                    r={50}
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <div className="ll-item-main">
                <a
                  className="button button-sm button-primary-outline"
                  href="job-listing.html"
                >
                  Start Now
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Steps;
