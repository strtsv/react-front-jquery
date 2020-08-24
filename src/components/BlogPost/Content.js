import React from "react";

import i1 from "../../assets/images/blog-post-1-768x475.jpg";
import i2 from "../../assets/images/user-1-36x36.jpg";
import i3 from "../../assets/images/blog-2-369x253.jpg";
import i4 from "../../assets/images/blog-3-369x253.jpg";
import i5 from "../../assets/images/user-2-65x65.jpg";
import i6 from "../../assets/images/user-3-51x51.jpg";
import i7 from "../../assets/images/user-4-65x65.jpg";
import i8 from "../../assets/images/user-5-65x65.jpg";
import i9 from "../../assets/images/post-light-1-106x104.jpg";
import i10 from "../../assets/images/post-light-2-106x104.jpg";
import i11 from "../../assets/images/post-light-3-106x104.jpg";

class Content extends React.Component {
  render() {
    return (
      <section className="section section-md">
        <div className="container">
          <div className="blog-layout">
            <div className="blog-layout-main">
              <article className="post-creative">
                <img
                  className="post-creative-image"
                  src={i1}
                  alt
                  width={768}
                  height={475}
                />
                <div className="post-creative-meta">
                  <div className="post-creative-meta-inner">
                    <div className="post-creative-author">
                      <img
                        className="post-creative-author-image"
                        src={i2}
                        alt
                        width={36}
                        height={36}
                      />
                      <p>
                        by <a href="#">Barry Burns</a>
                      </p>
                    </div>
                    <div>
                      <ul className="post-creative-meta-list">
                        <li>
                          {" "}
                          <span className="icon mdi mdi-clock"> </span>
                          <time dateTime={2019}>March 15, 2019</time>
                        </li>
                        <li>
                          <span className="icon fl-justicons-visible6" />
                          <span>3678 </span>
                        </li>
                        <li>
                          <span className="icon mdi mdi-message-outline" />
                          <span>3</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h5>8 Surprising Predictions About the Future of Work</h5>
                <p>
                  There’s no denying that the landscape of work is changing.
                  More and more companies are adopting flexible work policies,
                  recognizing the dramatic (and positive) impact that it has
                  both for business and employees. But do you ever wonder what
                  the future holds for the world of work? Let’s try to figure it
                  out.
                </p>
                <p>
                  It’s predicted that boomers and gen Xers will have second
                  careers as they approach 50. These “encore” careers might be
                  for philanthropic or financial reasons, but the even bigger
                  assumption is that present employers will prepare these
                  workers for their next careers by enriching their work with
                  experiences and education. It is also anticipated that older
                  Americans will take advantage of flexible work and look for
                  part-time jobs, not full-time positions. They will represent
                  the biggest segment of workers who take on contract jobs,
                  freelance gigs, and alternate work assignments.
                </p>
                {}
                <div className="quote-light">
                  <div className="quote-light-inner">
                    <div className="quote-light-mark quote-light-mark-left">
                      <svg
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 24 22"
                        width={24}
                        height={22}
                      >
                        <path d="M0,11.9C0,4,3.5,0,10.4,0v4c-2,0-3.4,0.5-4.2,1.5C5.4,6.5,5,8.1,5,10.2V13h5.3v9H1.1C0.4,18.2,0,14.8,0,11.9z\t\tM13.7,11.9C13.7,4,17.1,0,24,0v4c-2,0-3.3,0.5-4.1,1.5c-0.8,1-1.2,2.6-1.2,4.7V13h5.2v9h-9.2C14,18.6,13.7,15.2,13.7,11.9z" />
                      </svg>
                    </div>
                    <p>
                      There is no guarantee that full-time work will be required
                      in the future rather than freelance.
                    </p>
                    <div className="quote-light-mark quote-light-mark-right">
                      <svg
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 24 22"
                        width={24}
                        height={22}
                      >
                        <path d="M0,11.9C0,4,3.5,0,10.4,0v4c-2,0-3.4,0.5-4.2,1.5C5.4,6.5,5,8.1,5,10.2V13h5.3v9H1.1C0.4,18.2,0,14.8,0,11.9z\t\tM13.7,11.9C13.7,4,17.1,0,24,0v4c-2,0-3.3,0.5-4.1,1.5c-0.8,1-1.2,2.6-1.2,4.7V13h5.2v9h-9.2C14,18.6,13.7,15.2,13.7,11.9z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p>
                  If you ask us, the future of work is fascinating! Not only the
                  limits will be lifted on how old you can be to work, but also
                  on where you work, how you work, and why you work! But until
                  it happens you can always count on us if you plan to find a
                  well-paid job according to your experience, skills, and
                  knowledge.
                </p>
                <div className="post-creative-footer">
                  <div className="post-creative-footer-inner">
                    <p>Share this post</p>
                    <div>
                      <ul className="list-inline list-inline-xs">
                        <li>
                          <a
                            className="icon icon-xxs icon-filled icon-filled-brand icon-circle fa fa-facebook"
                            href="#"
                          />
                        </li>
                        <li>
                          <a
                            className="icon icon-xxs icon-filled icon-filled-brand icon-circle fa fa-google-plus"
                            href="#"
                          />
                        </li>
                        <li>
                          <a
                            className="icon icon-xxs icon-filled icon-filled-brand icon-circle fa fa-twitter"
                            href="#"
                          />
                        </li>
                        <li>
                          <a
                            className="icon icon-xxs icon-filled icon-filled-brand icon-circle fa fa-pinterest-p"
                            href="#"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <div className="section-sm section-first">
                <p className="blog-layout-title text-center">Recent Posts</p>
                <div className="row row-30">
                  <div className="col-sm-6">
                    <article className="post-classic">
                      <a className="post-classic-media" href="blog-post.html">
                        <img
                          className="post-classic-image"
                          src={i3}
                          alt
                          width={369}
                          height={253}
                        />
                      </a>
                      <h4 className="post-classic-title">
                        <a href="blog-post.html">
                          Job Search Success: Finding a Business Development Job
                        </a>
                      </h4>
                      <time className="post-classic-time" dateTime={2019}>
                        November 23, 2019
                      </time>
                      <div className="post-classic-text">
                        <p>
                          Business development professionals are at the heart of
                          all sorts of organizations, from startups to
                        </p>
                      </div>
                      <ul className="post-classic-meta">
                        <li>
                          <a href="blog-post.html">
                            {" "}
                            <span className="icon mdi mdi-comment-outline" />
                            <span>3 Comments</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon mdi mdi-thumb-up-outline" />
                            <span>30 Likes</span>
                          </a>
                        </li>
                      </ul>
                    </article>
                  </div>
                  <div className="col-sm-6">
                    <article className="post-classic">
                      <a className="post-classic-media" href="blog-post.html">
                        <img
                          className="post-classic-image"
                          src={i4}
                          alt
                          width={369}
                          height={253}
                        />
                      </a>
                      <h4 className="post-classic-title">
                        <a href="blog-post.html">
                          How to Impress Your Future Employer
                        </a>
                      </h4>
                      <time className="post-classic-time" dateTime={2019}>
                        November 23, 2019
                      </time>
                      <div className="post-classic-text">
                        <p>
                          You’re committed to your job search, and you use every
                          ounce of your free time you have to comb
                        </p>
                      </div>
                      <ul className="post-classic-meta">
                        <li>
                          <a href="blog-post.html">
                            {" "}
                            <span className="icon mdi mdi-comment-outline" />
                            <span>3 Comments</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon mdi mdi-thumb-up-outline" />
                            <span>30 Likes</span>
                          </a>
                        </li>
                      </ul>
                    </article>
                  </div>
                </div>
              </div>
              <div className="section-sm section-bottom-0">
                <p className="blog-layout-title text-center">3 comments</p>
                <div className="comment-group">
                  {}
                  <article className="comment">
                    <div className="comment-aside">
                      <img
                        className="comment-image"
                        src={i5}
                        alt
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="comment-header">
                      <div className="comment-header-inner">
                        <p className="comment-title">Edward</p>
                        <span className="comment-time">3 day ago</span>
                      </div>
                    </div>
                    <div className="comment-main">
                      <div className="comment-text">
                        <p>
                          Thank you for this amazingly informative article! I
                          have always been wondering how a skilled worker will
                          use his/hers knowledge in the future. I think even
                          when we get older as qualified workers, our skills
                          will still be needed. I also hope you will tell us
                          more about this topic in your next posts. In my
                          opinion, it is a very interesting topic, which can be
                          developed, and I hope I am not the only one who thinks
                          so.
                        </p>
                      </div>
                      <div className="comment-footer">
                        <ul className="comment-list">
                          <li>
                            {" "}
                            <a className="comment-link" href="#">
                              <span className="icon mdi mdi-thumb-up-outline" />
                              <span>32</span>
                            </a>
                          </li>
                          <li>
                            <a className="comment-link" href="#">
                              <span className="icon mdi mdi-comment-outline" />
                              <span>Reply</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <div className="comment-group">
                    {}
                    <article className="comment">
                      <div className="comment-aside">
                        <img
                          className="comment-image"
                          src={i6}
                          alt
                          width={51}
                          height={51}
                        />
                      </div>
                      <div className="comment-header">
                        <div className="comment-header-inner">
                          <p className="comment-title">Nina</p>
                          <span className="comment-time">1 days ago</span>
                        </div>
                      </div>
                      <div className="comment-main">
                        <div className="comment-text">
                          <p>
                            Of course, you are not! As for me, I’ve been looking
                            for accurate predictions about labor-market for
                            quite some time, and this post actually shares some
                            pretty interesting information on the topic.
                          </p>
                        </div>
                        <div className="comment-footer">
                          <ul className="comment-list">
                            <li>
                              {" "}
                              <a className="comment-link" href="#">
                                <span className="icon mdi mdi-thumb-up-outline" />
                                <span>32</span>
                              </a>
                            </li>
                            <li>
                              <a className="comment-link" href="#">
                                <span className="icon mdi mdi-comment-outline" />
                                <span>Reply</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="comment-group">
                  {}
                  <article className="comment">
                    <div className="comment-aside">
                      <img
                        className="comment-image"
                        src={i7}
                        alt
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="comment-header">
                      <div className="comment-header-inner">
                        <p className="comment-title">John</p>
                        <span className="comment-time">2 day ago</span>
                      </div>
                    </div>
                    <div className="comment-main">
                      <div className="comment-text">
                        <p>
                          You know, it’s been a while since I read a post on
                          your blog but this article really got my attention. I
                          really wonder what will happen with job search and
                          qualified workers in 10 or 20 years and that’s why I
                          find your article interesting. I’m also looking
                          forward to some information on recent labor law
                          updates in the USA and your digest of the most popular
                          professions of this month. Thank you for what you do,
                          keep posting great and interesting news!
                        </p>
                      </div>
                      <div className="comment-footer">
                        <ul className="comment-list">
                          <li>
                            {" "}
                            <a className="comment-link" href="#">
                              <span className="icon mdi mdi-thumb-up-outline" />
                              <span>32</span>
                            </a>
                          </li>
                          <li>
                            <a className="comment-link" href="#">
                              <span className="icon mdi mdi-comment-outline" />
                              <span>Reply</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                {}
                <article className="comment comment-box">
                  <div className="comment-aside">
                    <img
                      className="comment-image"
                      src={i8}
                      alt
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className="comment-header">
                    <p className="comment-title">Miranda</p>
                  </div>
                  <div className="comment-main">
                    <form className="rd-mailform rd-mailform-outline">
                      <div className="form-wrap">
                        <label className="form-label" htmlFor="comment-message">
                          Your comment
                        </label>
                        <textarea
                          className="form-input"
                          id="comment-message"
                          name="message"
                          data-constraints="@Required"
                          defaultValue={""}
                        />
                      </div>
                      <div className="from-wrap">
                        <button className="button button-primary" type="submit">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </article>
              </div>
            </div>
            <div className="blog-layout-aside">
              <div className="blog-layout-aside-item">
                {}
                <form
                  className="rd-form rd-search rd-search-classic form-lg form-filled"
                  action="search-results.html"
                  method="GET"
                >
                  <div className="form-wrap">
                    <input
                      className="form-input"
                      id="rd-search-form-input"
                      type="text"
                      name="s"
                      autoComplete="off"
                    />
                    <label
                      className="form-label"
                      htmlFor="rd-search-form-input"
                    >
                      Search the blog...
                    </label>
                  </div>
                  <button className="rd-search-submit" type="submit" />
                </form>
              </div>
              <div className="blog-layout-aside-item">
                <p className="blog-layout-title">Category</p>
                <ul className="list-categories">
                  <li className="active">
                    <a href="#">
                      {" "}
                      <span>Jobs</span>
                      <span> 12</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span>Resume</span>
                      <span>10</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span>Education</span>
                      <span>11 </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span>Skills</span>
                      <span>14</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blog-layout-aside-item">
                <p className="blog-layout-title">Latest Posts</p>
                <div className="post-light-group">
                  {}
                  <a className="post-light" href="blog-post.html">
                    <div className="post-light-media">
                      <img
                        className="post-light-image"
                        src={i9}
                        alt
                        width={106}
                        height={104}
                      />
                    </div>
                    <div className="post-light-main">
                      <p className="post-light-title">
                        Online Teaching: Theory and Basics
                      </p>
                      <time className="post-light-time" dateTime={2019}>
                        March 15, 2019
                      </time>
                    </div>
                  </a>
                  {}
                  <a className="post-light" href="blog-post.html">
                    <div className="post-light-media">
                      <img
                        className="post-light-image"
                        src={i10}
                        alt
                        width={106}
                        height={104}
                      />
                    </div>
                    <div className="post-light-main">
                      <p className="post-light-title">
                        Finding a Remote Editing Job to Satisfy Your Needs
                      </p>
                      <time className="post-light-time" dateTime={2019}>
                        March 15, 2019
                      </time>
                    </div>
                  </a>
                  {}
                  <a className="post-light" href="blog-post.html">
                    <div className="post-light-media">
                      <img
                        className="post-light-image"
                        src={i11}
                        alt
                        width={106}
                        height={104}
                      />
                    </div>
                    <div className="post-light-main">
                      <p className="post-light-title">
                        Organize Your Workspace with These Tips
                      </p>
                      <time className="post-light-time" dateTime={2019}>
                        March 15, 2019
                      </time>
                    </div>
                  </a>
                </div>
              </div>
              <div className="blog-layout-aside-item">
                <p className="blog-layout-title">Newsletter</p>
                <p>Enter your e-mail to get the latest news. </p>
                {}
                <form
                  className="rd-form rd-mailform form-centered"
                  data-form-output="form-output-global"
                  data-form-type="subscribe"
                  method="post"
                  action="bat/rd-mailform.php"
                >
                  <div className="form-wrap">
                    <input
                      className="form-input"
                      id="subscribe-form-email"
                      type="email"
                      name="email"
                      data-constraints="@Email @Required"
                    />
                    <label
                      className="form-label"
                      htmlFor="subscribe-form-email"
                    >
                      Your e-mail address...
                    </label>
                  </div>
                  <div className="form-button">
                    <button
                      className="button button-block button-primary"
                      type="submit"
                      aria-label="subscribe"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
