import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerSlider from "./BannerSlider";
import FeaturedProducts from "./FeaturedProducts";
import Category from "./Category";
import TrendingReels from "./TrendingReels";
import NearByStore from "./NearByStore";
import Doctors from "./Doctors";
import Blogs from "./Blogs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <>
        {/* main-area */}
        <main className="fix">
          {/* banner-area */}
          <BannerSlider />
          {/* banner-area-end */}
          {/* features-area */}
          <section className="features__area">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-sm-6 ">
                  <div className="features__item features__c1">
                    <div className="features__icon">
                      <img
                        width={65}
                        height={65}
                        src="assets/img/icon/shipped.png"
                        alt="truck--v1"
                        className="injectable"
                      />
                    </div>
                    <div className="features__content">
                      <h4 className="title">Save 35%</h4>
                      <p>On your first repeat delivery</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 ">
                  <div className="features__item features__c2">
                    <div className="features__icon">
                      <img
                        width={65}
                        height={65}
                        src="assets/img/icon/kitty.png"
                        alt="pocket-money-skin-type-3"
                        className="injectable"
                      />
                    </div>
                    <div className="features__content">
                      <h4 className="title">Latest Deals</h4>
                      <p>Save up to $399/year</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 ">
                  <div className="features__item features__c3">
                    <div className="features__icon">
                      <img
                        width={65}
                        height={65}
                        src="assets/img/icon/star.png"
                        alt="return-purchase"
                        className="injectable"
                      />
                    </div>
                    <div className="features__content">
                      <h4 className="title">Top Rated Products</h4>
                      <p>Recommended pet favourits</p>
                    </div>
                  </div>
                </div>
                {/* icon 4 commented */}
                {/* <div class="col-xl-3 col-lg-4 col-sm-6 ">
                  <div class="features__item features__c4">
                      <div class="features__icon">
                         <img width="75" height="75" src="https://img.icons8.com/bubbles/100/handshake-heart.png" alt="handshake-heart" class="injectable"/>
                      </div>
                      <div class="features__content">
                          <h4 class="title">Best Deal Offer</h4>
                          <p>Grab Your Gear and Go</p>
                      </div>
                  </div>
              </div> */}
              </div>
            </div>
          </section>
          {/* features-area-end */}
          {/* divider-area */}
          <div className="divider-area">
            <div className="container">
              <div className="divider-wrap" />
            </div>
          </div>
          {/* divider-area-end */}
          {/*features-area */}
          <section className="features__area-two">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img src="assets/img/images/Screenshot1.png" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img src="assets/img/images/Screenshot2.png" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img src="assets/img/images/Screenshot3.png" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img src="assets/img/images/Screenshot4.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* features-area-end */}
          <FeaturedProducts />

          <Category />
          {/* divider-area */}
          <div className="divider-area">
            <div className="container">
              <div className="divider-wrap" />
            </div>
          </div>
          {/* divider-area-end */}
          {/* Trending-reels-area */}
          <TrendingReels />
          {/* Trending-reels-area-end */}
          {/* Near by store */}
          <NearByStore />
  
          {/* features-area-end */}
        <section className="product__area-two">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-8">
        <div className="section__title-two mb-20">
          <h2 className="title">
            Hot selling product
            <img
              src="assets/img/images/title_shape.svg"
              alt=""
              className="injectable"
            />
          </h2>
        </div>
      </div>
      <div className="col-md-4">
        <div className="view-all-btn">
          <Link to="/productList">
            See All <i className="flaticon-right-arrow-angle" />
          </Link>
        </div>
      </div>
    </div>
  </div>
  <div className="container custom-container-two">
    <div className="product__item-wrap-two">
      <div className="row gutter-20 row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
        <div className="col">
          <div className="product__item">
            <div className="product__thumb">
              <a href="product-details.html">
                <img
                  src="assets/img/products/products_img01.jpg"
                  alt="img"
                />
              </a>
              <div className="product__action">
                <a href="product-details.html">
                  <i className="flaticon-love" />
                </a>
                <a href="product-details.html">
                  <i className="flaticon-loupe" />
                </a>
                <a href="product-details.html">
                  <i className="flaticon-exchange" />
                </a>
              </div>
              <div className="sale-wrap sale-wrap-two">
                <span>New</span>
              </div>
              <div className="product__add-cart">
                <a href="product-details.html" className="btn">
                  <i className="flaticon-shopping-bag" />
                  Add To Cart
                </a>
              </div>
            </div>
            <div className="product__content">
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
                <a href="product-details.html">
                  Dog Harness-Neoprene Comfort Liner-Orange and ...
                </a>
              </h4>
              <h3 className="price">
                ₹ 12.00 <del>₹ 25.00</del>
              </h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product__item">
            <div className="product__thumb">
              <a href="product-details.html">
                <img
                  src="assets/img/products/products_img02.jpg"
                  alt="img"
                />
              </a>
              <div className="product__action">
                <a href="product-details.html">
                  <i className="flaticon-love" />
                </a>
                <a href="product-details.html">
                  <i className="flaticon-loupe" />
                </a>
                <a href="product-details.html">
                  <i className="flaticon-exchange" />
                </a>
              </div>
              <div className="sale-wrap sale-wrap-two">
                <span>Sale!</span>
              </div>
              <div className="product__add-cart">
                <a href="product-details.html" className="btn">
                  <i className="flaticon-shopping-bag" />
                  Add To Cart
                </a>
              </div>
            </div>
            <div className="product__content">
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
                <a href="product-details.html">
                  Arm & Hammer Super Deodori zing Dog Shampoo, Pet Wash
                </a>
              </h4>
              <h3 className="price">
                ₹ 20.00 <del>₹ 30.00</del>
              </h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product__item">
            <div className="product__thumb">
              <a href="product-details.html">
                <img
                  src="assets/img/products/products_img03.jpg"
                  alt="img"
                />
              </a>
              <div className="product__action">
                <a href="product-details.html">
                  <i className="flaticon-love" />
                </a>
                <a href="product-details.html">
                  <i className="flaticon-loupe" />
                </a>
                <a href="product-details.html">
                  <i className="flaticon-exchange" />
                </a>
              </div>
              <div className="product__add-cart">
                <a href="product-details.html" className="btn">
                  <i className="flaticon-shopping-bag" />
                  Add To Cart
                </a>
              </div>
            </div>
            <div className="product__content">
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
                <a href="product-details.html">
                  Milk-Bone Brushing Chews Daily Dental Dog Treats ...
                </a>
              </h4>
              <h3 className="price">
                ₹ 36.00 <del>₹ 56.00</del>
              </h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product__item">
            <div className="product__thumb">
              <a href="product-details.html">
                <img
                  src="assets/img/products/products_img04.jpg"
                  alt="img"
                />
              </a>
              <div className="product__action">
                <a href="product-details.html">
                  <i className="flaticon-love" />
                </a>
                <a href="product-details.html">
                  <i className="flaticon-loupe" />
                </a>
                <a href="product-details.html">
                  <i className="flaticon-exchange" />
                </a>
              </div>
              <div className="sale-wrap sale-wrap-two">
                <span>Sale!</span>
              </div>
              <div className="product__add-cart">
                <a href="product-details.html" className="btn">
                  <i className="flaticon-shopping-bag" />
                  Add To Cart
                </a>
              </div>
            </div>
            <div className="product__content">
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
                <a href="product-details.html">
                  Two Door Top Load Plastic Kennel & Pet Carrier, Blue 19"
                </a>
              </h4>
              <h3 className="price">
                ₹ 18.00 <del>₹ 33.00</del>
              </h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product__item">
            <div className="product__thumb">
              <a href="product-details.html">
                <img
                  src="assets/img/products/products_img05.jpg"
                  alt="img"
                />
              </a>
              <div className="product__action">
                <a href="product-details.html">
                  <i className="flaticon-love" />
                </a>
                <a href="product-details.html">
                  <i className="flaticon-loupe" />
                </a>
                <a href="product-details.html">
                  <i className="flaticon-exchange" />
                </a>
              </div>
              <div className="sale-wrap sale-wrap-two">
                <span>New</span>
              </div>
              <div className="product__add-cart">
                <a href="product-details.html" className="btn">
                  <i className="flaticon-shopping-bag" />
                  Add To Cart
                </a>
              </div>
            </div>
            <div className="product__content">
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
                <a href="product-details.html">
                  The Kitten House with Mat Sleeping Bed House
                </a>
              </h4>
              <h3 className="price">
                ₹ 19.00 <del>₹ 28.00</del>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="product__shape-wrap">
    <img
      src="assets/img/products/products_shape01.png"
      alt="shape"
      className="ribbonRotate"
    />
    <img
      src="assets/img/products/products_shape02.png"
      alt="shape"
      data-aos="fade-up-right"
      data-aos-delay={400}
    />
  </div>
