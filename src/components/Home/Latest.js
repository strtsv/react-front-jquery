import React from "react";

import i1 from "../../assets/images/blog-1-369x253.jpg";
import i2 from "../../assets/images/blog-2-369x253.jpg";
import i3 from "../../assets/images/blog-3-369x253.jpg";

class Latest extends React.Component {
  render() {
    return (
      <section className="section section-md bg-gray-100">
        <div className="container">
          <h3 className="text-center">Latest Posts</h3>
          <div className="row row-30 row-xl-70">
            <div className="col-12 col-lg-4">
              {}
              <article className="post-minimal">
                <a className="post-minimal-media" href="blog-post.html">
                  <img
                    className="post-minimal-image"
                    src={i1}
                    alt
                    width={369}
                    height={253}
                  />
                </a>
                <div className="post-minimal-main">
                  <h5 className="post-minimal-title">
                    <a href="blog-post.html">
                      8 Surprising Predictions About the Future of Work
                    </a>
                  </h5>
                  <p>
                    There’s no denying that the landscape of work is changing.
                    More and more companies are adopting flexible work policies
                  </p>
                  <time className="post-minimal-time" dateTime={2019}>
                    November 23, 2019
                  </time>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-4">
              {}
              <article className="post-minimal">
                <a className="post-minimal-media" href="blog-post.html">
                  <img
                    className="post-minimal-image"
                    src={i2}
                    alt
                    width={369}
                    height={253}
                  />
                </a>
                <div className="post-minimal-main">
                  <h5 className="post-minimal-title">
                    <a href="blog-post.html">
                      Job Search Success: Finding a Business Development Job
                    </a>
                  </h5>
                  <p>
                    Business development professionals are at the heart of all
                    sorts of organizations, from startups to multinational
                    corporations.
                  </p>
                  <time className="post-minimal-time" dateTime={2019}>
                    November 23, 2019
                  </time>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-4">
              {}
              <article className="post-minimal">
                <a className="post-minimal-media" href="blog-post.html">
                  <img
                    className="post-minimal-image"
                    src={i3}
                    alt
                    width={369}
                    height={253}
                  />
                </a>
                <div className="post-minimal-main">
                  <h5 className="post-minimal-title">
                    <a href="blog-post.html">
                      How to Impress Your Future Employer
                    </a>
                  </h5>
                  <p>
                    You’re committed to your job search, and you use every ounce
                    of your free time you have to comb through listings, write
                    cover
                  </p>
                  <time className="post-minimal-time" dateTime={2019}>
                    November 23, 2019
                  </time>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Latest;
