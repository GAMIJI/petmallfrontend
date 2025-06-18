import React from "react";

const Footer = () => {
  return (
    <div>
      {/* footer-area */}
      <footer>
        <div className="footer__area">
          {/* <div class="footer__newsletter-three">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-5">
                      <div class="footer__newsletter-content">
                          <h2 class="title">Sign Up For Newsletter!</h2>
                      </div>
                  </div>
                  <div class="col-lg-7">
                      <form action="#" class="footer__newsletter-form-two">
                          <input type="email" placeholder="Type Your E-mail">
                          <button type="submit">Subscribe <img src="assets/img/icon/right_arrow04.svg" alt="" class="injectable"></button>
                      </form>
                  </div>
              </div>
          </div>
      </div> */}
          <div className="footer__top footer__top-three fix">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="footer__widget">
                    <div className="footer__logo">
                      <a href="index-5.html">
                        <img src="assets/img/logo/w_logo.png" alt="Logo" />
                      </a>
                    </div>
                    <div className="footer__content footer__content-two">
                      <p>
                        Duis aute irure dolor in repreerit in voluptate
                        velitesse We understand that your furry friend tred
                        member
                      </p>
                    </div>
                    <div className="footer__social">
                      <h6 className="title">Follow Us On:</h6>
                      <ul className="list-wrap">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.whatsapp.com/" target="_blank">
                            <i className="fab fa-whatsapp" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/" target="_blank">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div class="footer__widget">
          <h4 class="footer__widget-title">Quick Links</h4>
          <div class="footer__link">
            <ul class="list-wrap">
              <li><a href="animal.html">Animal Rescue</a></li>
              <li><a href="contact.html">Humane Education</a></li>
              <li><a href="contact.html">Caregivers</a></li>
              <li><a href="blog.html">New & Blog</a></li>
              <li><a href="gallery.html">Gallery</a></li>
            </ul>
          </div>
        </div>
      </div> */}
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__widget">
                    <h4 className="footer__widget-title">Support</h4>
                    <div className="footer__link">
                      <ul className="list-wrap">
                        <li>
                          <a href="account.html">My account</a>
                        </li>
                        <li>
                          <a href="about.html">About us</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact us</a>
                        </li>
                        <li>
                          <a href="reservation.html">Book Appointment</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                        <li>
                          <a href="register.html">Register</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__widget">
                    <h4 className="footer__widget-title">Contact</h4>
                    <div className="footer__contact">
                      <ul className="list-wrap">
                        <li>
                          555 A, East Manster Street, Ready Halley Neon, Uk 4512
                        </li>
                        <li>
                          <a href="tel:0123456789">+00 123 45678 44</a>
                        </li>
                        <li>
                          <a href="mailto:Supportinfo@gmail.com">
                            Supportinfo@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__shape-wrap">
              <img
                src="assets/img/images/footer_shape01.png"
                alt="img"
                data-aos="fade-up-right"
                data-aos-delay={400}
              />
              <img
                src="assets/img/images/footer_shape02.png"
                alt="img"
                data-aos="fade-up-left"
                data-aos-delay={400}
              />
            </div>
          </div>
          <div className="footer__bottom footer__bottom-two">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="copyright-text copyright-text-three">
                    <p>Copyright © 2024. All Rights Reserved.</p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="footer__bottom-menu footer__bottom-menu-two">
                    <ul className="list-wrap">
                      <li>
                        <a href="contact.html">Support</a>
                      </li>
                      <li>
                        <a href="contact.html">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="contact.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="contact.html">Career</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer-area-end */}
    </div>
  );
};

export default Footer;
