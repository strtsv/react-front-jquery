import React from "react";

class ContactDetails extends React.Component {
  render() {
    return (
      <section className="section section-md">
        <div className="container">
          <div className="row row-50">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <h4>Contact details</h4>
              <p
                style={{
                  letterSpacing: ".05em"
                }}
              >
                You can contact us any way that is convenient for you. We are
                available 24/7 via fax, email or telephone. You can also visit
                our office personally.
              </p>
            </div>
          </div>
          <div className="layout-bordered">
            <div className="layout-bordered-item">
              <div className="layout-bordered-item-inner">
                <div className="unit unit-spacing-sm flex-md-column">
                  <div className="unit-left icon icon-xl fl-bigmug-line-cellphone55 text-primary" />
                  <div className="unit-body">
                    <p className="heading-7">Phones</p>
                    <ul className="list-0">
                      <li>
                        <dl className="list-terms-inline">
                          <dt>Phone 01</dt>
                          <dd>
                            <a href="tel:#">+1 (409) 987–5874</a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl className="list-terms-inline">
                          <dt>Phone 02</dt>
                          <dd>
                            <a href="tel:#">+1 (409) 987–5874</a>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-bordered-item">
              <div className="layout-bordered-item-inner">
                <div className="unit unit-spacing-sm flex-md-column">
                  <div className="unit-left icon icon-xl fl-bigmug-line-big104 text-primary" />
                  <div className="unit-body">
                    <p className="heading-7">Address</p>
                    <ul className="list-0">
                      <li>
                        <a className="list-default" href="#">
                          USA, 6036 Richmond hwy., <br /> Alexandria, VA, 2230
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-bordered-item">
              <div className="layout-bordered-item-inner">
                <div className="unit unit-spacing-sm flex-md-column">
                  <div className="unit-left icon icon-xlg fl-bigmug-line-email64 text-primary" />
                  <div className="unit-body">
                    <p className="heading-7">E-mails</p>
                    <ul className="list-0">
                      <li>
                        <a href="mailto:#">Office@demolink.org</a>
                      </li>
                      <li>
                        <a href="mailto:#">Support@demolink.org</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h4>Get in touch with us</h4>
              <p>
                Feel free to use the contact form below to contact us directly.
              </p>
              {}
              <form
                className="rd-mailform form-lg"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="row row-30">
                  <div className="col-lg-4">
                    <div className="form-wrap">
                      <label className="form-label" htmlFor="contact-name">
                        Enter Your Name
                      </label>
                      <input
                        className="form-input"
                        id="contact-name"
                        type="text"
                        name="name"
                        data-constraints="@Required"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-wrap">
                      <label className="form-label" htmlFor="contact-email">
                        E-mail
                      </label>
                      <input
                        className="form-input"
                        id="contact-email"
                        type="email"
                        name="email"
                        data-constraints="@Required @Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-wrap">
                      <label className="form-label" htmlFor="contact-phone">
                        Phone
                      </label>
                      <input
                        className="form-input"
                        id="contact-phone"
                        type="text"
                        name="phone"
                        data-constraints="@PhoneNumber"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-wrap">
                      <label className="form-label" htmlFor="contact-message">
                        Your Message
                      </label>
                      <textarea
                        className="form-input"
                        id="contact-message"
                        name="message"
                        data-constraints="@Required"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="button button-primary" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactDetails;
