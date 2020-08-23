import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-creative context-dark">
        <div className="footer-creative-main">
          <div className="container">
            <div className="row row-50 justify-content-lg-between">
              <div className="col-lg-5 col-xl-4">
                <p className="footer-creative-title">Quick Links</p>
                <div className="footer-creative-divider" />
                <div className="row row-narrow row-15">
                  <div className="col-6">
                    <ul className="list-marked-1">
                      <li>
                        <a href="job-listing-full.html">Browse Jobs</a>
                      </li>
                      <li>
                        <a href="job-listing.html">Browse Categories</a>
                      </li>
                      <li>
                        <a href="submit-resume.html">Submit Resume</a>
                      </li>
                      <li>
                        <a href="companies.html">Companies</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="list-marked-1">
                      <li>
                        <a href="post-a-job.html">Post a Job</a>
                      </li>
                      <li>
                        <a href="candidates-grid.html">Find a Candidate</a>
                      </li>
                      <li>
                        <a href="pricing-tables.html">Pricing Table</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <p className="footer-creative-title">Recent News posts</p>
                <div className="footer-creative-divider" />
                <div className="post-line-group">
                  {}
                  <a className="post-line" href="blog-post.html">
                    <time className="post-line-time" dateTime={2019}>
                      <span className="post-line-time-day">25</span>
                      <span className="post-line-time-month">April</span>
                    </time>
                    <p className="post-line-text">
                      Canada adds 12,500 jobs in modest July rebound
                    </p>
                  </a>
                  {}
                  <a className="post-line" href="blog-post.html">
                    <time className="post-line-time" dateTime={2019}>
                      <span className="post-line-time-day">14</span>
                      <span className="post-line-time-month">April</span>
                    </time>
                    <p className="post-line-text">
                      Outsourcing vs. In-House Digital Marketing
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <p className="footer-creative-title">Jobs in Popular cities</p>
                <div className="footer-creative-divider" />
                <div className="row row-narrow row-15">
                  <div className="col-6">
                    <ul className="list list-1 list-icons">
                      <li>
                        <a href="job-listing-full.html">
                          <span className="icon icon-sm mdi mdi-map-marker" />
                          <span>San Francisco</span>
                        </a>
                      </li>
                      <li>
                        <a href="job-listing-full.html">
                          <span className="icon icon-sm mdi mdi-map-marker" />
                          <span>Washington</span>
                        </a>
                      </li>
                      <li>
                        <a href="job-listing-full.html">
                          <span className="icon icon-sm mdi mdi-map-marker" />
                          <span>Sacramento</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="list list-1 list-icons">
                      <li>
                        <a href="job-listing-full.html">
                          <span className="icon icon-sm mdi mdi-map-marker" />
                          <span>New York</span>
                        </a>
                      </li>
                      <li>
                        <a href="job-listing-full.html">
                          <span className="icon icon-sm mdi mdi-map-marker" />
                          <span>Ontario</span>
                        </a>
                      </li>
                      <li>
                        <a href="job-listing-full.html">
                          <span className="icon icon-sm mdi mdi-map-marker" />
                          <span>Chicago</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-creative-aside">
          <div className="container">
            <p className="rights">
              <span>JobsFactory</span>
              <span> © </span>
              <span className="copyright-year" />
              <span> </span>
              <a href="privacy-policy.html">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
