import React from "react";
import $ from "jquery";

import "../assets/js/jquery.easing.1.3.js";
import "../assets/js/jquery.ui.totop.my.js";

// import "../assets/css/owl.carousel.css";

import "../assets/js/tmstickup.js";
import "../assets/js/parallax.js";
// import "../assets/js/jquery.rd-parallax.js";

import i1 from "../assets/images/logo-default-286x52.png";
import i2 from "../assets/images/logo-inverse-286x52.png";
import i3 from "../assets/images/home-1-748x528.png";

class Header extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $(".rd-navbar").TMStickUp({});
      $().UItoTop({
        easingType: "easeOutQuad",
        containerClass: "ui-to-top fa fa-angle-up",
      });
    });
  }
  render() {
    return (
      <header className="section page-header jumbotron-creative">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-fixed"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-xxl-layout="rd-navbar-static"
            data-xxl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
                    {}
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src={i1}
                        alt
                        width={143}
                        height={26}
                      />
                      <img
                        className="brand-logo-light"
                        src={i2}
                        alt
                        width={143}
                        height={26}
                      />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about-us.html">
                          For Candidates
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="job-listing.html"
                            >
                              Job Listing
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="job-listing-full.html"
                            >
                              Job Listing Full
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="companies.html"
                            >
                              Companies
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="companies-page.html"
                            >
                              Companies Page
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="job-details.html"
                            >
                              Job Details
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="submit-resume.html"
                            >
                              Submit Resume
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contact-us.html">
                          For Employers
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="post-a-job.html"
                            >
                              Post a Job
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="candidates.html"
                            >
                              Candidates
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="candidates-grid.html"
                            >
                              Candidates Grid
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="resume-page.html"
                            >
                              Resume Page
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="blog-post.html">
                          Pages
                        </a>
                        <ul className="rd-menu rd-navbar-megamenu">
                          <li className="rd-megamenu-item">
                            <h6 className="rd-megamenu-title">
                              <a href="pages-1.html">Pages 1</a>
                            </h6>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="about-us.html"
                                >
                                  About Us
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="contact-us.html"
                                >
                                  Contact Us
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="faq.html"
                                >
                                  FAQ
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="pricing-tables.html"
                                >
                                  Pricing Tables
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="testimonials.html"
                                >
                                  Testimonials
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="rd-megamenu-item">
                            <h6 className="rd-megamenu-title">
                              <a href="pages-2.html">Pages 2</a>
                            </h6>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="coming-soon.html"
                                >
                                  Coming Soon
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="maintenance.html"
                                >
                                  Maintenance
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="404.html"
                                >
                                  404
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="503.html"
                                >
                                  503
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="privacy-policy.html"
                                >
                                  Privacy Policy
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="search-results.html"
                                >
                                  Search results
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="rd-megamenu-item">
                            <h6 className="rd-megamenu-title">
                              <a href="elements.html">Elements</a>
                            </h6>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="typography.html"
                                >
                                  Typography
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="forms.html"
                                >
                                  Forms
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="buttons.html"
                                >
                                  Buttons
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="progress-bars.html"
                                >
                                  Progress Bars
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="tabs-and-accordions.html"
                                >
                                  Tabs and Accordions
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="tables.html"
                                >
                                  Tables
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="grid-system.html"
                                >
                                  Grid system
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="blog.html">
                          Blog
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="blog-post.html"
                            >
                              Blog post
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rd-navbar-aside">
                  <div className="rd-navbar-aside-item">
                    <button
                      className="button button-xs button-primary-outline button-icon button-icon-left rd-navbar-popup-toggle"
                      data-rd-navbar-toggle="#rd-navbar-register"
                    >
                      <span className="icon mdi mdi-account" />
                      Sign Up
                    </button>
                    <div
                      className="rd-navbar-popup bg-gray-100"
                      id="rd-navbar-register"
                    >
                      <h5 className="rd-navbar-popup-title">Sign Up</h5>
                      <form
                        className="rd-form rd-mailform form-compact"
                        data-form-output="form-output-global"
                        data-form-type="contact"
                        method="post"
                        action="bat/rd-mailform.php"
                      >
                        <div className="form-wrap">
                          <input
                            className="form-input"
                            id="rd-navbar-register-name"
                            type="text"
                            name="username"
                            data-constraints="@Required"
                          />
                          <label
                            className="form-label"
                            htmlFor="rd-navbar-register-name"
                          >
                            Username
                          </label>
                        </div>
                        <div className="form-wrap">
                          <input
                            className="form-input"
                            id="rd-navbar-register-email"
                            type="email"
                            name="email"
                            data-constraints="@Email @Required"
                          />
                          <label
                            className="form-label"
                            htmlFor="rd-navbar-register-email"
                          >
                            E-mail
                          </label>
                        </div>
                        <div className="form-wrap">
                          <input
                            className="form-input"
                            id="rd-navbar-register-password"
                            type="password"
                            name="password"
                            data-constraints="@Required"
                          />
                          <label
                            className="form-label"
                            htmlFor="rd-navbar-register-password"
                          >
                            Password
                          </label>
                        </div>
                        <div className="form-wrap">
                          <input
                            className="form-input"
                            id="rd-navbar-register-password-confirm"
                            type="password"
                            name="password-confirm"
                            data-constraints="@Required"
                          />
                          <label
                            className="form-label"
                            htmlFor="rd-navbar-register-password-confirm"
                          >
                            Confirm Password{" "}
                          </label>
                        </div>
                        <div className="form-wrap">
                          <button
                            className="button button-block button-primary"
                            type="submit"
                          >
                            Create an Account
                          </button>
                        </div>
                        <div className="form-wrap form-wrap-ally">
                          <div className="text-decoration-lines rd-navbar-popup-title">
                            <span className="text-decoration-lines-content">
                              or enter with
                            </span>
                          </div>
                        </div>
                        <div className="form-wrap form-wrap-ally">
                          <div className="button-group">
                            <a
                              className="button button-facebook button-icon button-icon-only button-winona"
                              href="#"
                              aria-label="Facebook"
                            >
                              <span className="icon mdi mdi mdi-facebook" />
                            </a>
                            <a
                              className="button button-twitter button-icon button-icon-only button-winona"
                              href="#"
                              aria-label="Twitter"
                            >
                              <span className="icon mdi mdi-twitter" />
                            </a>
                            <a
                              className="button button-google button-icon button-icon-only button-winona"
                              href="#"
                              aria-label="Google+"
                            >
                              <span className="icon mdi mdi-google" />
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="rd-navbar-aside-item">
                    <button
                      className="button button-xs button-primary button-icon button-icon-left rd-navbar-popup-toggle"
                      data-rd-navbar-toggle="#rd-navbar-login"
                    >
                      <span className="icon mdi mdi-import" />
                      Login
                    </button>
                    <div
                      className="rd-navbar-popup bg-gray-100"
                      id="rd-navbar-login"
                    >
                      <h5 className="rd-navbar-popup-title">Login</h5>
                      <form className="rd-form form-compact">
                        <div className="form-wrap">
                          <input
                            className="form-input"
                            id="rd-navbar-login-email"
                            type="email"
                            name="email"
                            data-constraints="@Email @Required"
                          />
                          <label
                            className="form-label"
                            htmlFor="rd-navbar-login-email"
                          >
                            E-mail
                          </label>
                        </div>
                        <div className="form-wrap">
                          <input
                            className="form-input"
                            id="rd-navbar-login-password"
                            type="password"
                            name="password"
                            data-constraints="@Required"
                          />
                          <label
                            className="form-label"
                            htmlFor="rd-navbar-login-password"
                          >
                            Password
                          </label>
                        </div>
                        <div className="form-wrap">
                          <button
                            className="button button-block button-primary"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="jumbotron-creative-inner">
          <div className="container">
            <div className="jumbotron-creative-main">
              <h2 className="jumbotron-creative-title">
                Start Building Your Own Career Now
              </h2>
              <div className="form-layout-search-outer">
                <form className="form-layout-search form-lg">
                  <div className="form-wrap form-wrap-icon">
                    <input
                      className="form-input"
                      id="form-keywords"
                      type="text"
                      name="keywords"
                      data-constraints="@Required"
                    />
                    <label className="form-label" htmlFor="form-keywords">
                      Keywords
                    </label>
                    <span className="icon fl-bigmug-line-circular224" />
                  </div>
                  <div className="form-wrap form-wrap-icon form-wrap-select">
                    {}
                    <select
                      className="form-input select"
                      id="form-region"
                      data-placeholder="All Regions"
                      name="region"
                      data-minimum-results-for-search="Infinity"
                      data-constraints="@Selected"
                    >
                      <option label="All Regions" />
                      <option value={1}>Seattle</option>
                      <option value={2}>Miami</option>
                      <option value={3}>Chicago</option>
                    </select>
                    <span className="icon fl-bigmug-line-big104" />
                  </div>
                  <div className="form-wrap form-wrap-button form-wrap-button-icon-only">
                    <button
                      className="button button-lg button-primary button-icon-only"
                      type="submit"
                      aria-label="search"
                    >
                      <span className="icon icon-4 fl-bigmug-line-search74" />
                    </button>
                  </div>
                </form>
              </div>
              <p className="big text-gray-800">
                We offer <a href="job-listing.html">2,989 job vacancies</a>{" "}
                right now!
              </p>
            </div>
          </div>
          <div className="jc-decoration">
            <div className="jc-decoration-item jc-decoration-item-1">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1446 970"
                width={1446}
                height={970}
                preserveAspectRatio="none"
              >
                <path d="M-0.000,33.000 C-0.000,33.000 80.000,54.000 113.000,83.000 C146.000,112.000 147.000,152.000 183.000,174.000 C219.000,196.000 288.000,172.000 334.000,193.000 C380.000,214.000 379.000,282.000 427.000,317.000 C475.000,352.000 548.000,336.000 588.000,371.000 C628.000,406.000 614.000,483.000 647.000,513.000 C680.000,543.000 786.000,537.000 841.000,587.000 C896.000,637.000 885.000,739.000 932.000,776.000 C979.000,813.000 1026.000,796.000 1069.000,817.000 C1112.000,838.000 1135.000,865.000 1189.000,893.000 C1243.000,921.000 1433.000,970.000 1433.000,970.000 L1446.000,0.000 L-0.000,33.000 Z" />
              </svg>
            </div>
            <div className="jc-decoration-item jc-decoration-item-2">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1446 970"
                width={1446}
                height={970}
                preserveAspectRatio="none"
              >
                <path d="M-0.000,33.000 C-0.000,33.000 80.000,54.000 113.000,83.000 C146.000,112.000 147.000,152.000 183.000,174.000 C219.000,196.000 288.000,172.000 334.000,193.000 C380.000,214.000 379.000,282.000 427.000,317.000 C475.000,352.000 548.000,336.000 588.000,371.000 C628.000,406.000 614.000,483.000 647.000,513.000 C680.000,543.000 786.000,537.000 841.000,587.000 C896.000,637.000 885.000,739.000 932.000,776.000 C979.000,813.000 1026.000,796.000 1069.000,817.000 C1112.000,838.000 1135.000,865.000 1189.000,893.000 C1243.000,921.000 1433.000,970.000 1433.000,970.000 L1446.000,0.000 L-0.000,33.000 Z" />
              </svg>
            </div>
            <img
              className="jc-decoration-image"
              src={i3}
              alt
              width={748}
              height={528}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
