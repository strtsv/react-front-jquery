import React from "react";

import i1 from "../../assets/images/company-1-45x45.png";
import i2 from "../../assets/images/company-2-38x49.png";
import i3 from "../../assets/images/company-3-46x52.png";
import i4 from "../../assets/images/company-4-50x49.png";
import i5 from "../../assets/images/company-5-48x44.png";

class Jobs extends React.Component {
  render() {
    return (
      <section className="section section-md bg-gray-100">
        <div className="container">
          <div className="row row-40">
            <div className="col-12 text-center">
              <h3>Recent Jobs</h3>
            </div>
            <div className="col-12">
              <div className="table-job-offers-outer">
                <table className="table-job-offers table-responsive">
                  <tbody>
                    <tr>
                      <td className="table-job-offers-date">
                        <span>1 hour ago</span>
                      </td>
                      <td className="table-job-offers-main">
                        {}
                        <article className="company-light">
                          <figure className="company-light-figure">
                            <img
                              className="company-light-image"
                              src={i1}
                              alt
                              width={45}
                              height={45}
                            />
                          </figure>
                          <div className="company-light-main">
                            <h5 className="company-light-title">
                              <a href="job-details.html">Senior UX Designer</a>
                            </h5>
                            <p className="text-color-default">StarArt</p>
                          </div>
                        </article>
                      </td>
                      <td className="table-job-offers-meta">
                        <div className="object-inline">
                          <span className="icon icon-sm text-primary mdi mdi-cash" />
                          <span>$25–$35 \ hour</span>
                        </div>
                      </td>
                      <td className="table-job-offers-meta">
                        <div className="object-inline">
                          <span className="icon icon-1 text-primary mdi mdi-map-marker" />
                          <span>New York, NY, USA</span>
                        </div>
                      </td>
                      <td className="table-job-offers-badge">
                        <span className="badge">Full Time</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-job-offers-date">
                        <span>1 day ago</span>
                      </td>
                      <td className="table-job-offers-main">
                        {}
                        <article className="company-light">
                          <figure className="company-light-figure">
                            <img
                              className="company-light-image"
                              src={i2}
                              alt
                              width={38}
                              height={49}
                            />
                          </figure>
                          <div className="company-light-main">
                            <h5 className="company-light-title">
                              <a href="job-details.html">Marketing Director</a>
                            </h5>
                            <p className="text-color-default">UpBook</p>
                          </div>
                        </article>
                      </td>
                      <td className="table-job-offers-meta">
                        <div className="object-inline">
                          <span className="icon icon-sm text-primary mdi mdi-cash" />
                          <span>$45–$53 \ hour</span>
                        </div>
                      </td>
                      <td className="table-job-offers-meta">
                        <div className="object-inline">
                          <span className="icon icon-1 text-primary mdi mdi-map-marker" />
                          <span>Saint-Etienne, France</span>
                        </div>
                      </td>
                      <td className="table-job-offers-badge">
                        <span className="badge badge-secondary">Part Time</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-job-offers-date">
                        <span>1 day ago</span>
                      </td>
                      <td className="table-job-offers-main">
                        {}
                        <article className="company-light">
                          <figure className="company-light-figure">
                            <img
                              className="company-light-image"
                              src={i3}
                              alt
                              width={46}
                              height={52}
                            />
                          </figure>
                          <div className="company-light-main">
                            <h5 className="company-light-title">
                              <a href="job-details.html">Front End Developer</a>
                            </h5>
                            <p className="text-color-default">MediaLab</p>
                          </div>
                        </article>
                      </td>
                      <td className="table-job-offers-meta">
                        <div className="object-inline">
                          <span className="icon icon-sm text-primary mdi mdi-cash" />
                          <span>$25–$43 \ hour</span>
                        </div>
                      </td>
                      <td className="table-job-offers-meta">
                        <div className="object-inline">
                          <span className="icon icon-1 text-primary mdi mdi-map-marker" />
                          <span>Derry, United Kingdom</span>
                        </div>
                      </td>
                      <td className="table-job-offers-badge">
                        <span className="badge badge-tertiary">Freelance</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-job-offers-date">
                        <span>1 day ago</span>
                      </td>
                      <td className="table-job-offers-main">
                        {}
                        <article className="company-light">
                          <figure className="company-light-figure">
                            <img
                              className="company-light-image"
                              src={i4}
                              alt
                              width={50}
                              height={49}
                            />
                          </figure>
                          <div className="company-light-main">
                            <h5 className="company-light-title">
                              <a href="job-details.html">
                                Social Media Executive
                              </a>
                            </h5>
                            <p className="text-color-default">Creator</p>
                          </div>
                        </article>
                      </td>
                      <td className="table-job-offers-meta">
                        <div className="object-inline">
                          <span className="icon icon-sm text-primary mdi mdi-cash" />
                          <span>$15–$43 \ hour</span>
                        </div>
                      </td>
                      <td className="table-job-offers-meta">
                        <div className="object-inline">
                          <span className="icon icon-1 text-primary mdi mdi-map-marker" />
                          <span>Los Angeles, CA, USA</span>
                        </div>
                      </td>
                      <td className="table-job-offers-badge">
                        <span className="badge">Full Time</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-job-offers-date">
                        <span>1 day ago</span>
                      </td>
                      <td className="table-job-offers-main">
                        {}
                        <article className="company-light">
                          <figure className="company-light-figure">
                            <img
                              className="company-light-image"
                              src={i5}
                              alt
                              width={48}
                              height={44}
                            />
                          </figure>
                          <div className="company-light-main">
                            <h5 className="company-light-title">
                              <a href="job-details.html">
                                Restaurant Dishwasher
                              </a>
                            </h5>
                            <p className="text-color-default">Camping</p>
                          </div>
                        </article>
                      </td>
                      <td className="table-job-offers-meta">
                        <div className="object-inline">
                          <span className="icon icon-sm text-primary mdi mdi-cash" />
                          <span>$10–$20 \ hour</span>
                        </div>
                      </td>
                      <td className="table-job-offers-meta">
                        <div className="object-inline">
                          <span className="icon icon-1 text-primary mdi mdi-map-marker" />
                          <span>Stockholm, Sweden</span>
                        </div>
                      </td>
                      <td className="table-job-offers-badge">
                        <span className="badge badge-secondary">Part Time</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 text-center">
              <a
                className="button button-lg button-primary-outline"
                href="job-listing-full.html"
              >
                Show More Jobs
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Jobs;
