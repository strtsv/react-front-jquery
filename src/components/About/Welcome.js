import React from "react";

import i from "../../assets/images/about-us-1-573x368.jpg";

class Welcome extends React.Component {
  render() {
    return (
      <section className="section section-md">
        <div className="container">
          <div className="row row-30 align-items-center">
            <div className="col-lg-6 height-fill">
              <figure className="figure-responsive">
                <img src={i} alt width={573} height={368} />
              </figure>
            </div>
            <div className="col-lg-6">
              <article className="box-info">
                <h3>Welcome to JobsFactory</h3>
                <p>
                  As the world's #1 job site, with over 200 million unique
                  visitors every month from over 60 different countries,
                  JobsFactory has become the catalyst for putting the world to
                  work.
                </p>
                <p>
                  We are intensely passionate about delivering the right fit for
                  every hire. Our friendly team helps companies of all sizes
                  hire the best talent and offers the best opportunity for job
                  seekers to get hired. When you register and upload a resume
                  you can be sure JobsFactory has just the job for you, your
                  skills, and knowledge.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="container offset-top-1 text-center">
          <h3>Hundreds of Jobs Around the World</h3>
          <p>
            Using JobsFactory you can find the job of your dreams in seconds.
          </p>
          <div className="row row-50 justify-content-center">
            <div className="col-sm-6 col-md-4">
              {}
              <article className="box-line">
                <div className="box-line-icon icon mercury-icon-target" />
                <div className="box-line-divider" />
                <h5 className="box-line-title">
                  Only relevant and verified vacancies 24/7
                </h5>
              </article>
            </div>
            <div className="col-sm-6 col-md-4">
              {}
              <article className="box-line">
                <div className="box-line-icon icon mercury-icon-group" />
                <div className="box-line-divider" />
                <h5 className="box-line-title">
                  More than 3.8 million visitors every day
                </h5>
              </article>
            </div>
            <div className="col-sm-6 col-md-4">
              {}
              <article className="box-line">
                <div className="box-line-icon icon mercury-icon-partners" />
                <div className="box-line-divider" />
                <h5 className="box-line-title">
                  Leading recruiting website in the US and Europe
                </h5>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