</section>
          {/* Near by store end */}
          {/* My Expertise */}
          <Doctors />
          {/* My Expertise */}
          {/* ad-banner-area */}
          <div className="ad-banner-area pb-30">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="ad-banner-img">
                    <a href="#">
                      <img
                        src="assets/img/images/advertisement.jpg"
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ad-banner-area-end */}
          {/* product-area-two */}
          <section className="product__area-two">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="section__title-two mb-20">
                    <h2 className="title">
                      Featured Products 
                      <img
                        src="assets/img/images/title_shape.svg"
                        alt=""
                        className="injectable"
                      />
                    </h2>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="view-all-btn">
                   <Link to={"/productList"}>
                     See All
                      <i className="flaticon-right-arrow-angle" />
                    
                   </Link>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="container custom-container-two">
              <div className="product__item-wrap-two">
                <div className="row gutter-20 row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
                  <div className="col">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/img/products/products_img06.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product__action">
                          <a href="product-details.html">
                            <i className="flaticon-love" />
                          </a>
                          <a href="product-details.html">
                            <i className="flaticon-loupe" />
                          </a>
                          <a href="product-details.html">
                            <i className="flaticon-exchange" />
                          </a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn">
                            <i className="flaticon-shopping-bag" />
                            Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product__content">
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
                          <a href="product-details.html">
                            Dog Puzzle Toys, Squeaky Treat Dispensing Dog
                          </a>
                        </h4>
                        <h3 className="price">
                          {" "}
                          ₹ 18.00 <del> ₹ 33.00</del>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/img/products/products_img07.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product__action">
                          <a href="product-details.html">
                            <i className="flaticon-love" />
                          </a>
                          <a href="product-details.html">
                            <i className="flaticon-loupe" />
                          </a>
                          <a href="product-details.html">
                            <i className="flaticon-exchange" />
                          </a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn">
                            <i className="flaticon-shopping-bag" />
                            Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product__content">
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
                          <a href="product-details.html">
                            Zesty Paws Calming Puppy Bites Stress Relief for
                            Dogs, 60 Count
                          </a>
                        </h4>
                        <h3 className="price">
                          {" "}
                          ₹ 16.00 <del> ₹ 50.00</del>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/img/products/products_img08.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product__action">
                          <a href="product-details.html">
                            <i className="flaticon-love" />
                          </a>
                          <a href="product-details.html">
                            <i className="flaticon-loupe" />
                          </a>
                          <a href="product-details.html">
                            <i className="flaticon-exchange" />
                          </a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn">
                            <i className="flaticon-shopping-bag" />
                            Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product__content">
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
                          <a href="product-details.html">
                            Hartz Groomer's Best Extra Gentle Puppy Shampoo,
                            18oz.
                          </a>
                        </h4>
                        <h3 className="price">
                          {" "}
                          ₹ 30.00 <del> ₹ 88.00</del>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/img/products/products_img09.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product__action">
                          <a href="product-details.html">
                            <i className="flaticon-love" />
                          </a>
                          <a href="product-details.html">
                            <i className="flaticon-loupe" />
                          </a>
                          <a href="product-details.html">
                            <i className="flaticon-exchange" />
                          </a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn">
                            <i className="flaticon-shopping-bag" />
                            Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product__content">
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
                          <a href="product-details.html">
                            The Kitten House with Mat Sleeping Bed House
                          </a>
                        </h4>
                        <h3 className="price">
                          {" "}
                          ₹ 22.00 <del> ₹ 59.00</del>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/img/products/products_img10.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product__action">
                          <a href="product-details.html">
                            <i className="flaticon-love" />
                          </a>
                          <a href="product-details.html">
                            <i className="flaticon-loupe" />
                          </a>
                          <a href="product-details.html">
                            <i className="flaticon-exchange" />
                          </a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn">
                            <i className="flaticon-shopping-bag" />
                            Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product__content">
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
                          <a href="product-details.html">
                            Dog Harness-Neoprene Comfort Liner-Orange and
                            Comfort
                          </a>
                        </h4>
                        <h3 className="price">
                          {" "}
                          ₹ 11.00 <del> ₹ 48.00</del>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product__shape-wrap">
              <img
                src="assets/img/products/products_shape01.png"
                alt="shape"
                className="ribbonRotate"
              />
              <img
                src="assets/img/products/products_shape02.png"
                alt="shape"
                data-aos="fade-up-right"
                data-aos-delay={400}
              />
            </div>
          </section>
          {/* product-area-two-end */}
          {/* features-area */}
          <section className="features__area-two">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img
                        src="assets/img/images/features_img01.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="features__content-two">
                      <h2 className="title">
                        30% <span>Sale!</span>
                      </h2>
                      <strong>Free Shipping</strong>
                      <a href="product.html" className="btn shop-btn">
                        Shop Now{" "}
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
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img
                        src="assets/img/images/features_img02.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="features__content-two features__content-three">
                      <h2 className="title">Best Premium</h2>
                      <strong>Cat Food</strong>
                      <a href="product.html" className="btn shop-btn">
                        Shop Now{" "}
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
            </div>
          </section>
          {/* features-area-end */}
          {/* blog-post-area */}
          <Blogs />
          {/* blog-post-area-end */}
        </main>
        {/* main-area-end */}
      </>
    </div>
  );
};

export default Home;
