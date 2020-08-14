import React from "react";

class Pricing extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default">
        <div className="container">
          <h3 className="text-center">Pricing</h3>
          <div className="row row-50 justify-content-center">
            <div className="col-md-6 col-lg-4">
              {}
              <article className="pt pt-classic">
                <div className="pt-classic-header">
                  <div className="pt-classic-item">
                    <p className="pt-title">Startup</p>
                    <span className="badge">7 Days Free</span>
                  </div>
                  <p className="pt-price">
                    <span className="pt-price-small pt-price-currency">$</span>
                    <span>59</span>
                    <span className="pt-price-small">00</span>
                  </p>
                </div>
                <div className="pt-classic-main">
                  <ul className="pt-classic-features">
                    <li>Post 8 Jobs</li>
                    <li>5 Highlighted Job Posts</li>
                    <li>Browse Your Job Listings</li>
                    <li>Access to Job Posting Stats</li>
                    <li>Email Support</li>
                    <li>Jobs Expire In 90 Days</li>
                  </ul>
                  <a className="button button-primary-outline" href="#">
                    Get started
                  </a>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-lg-4">
              {}
              <article className="pt pt-classic">
                <div className="pt-classic-header">
                  <div className="pt-classic-item">
                    <p className="pt-title text-tertiary">Company</p>
                  </div>
                  <p className="pt-price">
                    <span className="pt-price-small pt-price-currency">$</span>
                    <span>89</span>
                    <span className="pt-price-small">00</span>
                  </p>
                </div>
                <div className="pt-classic-main">
                  <ul className="pt-classic-features">
                    <li>Post 28 Jobs</li>
                    <li>10 Highlighted Job Posts</li>
                    <li>Edit Your Job Listings</li>
                    <li>Access to Job Posting Stats</li>
                    <li>Email and Phone Support</li>
                    <li>Jobs Expire In 180 Days</li>
                  </ul>
                  <a className="button button-primary-outline" href="#">
                    Get started
                  </a>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-lg-4">
              {}
              <article className="pt pt-classic">
                <div className="pt-classic-header">
                  <div className="pt-classic-item">
                    <p className="pt-title text-secondary">Enterprise</p>
                  </div>
                  <p className="pt-price">
                    <span className="pt-price-small pt-price-currency">$</span>
                    <span>199</span>
                    <span className="pt-price-small">00</span>
                  </p>
                </div>
                <div className="pt-classic-main">
                  <ul className="pt-classic-features">
                    <li>Post 35 Jobs</li>
                    <li>15 Highlighted Job Posts</li>
                    <li>Replace Your Job Listings</li>
                    <li>Access to Job Posting Stats</li>
                    <li>24/7 Support</li>
                    <li>Jobs Expire In 250 Days</li>
                  </ul>
                  <a className="button button-primary-outline" href="#">
                    Get started
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing;
