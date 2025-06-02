import React from "react";

const BlogDetails = () => {
  return (
    <div>
      <main>
        {/* breadcrumb-area */}
        <section className="breadcrumb__area fix">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8">
                <div className="breadcrumb__content">
                  <h3 className="title">Blog Details</h3>
                  <nav className="breadcrumb">
                    <span property="itemListElement" typeof="ListItem">
                      <a href="index-2.html">Home</a>
                    </span>
                    <span className="breadcrumb-separator">
                      <i className="flaticon-right-arrow-angle" />
                    </span>
                    <span property="itemListElement" typeof="ListItem">
                      Blog Details
                    </span>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="breadcrumb__img">
                  <img
                    src="assets/img/images/breadcrumb_img.png"
                    alt="img"
                    data-aos="fade-left"
                    data-aos-delay={800}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="breadcrumb__shape-wrap">
            <img
              src="assets/img/images/breadcrumb_shape01.png"
              alt="img"
              data-aos="fade-down-right"
              data-aos-delay={400}
            />
            <img
              src="assets/img/images/breadcrumb_shape02.png"
              alt="img"
              data-aos="fade-up-left"
              data-aos-delay={400}
            />
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* blog-details-area */}
        <section className="blog__details-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 order-0 order-lg-2">
                <div className="blog__details-wrap">
                  <div className="blog__details-thumb">
                    <img src="assets/img/blog/blog_details_img.jpg" alt="img" />
                  </div>
                  <div className="blog__details-content">
                    <h2 className="title">
                      How Smashing Magazine Uses TinaCMS To Manage Appoint
                      Editorial Workflow
                    </h2>
                    <div className="blog__post-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-user" />
                          by <a href="blog-details.html">admin</a>
                        </li>
                        <li>
                          <i className="flaticon-calendar" />
                          25th Aug, 2024
                        </li>
                        <li>
                          <i className="fas fa-tags" />
                          <a href="blog.html">Pet,</a>
                          <a href="blog.html">Medical</a>
                        </li>
                        <li>
                          <i className="far fa-comment-alt" />
                          <a href="blog-details.html">05 Comments</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      When an unknown printer took ar galley offer type year
                      anddey scrambled make type aewer specimen awebook bethas
                      survived not only five when annery unknown printer.eed a
                      little help from our friends from time to time.Although we
                      offer the one-stop convenience.
                    </p>
                    <p>
                      Eed a little help from our friends from time to time.
                      Although we offer the one-stop convenience of annery
                      integrated range of legal, financial services under one
                      roof.eed a little help from our friends from time to time.
                      Although we offer the one-stop convenience.
                    </p>
                    <blockquote>
                      <p>
                        “ urabitur varius eros rutrum consequat Mauris aewa
                        sollicitudin enim condimentum luctus enim justo non
                        molestie nisl ”
                      </p>
                    </blockquote>
                    <h4 className="title-two">
                      Rediscovering The Joy Of Design
                    </h4>
                    <p>
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen bookhas a not
                      awertolw only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchan
                      galley of type and scrambled it to make a type specimen
                      book.
                    </p>
                    <div className="blog__details-inner-wrap">
                      <div className="row align-items-center">
                        <div className="col-54">
                          <div className="content">
                            <h3 className="title-two">
                              Revealing Images With CSS Mask Animations
                            </h3>
                            <p>
                              When an unknown printer took a galley type
                              remaining essentially unchan galley of type and
                              scrambled it to make a type specimen book.
                            </p>
                            <ul className="list-wrap">
                              <li>
                                <i className="fas fa-arrow-right" />
                                Medicare Advantage Plans
                              </li>
                              <li>
                                <i className="fas fa-arrow-right" />
                                Analysis &amp; Research
                              </li>
                              <li>
                                <i className="fas fa-arrow-right" />
                                100% Secure Money Back
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-46">
                          <div className="thumb">
                            <img
                              src="assets/img/blog/blog_details_img02.jpg"
                              alt=""
                            />
                            <a
                              href="https://www.youtube.com/watch?v=XdFfCPK5ycw"
                              className="play-btn popup-video"
                            >
                              <i className="fas fa-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen bookhas a not only
                      five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchan galley of type
                      and scrambled it to make a type specimen book.
                    </p>
                    <div className="blog__details-content-bottom">
                      <div className="row align-items-center">
                        <div className="col-md-7">
                          <div className="post-tags">
                            <h5 className="title">Tags:</h5>
                            <ul className="list-wrap">
                              <li>
                                <a href="#">Dogs</a>
                              </li>
                              <li>
                                <a href="#">Pet Care</a>
                              </li>
                              <li>
                                <a href="#">Cats</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="blog-post-share">
                            <h5 className="title">Share:</h5>
                            <ul className="list-wrap">
                              <li>
                                <a
                                  href="https://www.facebook.com/"
                                  target="_blank"
                                >
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="https://twitter.com/" target="_blank">
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.whatsapp.com/"
                                  target="_blank"
                                >
                                  <i className="fab fa-whatsapp" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.instagram.com/"
                                  target="_blank"
                                >
                                  <i className="fab fa-instagram" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/"
                                  target="_blank"
                                >
                                  <i className="fab fa-youtube" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-avatar-wrap">
                  <div className="blog-avatar-img">
                    <a href="team-details.html">
                      <img src="assets/img/blog/avatar.png" alt="img" />
                    </a>
                  </div>
                  <div className="blog-avatar-info">
                    <span className="designation">Author</span>
                    <h4 className="name">
                      <a href="#">Parker Willy</a>
                    </h4>
                    <p>
                      Finanappreciate your trust greatly Our clients choose
                      dentace ducr emaining essential yearl ow we are the best
                      area Awaitingare really.
                    </p>
                  </div>
                </div>
                <div className="comments-wrap">
                  <h3 className="comments-wrap-title">02 Comments</h3>
                  <div className="latest-comments">
                    <ul className="list-wrap">
                      <li>
                        <div className="comments-box">
                          <div className="comments-avatar">
                            <img
                              src="assets/img/blog/comment01.png"
                              alt="img"
                            />
                          </div>
                          <div className="comments-text">
                            <div className="avatar-name">
                              <h6 className="name">Jessica Rose</h6>
                              <span className="date">December 27, 2023</span>
                            </div>
                            <p>
                              Finanappreciate your trust greatly Our clients
                              choose dentace ducts because know we are the best
                              area Awaitingare really.
                            </p>
                            <a href="#" className="reply-btn">
                              Reply
                            </a>
                          </div>
                        </div>
                        <ul className="children">
                          <li>
                            <div className="comments-box">
                              <div className="comments-avatar">
                                <img
                                  src="assets/img/blog/comment02.png"
                                  alt="img"
                                />
                              </div>
                              <div className="comments-text">
                                <div className="avatar-name">
                                  <h6 className="name">Parker Willy</h6>
                                  <span className="date">
                                    December 28, 2023
                                  </span>
                                </div>
                                <p>
                                  Finanappreciate your trust greatly Our clients
                                  choose dentace ducts because know we are the
                                  best area Awaitingare really.
                                </p>
                                <a href="#" className="reply-btn">
                                  Reply
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="comment-respond">
                  <h3 className="comment-reply-title">Post a comment</h3>
                  <form action="#" className="comment-form">
                    <p className="comment-notes">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="form-grp">
                      <textarea
                        name="comment"
                        placeholder="Comment"
                        defaultValue={""}
                      />
                    </div>
                    <div className="row gutter-20">
                      <div className="col-md-4">
                        <div className="form-grp">
                          <input type="text" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-grp">
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-grp">
                          <input type="url" placeholder="Website" />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp checkbox-grp">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <button type="submit" className="btn">
                      Read More{" "}
                      <img
                        src="assets/img/icon/right_arrow.svg"
                        alt=""
                        className="injectable"
                      />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <aside className="blog-sidebar">
                  <div className="blog-widget">
                    <h4 className="widget-title">Search</h4>
                    <div className="sidebar-search-form">
                      <form action="#">
                        <input type="text" placeholder="Type Keywords. . ." />
                        <button type="submit">
                          <i className="flaticon-loupe" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="blog-widget">
                    <h4 className="widget-title">Categories</h4>
                    <div className="sidebar-cat-list">
                      <ul className="list-wrap">
                        <li>
                          <a href="#">Animals (15)</a>
                        </li>
                        <li>
                          <a href="#">Pet Love (11)</a>
                        </li>
                        <li>
                          <a href="#">Grooming (05)</a>
                        </li>
                        <li>
                          <a href="#">Dog Care (07)</a>
                        </li>
                        <li>
                          <a href="#">pet Health (04)</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-widget">
                    <h4 className="widget-title">Recent Post</h4>
                    <div className="rc-post-wrap">
                      <div className="rc-post-item">
                        <div className="thumb">
                          <a href="blog-details.html">
                            <img
                              src="assets/img/blog/rc_post01.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="blog-details.html">
                              weuine easiure and praising
                            </a>
                          </h4>
                          <span className="date">
                            <i className="flaticon-calendar" />
                            Sep 15, 2024
                          </span>
                        </div>
                      </div>
                      <div className="rc-post-item">
                        <div className="thumb">
                          <a href="blog-details.html">
                            <img
                              src="assets/img/blog/rc_post02.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="blog-details.html">
                              how to pursue pleasure rationally
                            </a>
                          </h4>
                          <span className="date">
                            <i className="flaticon-calendar" />
                            Sep 15, 2024
                          </span>
                        </div>
                      </div>
                      <div className="rc-post-item">
                        <div className="thumb">
                          <a href="blog-details.html">
                            <img
                              src="assets/img/blog/rc_post03.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="blog-details.html">
                              there anyone who loves
                            </a>
                          </h4>
                          <span className="date">
                            <i className="flaticon-calendar" />
                            Sep 15, 2024
                          </span>
                        </div>
                      </div>
                      <div className="rc-post-item">
                        <div className="thumb">
                          <a href="blog-details.html">
                            <img
                              src="assets/img/blog/rc_post04.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="blog-details.html">
                              New occasionally circumstances
                            </a>
                          </h4>
                          <span className="date">
                            <i className="flaticon-calendar" />
                            Sep 15, 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-widget">
                    <h4 className="widget-title">Tags</h4>
                    <div className="sidebar-tag-list">
                      <ul className="list-wrap">
                        <li>
                          <a href="#">Dogs</a>
                        </li>
                        <li>
                          <a href="#">Pet Care</a>
                        </li>
                        <li>
                          <a href="#">Cats</a>
                        </li>
                        <li>
                          <a href="#">Modern Lab</a>
                        </li>
                        <li>
                          <a href="#">Expert Vet</a>
                        </li>
                        <li>
                          <a href="#">Grooming</a>
                        </li>
                        <li>
                          <a href="#">Caring</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
        {/* blog-details-area-end */}
      </main>
    </div>
  );
};

export default BlogDetails;
