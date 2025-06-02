import React from "react";

const BlogsList = () => {
  return (
    <div>
      <main>
        {/* breadcrumb-area */}
        <section className="breadcrumb__area fix">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8">
                <div className="breadcrumb__content">
                  <h3 className="title">Our Latest Blogs</h3>
                  <nav className="breadcrumb">
                    <span property="itemListElement" typeof="ListItem">
                      <a href="index-2.html">Home</a>
                    </span>
                    <span className="breadcrumb-separator">
                      <i className="flaticon-right-arrow-angle" />
                    </span>
                    <span property="itemListElement" typeof="ListItem">
                      All Blogs
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
        {/* blog-area */}
        <section className="blog__area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 order-0 order-lg-2">
                <div className="row">
                  <div className="col-md-6">
                    <div className="blog__post-item-three blog__post-item-five shine-animate-item">
                      <div className="blog__post-thumb-three blog__post-thumb-five shine-animate">
                        <a href="blog-details.html">
                          <img src="assets/img/blog/blog_img01.jpg" alt="img" />
                        </a>
                        <ul className="list-wrap blog__post-tag blog__post-tag-two">
                          <li>
                            <a href="blog.html">Pet</a>
                          </li>
                          <li>
                            <a href="blog.html">Medical</a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog__post-content-three">
                        <div className="blog__post-meta">
                          <ul className="list-wrap">
                            <li>
                              <i className="flaticon-calendar" />
                              25th Aug, 2024
                            </li>
                            <li>
                              <i className="flaticon-user" />
                              by <a href="blog-details.html">admin</a>
                            </li>
                          </ul>
                        </div>
                        <h2 className="title">
                          <a href="blog-details.html">
                            3 Signs It’s Time for the First Pets Dental Cleaning
                          </a>
                        </h2>
                        <p>
                          Duis aute irure dolor in reprehenderit innera voeWe
                          care for the growing needs of our comm unietye build
                          systems.
                        </p>
                        <a href="blog-details.html" className="btn">
                          Read More{" "}
                          <img
                            src="assets/img/icon/right_arrow.svg"
                            alt=""
                            className="injectable"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog__post-item-three blog__post-item-five shine-animate-item">
                      <div className="blog__post-thumb-three blog__post-thumb-five shine-animate">
                        <a href="blog-details.html">
                          <img src="assets/img/blog/blog_img02.jpg" alt="img" />
                        </a>
                        <ul className="list-wrap blog__post-tag blog__post-tag-two">
                          <li>
                            <a href="blog.html">Pet</a>
                          </li>
                          <li>
                            <a href="blog.html">Grooming</a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog__post-content-three">
                        <div className="blog__post-meta">
                          <ul className="list-wrap">
                            <li>
                              <i className="flaticon-calendar" />
                              25th Aug, 2024
                            </li>
                            <li>
                              <i className="flaticon-user" />
                              by <a href="blog-details.html">admin</a>
                            </li>
                          </ul>
                        </div>
                        <h2 className="title">
                          <a href="blog-details.html">
                            Understanding Zoonotic and Safeguarding Your Health
                          </a>
                        </h2>
                        <p>
                          Duis aute irure dolor in reprehenderit innera voeWe
                          care for the growing needs of our comm unietye build
                          systems.
                        </p>
                        <a href="blog-details.html" className="btn">
                          Read More{" "}
                          <img
                            src="assets/img/icon/right_arrow.svg"
                            alt=""
                            className="injectable"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog__post-item-three blog__post-item-five shine-animate-item">
                      <div className="blog__post-thumb-three blog__post-thumb-five shine-animate">
                        <a href="blog-details.html">
                          <img src="assets/img/blog/blog_img03.jpg" alt="img" />
                        </a>
                        <ul className="list-wrap blog__post-tag blog__post-tag-two">
                          <li>
                            <a href="blog.html">Health</a>
                          </li>
                          <li>
                            <a href="blog.html">Medical</a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog__post-content-three">
                        <div className="blog__post-meta">
                          <ul className="list-wrap">
                            <li>
                              <i className="flaticon-calendar" />
                              25th Aug, 2024
                            </li>
                            <li>
                              <i className="flaticon-user" />
                              by <a href="blog-details.html">admin</a>
                            </li>
                          </ul>
                        </div>
                        <h2 className="title">
                          <a href="blog-details.html">
                            How to Spot, Treat, and Prevent Hot Spots in Pets
                          </a>
                        </h2>
                        <p>
                          Duis aute irure dolor in reprehenderit innera voeWe
                          care for the growing needs of our comm unietye build
                          systems.
                        </p>
                        <a href="blog-details.html" className="btn">
                          Read More{" "}
                          <img
                            src="assets/img/icon/right_arrow.svg"
                            alt=""
                            className="injectable"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog__post-item-three blog__post-item-five shine-animate-item">
                      <div className="blog__post-thumb-three blog__post-thumb-five shine-animate">
                        <a href="blog-details.html">
                          <img src="assets/img/blog/blog_img04.jpg" alt="img" />
                        </a>
                        <ul className="list-wrap blog__post-tag blog__post-tag-two">
                          <li>
                            <a href="blog.html">Dog Love</a>
                          </li>
                          <li>
                            <a href="blog.html">Pet</a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog__post-content-three">
                        <div className="blog__post-meta">
                          <ul className="list-wrap">
                            <li>
                              <i className="flaticon-calendar" />
                              25th Aug, 2024
                            </li>
                            <li>
                              <i className="flaticon-user" />
                              by <a href="blog-details.html">admin</a>
                            </li>
                          </ul>
                        </div>
                        <h2 className="title">
                          <a href="blog-details.html">
                            Clean indoor air as important in controlling asthma
                          </a>
                        </h2>
                        <p>
                          Duis aute irure dolor in reprehenderit innera voeWe
                          care for the growing needs of our comm unietye build
                          systems.
                        </p>
                        <a href="blog-details.html" className="btn">
                          Read More{" "}
                          <img
                            src="assets/img/icon/right_arrow.svg"
                            alt=""
                            className="injectable"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog__post-item-three blog__post-item-five shine-animate-item">
                      <div className="blog__post-thumb-three blog__post-thumb-five shine-animate">
                        <a href="blog-details.html">
                          <img src="assets/img/blog/blog_img05.jpg" alt="img" />
                        </a>
                        <ul className="list-wrap blog__post-tag blog__post-tag-two">
                          <li>
                            <a href="blog.html">Animals</a>
                          </li>
                          <li>
                            <a href="blog.html">Medical</a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog__post-content-three">
                        <div className="blog__post-meta">
                          <ul className="list-wrap">
                            <li>
                              <i className="flaticon-calendar" />
                              25th Aug, 2024
                            </li>
                            <li>
                              <i className="flaticon-user" />
                              by <a href="blog-details.html">admin</a>
                            </li>
                          </ul>
                        </div>
                        <h2 className="title">
                          <a href="blog-details.html">
                            How to Spot, Treat, and Prevent Hot Spots in Pets
                          </a>
                        </h2>
                        <p>
                          Duis aute irure dolor in reprehenderit innera voeWe
                          care for the growing needs of our comm unietye build
                          systems.
                        </p>
                        <a href="blog-details.html" className="btn">
                          Read More{" "}
                          <img
                            src="assets/img/icon/right_arrow.svg"
                            alt=""
                            className="injectable"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog__post-item-three blog__post-item-five shine-animate-item">
                      <div className="blog__post-thumb-three blog__post-thumb-five shine-animate">
                        <a href="blog-details.html">
                          <img src="assets/img/blog/blog_img06.jpg" alt="img" />
                        </a>
                        <ul className="list-wrap blog__post-tag blog__post-tag-two">
                          <li>
                            <a href="blog.html">Pet</a>
                          </li>
                          <li>
                            <a href="blog.html">Pet Love</a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog__post-content-three">
                        <div className="blog__post-meta">
                          <ul className="list-wrap">
                            <li>
                              <i className="flaticon-calendar" />
                              25th Aug, 2024
                            </li>
                            <li>
                              <i className="flaticon-user" />
                              by <a href="blog-details.html">admin</a>
                            </li>
                          </ul>
                        </div>
                        <h2 className="title">
                          <a href="blog-details.html">
                            A Complete Price Guide for the Shar Pei Breed
                          </a>
                        </h2>
                        <p>
                          Duis aute irure dolor in reprehenderit innera voeWe
                          care for the growing needs of our comm unietye build
                          systems.
                        </p>
                        <a href="blog-details.html" className="btn">
                          Read More{" "}
                          <img
                            src="assets/img/icon/right_arrow.svg"
                            alt=""
                            className="injectable"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="pagination__wrap mt-50">
                  <ul className="list-wrap">
                    <li className="link-arrow">
                      <a href="#">
                        <img
                          src="assets/img/icon/pagination_icon01.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="courses.html">2</a>
                    </li>
                    <li>
                      <a href="courses.html">3</a>
                    </li>
                    <li>
                      <a href="courses.html">4</a>
                    </li>
                    <li className="link-arrow">
                      <a href="#">
                        <img
                          src="assets/img/icon/pagination_icon02.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                    </li>
                  </ul>
                </nav>
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
        {/* blog-area-end */}
      </main>
    </div>
  );
};

export default BlogsList;
