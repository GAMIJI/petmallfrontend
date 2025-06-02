import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <div>
      {/* product-area */}
      <section className="product__area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="section__title-two mb-25">
                <h2 className="title">
                  Featured Products{" "}
                  <img
                    src="assets/img/images/title_shape.svg"
                    alt=""
                    className="injectable"
                  />
                </h2>
              </div>
            </div>
            <div className="col-md-5">
              <div className="view-all-btn">
                <Link to="/productList">
                  See All <i className="flaticon-right-arrow-angle" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="tab-content product__item-wrap"
                id="productTabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="all-tab-pane"
                  role="tabpanel"
                  aria-labelledby="all-tab"
                  tabIndex={0}
                >
                  <div className="product-active">
                    <Swiper
                      modules={[Navigation]}
                      navigation={{
                        nextEl: ".product-button-next",
                        prevEl: ".product-button-prev",
                      }}
                      spaceBetween={30}
                      slidesPerView={4}
                      loop={true}
                      className="product-active"
                    >
                      {/* Sample Slides - repeat with your product data */}
                      <SwiperSlide>
                        <div className="product__item">
                          <div className="product__thumb">
                            <Link to="/productDetails">
                              <img
                                src="assets/img/products/products_img01.jpg"
                                alt="img"
                              />
                            </Link>
                            <div className="product__action">
                              <Link to="/productDetails">
                                <i className="flaticon-love" />
                              </Link>
                              <Link to="/productDetails">
                                <i className="flaticon-loupe" />
                              </Link>
                              <Link to="/productDetails">
                                <i className="flaticon-exchange" />
                              </Link>
                            </div>
                            <div className="sale-wrap">
                              <span>New</span>
                            </div>
                            <div className="product__add-cart">
                              <Link to="/productDetails" className="btn">
                                <i className="flaticon-shopping-bag" /> Add To
                                Cart
                              </Link>
                            </div>
                          </div>
                          <div
                            className="product__content"
                            style={{ padding: 10 }}
                          >
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <Link to="/productDetails">
                                Dog Harness-Neoprene Comfort Liner-Orange and
                                ...
                              </Link>
                            </h4>
                            <h3 className="price">
                              ₹ 12.00 <del>₹ 25.00</del>
                            </h3>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="product__item">
                          <div className="product__thumb">
                            <Link to="/productDetails">
                              <img
                                src="assets/img/products/products_img01.jpg"
                                alt="img"
                              />
                            </Link>
                            <div className="product__action">
                              <Link to="/productDetails">
                                <i className="flaticon-love" />
                              </Link>
                              <Link to="/productDetails">
                                <i className="flaticon-loupe" />
                              </Link>
                              <Link to="/productDetails">
                                <i className="flaticon-exchange" />
                              </Link>
                            </div>
                            <div className="sale-wrap">
                              <span>New</span>
                            </div>
                            <div className="product__add-cart">
                              <Link to="/productDetails" className="btn">
                                <i className="flaticon-shopping-bag" /> Add To
                                Cart
                              </Link>
                            </div>
                          </div>
                          <div
                            className="product__content"
                            style={{ padding: 10 }}
                          >
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <Link to="/productDetails">
                                Dog Harness-Neoprene Comfort Liner-Orange and
                                ...
                              </Link>
                            </h4>
                            <h3 className="price">
                              ₹ 12.00 <del>₹ 25.00</del>
                            </h3>
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* Add more <SwiperSlide> items here */}
                    </Swiper>
                  </div>
                  <div className="product__nav-wrap">
                    <button className="product-button-prev">
                      <i className="flaticon-left-chevron" />
                    </button>
                    <button className="product-button-next">
                      <i className="flaticon-right-arrow-angle" />
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* product-area-end */}
    </div>
  );
};

export default FeaturedProducts;
