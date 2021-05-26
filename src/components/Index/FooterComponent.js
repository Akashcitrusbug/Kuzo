import React from 'react';
import footerlogo from '../../assets/images/logo.png';

function FooterComponent() {
  return (
    <>
      <footer>
        <div className="footer-div">
          <div className="container-fluid container-fluid-1820">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="footer-nav-list-div">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="footer-nav-list-inner">
                        <ul className="footer-list-ul">
                          <li>
                            <a href="faq.html" className="link">
                              FAQ
                            </a>
                          </li>
                          <li>
                            <a href="privacy.html" className="link">
                              Privacy
                            </a>
                          </li>
                          <li>
                            <a href="terms.html" className="link">
                              Terms
                            </a>
                          </li>
                          <li>
                            <a
                              href="mailto:help@kuzoclassName.com"
                              className="link">
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-join-row-div">
                  <div className="row">
                    <div className="col-lg-8 col-md-7 left-side-join">
                      <div className="footer-join-box-root">
                        <div className="footer-join-header">
                          <h4>Join our mailing list</h4>
                          <p>Subscribe for updates on new talent & features</p>
                        </div>
                        <div className="footer-join-body">
                          <div className="form-group join-form-group">
                            <div className="form-input-box">
                              <input
                                type="email"
                                placeholder="yourname@email.com"
                                className="form-control form-control-join"
                              />
                            </div>
                            <div className="btn-box-right">
                              <button className="btn btn-arrow-submit">
                                {' '}
                                <i className="bg-custom-icon arrow-right-side-icon"></i>{' '}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-5 right-side-join">
                      <div className="footer-join-right-box-root">
                        <div className="footer-join-right-header">
                          <p>Interested in joining as an ICON?</p>
                        </div>
                        <div className="footer-join-body">
                          <div className="button-right-group">
                            <a
                              href="create-an-account.html"
                              className="btn btn-common-primary2">
                              JOIN AS ICON
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-last-row-div">
                  <div className="row">
                    <div className="col-lg-8 col-md-7 left-side-join">
                      <div className="footer-logo-box-root">
                        <div className="footer-logo-thumb">
                          <img
                            src={footerlogo}
                            className="img-fluid logo_img footer-logo"
                            alt="logo"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-5 right-side-join">
                      <div className="footer-copyright-box-root">
                        <p>
                          &copy; 2019-2020,{' '}
                          <a href="#" className="link">
                            KuzoclassName
                          </a>
                          , Inc. dba ICONS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
