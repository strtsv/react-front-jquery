import React from "react";

import i from "../../assets/images/home-2-540x413.jpg";

class Welcome extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default text-center">
        <div className="container">
          <h3>
            Welcome to <span className="text-primary">Jobs</span>Factory
          </h3>
          <p className="text-spacing-05">
            A place where leading employers are already looking for your talent
            and experience.
          </p>
          <div className="row row-50 justify-content-center align-items-center text-left">
            <div className="col-md-10 col-lg-6">
              <figure className="figure-responsive block-5">
                <img src={i} alt width={540} height={413} />
              </figure>
            </div>
            <div className="col-md-10 col-lg-6">
              <div className="row row-50 row-xl-70">
                <div className="col-sm-6">
                  {}
                  <article className="box-line box-line_sm">
                    <div className="box-line-inner">
                      <div className="box-line-icon icon mercury-icon-group" />
                      <h5 className="box-line-title">
                        More than 3.8 million visitors every day
                      </h5>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6">
                  {}
                  <article className="box-line box-line_sm">
                    <div className="box-line-inner">
                      <div className="box-line-icon icon mercury-icon-partners" />
                      <h5 className="box-line-title">
                        Leading recruiting website in the US and Europe
                      </h5>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6">
                  {}
                  <article className="box-line box-line_sm">
                    <div className="box-line-inner">
                      <div className="box-line-icon icon mercury-icon-chat" />
                      <h5 className="box-line-title">
                        24\7 Dedicated and free Support
                      </h5>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6">
                  {}
                  <article className="box-line box-line_sm">
                    <div className="box-line-inner">
                      <div className="box-line-icon icon mercury-icon-target" />
                      <h5 className="box-line-title">
                        Only relevant and verified vacancies{" "}
                      </h5>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
