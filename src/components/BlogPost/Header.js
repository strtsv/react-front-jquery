import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic"
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
                        src="images/logo-default-286x52.png"
                        alt
                        width={143}
                        height={26}
                      />
                      <img
                        className="brand-logo-light"
                        src="images/logo-inverse-286x52.png"
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
                        <a className="rd-nav-link" href="#">
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
                        <a className="rd-nav-link" href="#">
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
                        <a className="rd-nav-link" href="#">
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
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="blog.html">
                          Blog
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item active">
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
      </header>
    );
  }
}

export default Header;
