import React from "react";

const AnimalList = () => {
  return (
    <div>
      <main>
        {/* breadcrumb-area */}
        <section className="breadcrumb__area fix">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8">
                <div className="breadcrumb__content">
                  <h3 className="title">All Pets</h3>
                  <nav className="breadcrumb">
                    <span property="itemListElement" typeof="ListItem">
                      <a href="index-2.html">Home</a>
                    </span>
                    <span className="breadcrumb-separator">
                      <i className="flaticon-right-arrow-angle" />
                    </span>
                    <span property="itemListElement" typeof="ListItem">
                      All Pets
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
        {/* animal-area */}
        <section className="animal__area-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 order-0 order-lg-2">
                <div className="row">
                  <div className="col-xl-4 col-md-6">
                    <div className="animal__item animal__item-two animal__item-three shine-animate-item">
                      <div className="animal__thumb animal__thumb-two shine-animate">
                        <a href="animal-details.html">
                          <img src="assets/img/shop/shop_img01.jpg" alt="img" />
                        </a>
                        <a href="animal-details.html" className="wishlist">
                          <i className="flaticon-love" />
                        </a>
                      </div>
                      <div className="animal__content animal__content-two">
                        <h4 className="title">
                          <a href="animal-details.html">Cute French Bulldog</a>
                        </h4>
                        <div className="pet-info">
                          <ul className="list-wrap">
                            <li>
                              Gender: <span>Male</span>
                            </li>
                            <li>
                              Breed: <span>French</span>
                            </li>
                          </ul>
                        </div>
                        <div className="location">
                          <i className="flaticon-placeholder" />
                          <span>Bakersfield, California</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="animal__item animal__item-two animal__item-three shine-animate-item">
                      <div className="animal__thumb animal__thumb-two shine-animate">
                        <a href="animal-details.html">
                          <img src="assets/img/shop/shop_img02.jpg" alt="img" />
                        </a>
                        <a href="animal-details.html" className="wishlist">
                          <i className="flaticon-love" />
                        </a>
                      </div>
                      <div className="animal__content animal__content-two">
                        <h4 className="title">
                          <a href="animal-details.html">purebred pussycat</a>
                        </h4>
                        <div className="pet-info">
                          <ul className="list-wrap">
                            <li>
                              Gender: <span>Female</span>
                            </li>
                            <li>
                              Breed: <span>Germany</span>
                            </li>
                          </ul>
                        </div>
                        <div className="location">
                          <i className="flaticon-placeholder" />
                          <span>Central Park, New York</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="animal__item animal__item-two animal__item-three shine-animate-item">
                      <div className="animal__thumb animal__thumb-two shine-animate">
                        <a href="animal-details.html">
                          <img src="assets/img/shop/shop_img03.jpg" alt="img" />
                        </a>
                        <a href="animal-details.html" className="wishlist">
                          <i className="flaticon-love" />
                        </a>
                      </div>
                      <div className="animal__content animal__content-two">
                        <h4 className="title">
                          <a href="animal-details.html">Italian Rabbit</a>
                        </h4>
                        <div className="pet-info">
                          <ul className="list-wrap">
                            <li>
                              Gender: <span>Male</span>
                            </li>
                            <li>
                              Breed: <span>Italy</span>
                            </li>
                          </ul>
                        </div>
                        <div className="location">
                          <i className="flaticon-placeholder" />
                          <span>Birmingham, Alabama</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="animal__item animal__item-two animal__item-three shine-animate-item">
                      <div className="animal__thumb animal__thumb-two shine-animate">
                        <a href="animal-details.html">
                          <img src="assets/img/shop/shop_img04.jpg" alt="img" />
                        </a>
                        <a href="animal-details.html" className="wishlist">
                          <i className="flaticon-love" />
                        </a>
                      </div>
                      <div className="animal__content animal__content-two">
                        <h4 className="title">
                          <a href="animal-details.html">Macaw Russian</a>
                        </h4>
                        <div className="pet-info">
                          <ul className="list-wrap">
                            <li>
                              Gender: <span>Male</span>
                            </li>
                            <li>
                              Breed: <span>Canada</span>
                            </li>
                          </ul>
                        </div>
                        <div className="location">
                          <i className="flaticon-placeholder" />
                          <span>Anchorage, Alaska</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="animal__item animal__item-two animal__item-three shine-animate-item">
                      <div className="animal__thumb animal__thumb-two shine-animate">
                        <a href="animal-details.html">
                          <img src="assets/img/shop/shop_img05.jpg" alt="img" />
                        </a>
                        <a href="animal-details.html" className="wishlist">
                          <i className="flaticon-love" />
                        </a>
                      </div>
                      <div className="animal__content animal__content-two">
                        <h4 className="title">
                          <a href="animal-details.html">Egypt Cat</a>
                        </h4>
                        <div className="pet-info">
                          <ul className="list-wrap">
                            <li>
                              Gender: <span>Male</span>
                            </li>
                            <li>
                              Breed: <span>Egypt</span>
                            </li>
                          </ul>
                        </div>
                        <div className="location">
                          <i className="flaticon-placeholder" />
                          <span>Bakersfield, California</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="animal__item animal__item-two animal__item-three shine-animate-item">
                      <div className="animal__thumb animal__thumb-two shine-animate">
                        <a href="animal-details.html">
                          <img src="assets/img/shop/shop_img06.jpg" alt="img" />
                        </a>
                        <a href="animal-details.html" className="wishlist">
                          <i className="flaticon-love" />
                        </a>
                      </div>
                      <div className="animal__content animal__content-two">
                        <h4 className="title">
                          <a href="animal-details.html">Australian Shepherd</a>
                        </h4>
                        <div className="pet-info">
                          <ul className="list-wrap">
                            <li>
                              Gender: <span>Female</span>
                            </li>
                            <li>
                              Breed: <span>Australia</span>
                            </li>
                          </ul>
                        </div>
                        <div className="location">
                          <i className="flaticon-placeholder" />
                          <span>Central Park, New York</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="animal__item animal__item-two animal__item-three shine-animate-item">
                      <div className="animal__thumb animal__thumb-two shine-animate">
                        <a href="animal-details.html">
                          <img src="assets/img/shop/shop_img07.jpg" alt="img" />
                        </a>
                        <a href="animal-details.html" className="wishlist">
                          <i className="flaticon-love" />
                        </a>
                      </div>
                      <div className="animal__content animal__content-two">
                        <h4 className="title">
                          <a href="animal-details.html">Beagle Britain</a>
                        </h4>
                        <div className="pet-info">
                          <ul className="list-wrap">
                            <li>
                              Gender: <span>Female</span>
                            </li>
                            <li>
                              Breed: <span>Egypt</span>
                            </li>
                          </ul>
                        </div>
                        <div className="location">
                          <i className="flaticon-placeholder" />
                          <span>Anchorage, Alaska</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="animal__item animal__item-two animal__item-three shine-animate-item">
                      <div className="animal__thumb animal__thumb-two shine-animate">
                        <a href="animal-details.html">
                          <img src="assets/img/shop/shop_img08.jpg" alt="img" />
                        </a>
                        <a href="animal-details.html" className="wishlist">
                          <i className="flaticon-love" />
                        </a>
                      </div>
                      <div className="animal__content animal__content-two">
                        <h4 className="title">
                          <a href="animal-details.html">Maltipoo USA</a>
                        </h4>
                        <div className="pet-info">
                          <ul className="list-wrap">
                            <li>
                              Gender: <span>Male</span>
                            </li>
                            <li>
                              Breed: <span>USA</span>
                            </li>
                          </ul>
                        </div>
                        <div className="location">
                          <i className="flaticon-placeholder" />
                          <span>Birmingham, Alabama</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="animal__item animal__item-two animal__item-three shine-animate-item">
                      <div className="animal__thumb animal__thumb-two shine-animate">
                        <a href="animal-details.html">
                          <img src="assets/img/shop/shop_img09.jpg" alt="img" />
                        </a>
                        <a href="animal-details.html" className="wishlist">
                          <i className="flaticon-love" />
                        </a>
                      </div>
                      <div className="animal__content animal__content-two">
                        <h4 className="title">
                          <a href="animal-details.html">purebred pussycat</a>
                        </h4>
                        <div className="pet-info">
                          <ul className="list-wrap">
                            <li>
                              Gender: <span>Female</span>
                            </li>
                            <li>
                              Breed: <span>Germany</span>
                            </li>
                          </ul>
                        </div>
                        <div className="location">
                          <i className="flaticon-placeholder" />
                          <span>Central Park, New York</span>
                        </div>
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
                <aside className="animal__sidebar">
                  <div className="animal__widget">
                    <h4 className="animal__widget-title">Filters</h4>
                    <div className="sidebar-search-form">
                      <form action="#">
                        <input type="text" placeholder="Type Keywords. . ." />
                        <button type="submit">
                          <i className="flaticon-loupe" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="animal__widget">
                    <h4 className="animal__widget-title">Price Range</h4>
                    <div className="price_filter">
                      <div id="slider-range" />
                      <div className="price_slider_amount">
                        <input
                          type="text"
                          id="amount"
                          name="price"
                          placeholder="Add Your Price"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="animal__widget">
                    <h4 className="animal__widget-title">Pet Categories</h4>
                    <div className="courses-cat-list">
                      <ul className="list-wrap">
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="cat_1"
                            />
                            <label className="form-check-label" htmlFor="cat_1">
                              Dogs <span>(344)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="cat_2"
                            />
                            <label className="form-check-label" htmlFor="cat_2">
                              Cats <span>(12)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="cat_3"
                            />
                            <label className="form-check-label" htmlFor="cat_3">
                              Rabbit <span>(56)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="cat_4"
                            />
                            <label className="form-check-label" htmlFor="cat_4">
                              Birds <span>(14)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="cat_5"
                            />
                            <label className="form-check-label" htmlFor="cat_5">
                              Fish <span>(11)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="cat_6"
                            />
                            <label className="form-check-label" htmlFor="cat_6">
                              Others <span>(14)</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="animal__widget">
                    <h4 className="animal__widget-title">Breeds</h4>
                    <div className="courses-cat-list">
                      <ul className="list-wrap">
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="bre_1"
                            />
                            <label className="form-check-label" htmlFor="bre_1">
                              Airedale Terrier
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="bre_2"
                            />
                            <label className="form-check-label" htmlFor="bre_2">
                              American Eskimo
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="bre_3"
                            />
                            <label className="form-check-label" htmlFor="bre_3">
                              Basset Hound
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="bre_4"
                            />
                            <label className="form-check-label" htmlFor="bre_4">
                              Bernese Mountain Dog
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="bre_5"
                            />
                            <label className="form-check-label" htmlFor="bre_5">
                              Bichon Frise
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="animal__widget">
                    <h4 className="animal__widget-title">Gender</h4>
                    <div className="courses-cat-list">
                      <ul className="list-wrap">
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="gender_1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_1"
                            >
                              Male (344)
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="gender_2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_2"
                            >
                              Female (21)
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="animal__widget">
                    <h4 className="animal__widget-title">Location</h4>
                    <div className="courses-cat-list">
                      <ul className="list-wrap">
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="loc_1"
                            />
                            <label className="form-check-label" htmlFor="loc_1">
                              All
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="loc_2"
                            />
                            <label className="form-check-label" htmlFor="loc_2">
                              NewYork City
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="loc_3"
                            />
                            <label className="form-check-label" htmlFor="loc_3">
                              Kansas City
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="loc_4"
                            />
                            <label className="form-check-label" htmlFor="loc_4">
                              NewJersey
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="apply-btn">
                      <a href="#" className="btn">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
        {/* animal-area-end */}
      </main>
    </div>
  );
};

export default AnimalList;
