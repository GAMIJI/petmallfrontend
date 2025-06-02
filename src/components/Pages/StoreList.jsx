import React from "react";

const StoreList = () => {
  return (
    <div>
      <main>
        {/* breadcrumb-area */}
        <section className="breadcrumb__area fix">
          {/* <div class="container">
        <div class="row align-items-end">
            <div class="col-lg-8">
                <div class="breadcrumb__content">
                    <h3 class="title">All Pets</h3>
                    <nav class="breadcrumb">
                        <span property="itemListElement" typeof="ListItem">
                            <a href="index-2.html">Home</a>
                        </span>
                        <span class="breadcrumb-separator"><i class="flaticon-right-arrow-angle"></i></span>
                        <span property="itemListElement" typeof="ListItem">All Pets</span>
                    </nav>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="breadcrumb__img">
                    <img src="assets/img/images/breadcrumb_img.png" alt="img" data-aos="fade-left" data-aos-delay="800">
                </div>
            </div>
        </div>
    </div> */}
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
        {/* features-area */}
        <section className="features__area-two">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="features__item-two">
                  <div className="features__thumb">
                    <img src="assets/img/images/features_img01.jpg" alt="img" />
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
                    <img src="assets/img/images/features_img02.jpg" alt="img" />
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
        {/* animal-area */}
        <section className="animal__area-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 order-0 order-lg-2">
                <div className="container custom-container-two">
                  <div className="product__item-wrap-two">
                    <div className="row justify-content-center gutter-20">
                      <div className="col-xl-4 col-lg-6 col-md-12 p-0">
                        <div className="store__pic">
                          <img
                            src="https://threebestrated.in/images/GiantlandPetShop-Indore-MP.jpeg"
                            alt="img"
                          />
                          <div className="row store__profile">
                            <div className="store__profile_1 p-0">
                              <img
                                className=""
                                src="https://ih1.redbubble.net/image.5013357025.2285/tst,large,507x507-pad,600x600,f8f8f8.u2.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="store__profile_2">
                              <h5 className="title"> Pet Shop Indore</h5>
                              <p>500.0 m away</p>
                              <div className="product__reviews">
                                <div
                                  className="rating"
                                  style={{ marginLeft: 0 }}
                                >
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                                <span>(2 Reviews)</span>
                              </div>
                            </div>
                          </div>
                          <div className="store__add">
                            <div className="store__location">
                              <img
                                src="assets/img/icon/icons8-location-100.png"
                                alt="gif"
                              />
                            </div>
                            <div className="store__location2">
                              Shanker Nagar Lodhipara Chowk, Raipur-Chhattisgarh
                            </div>
                          </div>
                          <div className="store__btn">
                            <a href="product.html" className="btn shop-btn">
                              Shop Now{" "}
                              <img
                                src="assets/img/icon/right_arrow.svg"
                                alt=""
                                className="injectable"
                              />
                            </a>
                          </div>
                          {/* <div class="view-store">
                                              <button class="view-store-btn">View Store →</button>
                                          </div> */}
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-12 p-0">
                        <div className="store__pic">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrE6Npglqi0GIJREX1vWlcDTx1GJehNgj3uqXlZBoqZcIh9PUA1wujaJuGpcOlz-cXZDs&usqp=CAU"
                            alt="img"
                          />
                          <div className="row store__profile">
                            <div className="store__profile_1 p-0">
                              <img
                                src="https://i.pinimg.com/736x/1a/fb/fd/1afbfd6c2fdb71242db1c7389d15720d.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="store__profile_2">
                              <h5 className="title">
                                {" "}
                                Persian Paradise Cattery
                              </h5>
                              <p>500.0 m away</p>
                              <div className="product__reviews">
                                <div
                                  className="rating"
                                  style={{ marginLeft: 0 }}
                                >
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                                <span>(2 Reviews)</span>
                              </div>
                            </div>
                          </div>
                          <div className="store__add">
                            <div className="store__location">
                              <img
                                src="assets/img/icon/icons8-location-100.png"
                                alt="gif"
                              />
                            </div>
                            <div className="store__location2">
                              Shanker Nagar Lodhipara Chowk, Raipur-Chhattisgarh
                            </div>
                          </div>
                          <div className="store__btn">
                            <a href="product.html" className="btn shop-btn">
                              Shop Now{" "}
                              <img
                                src="assets/img/icon/right_arrow.svg"
                                alt=""
                                className="injectable"
                              />
                            </a>
                          </div>
                          {/* <div class="view-store">
                                              <button class="view-store-btn">View Store →</button>
                                          </div> */}
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-12 p-0">
                        <div className="store__pic">
                          <img
                            src="https://threebestrated.in/images/GiantlandPetShop-Indore-MP.jpeg"
                            alt="img"
                          />
                          <div className="row store__profile">
                            <div className="store__profile_1 p-0">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNg9qiPZ3VyJouaLMs66R5kaMSi_rcp3WvA&s"
                                alt="img"
                              />
                            </div>
                            <div className="store__profile_2">
                              <h5 className="title"> Pet Shop Indore</h5>
                              <p>1.5 km away</p>
                              <div className="product__reviews">
                                <div
                                  className="rating"
                                  style={{ marginLeft: 0 }}
                                >
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                                <span>(2 Reviews)</span>
                              </div>
                            </div>
                          </div>
                          <div className="store__add">
                            <div className="store__location">
                              <img
                                src="assets/img/icon/icons8-location-100.png"
                                alt="gif"
                              />
                            </div>
                            <div className="store__location2">
                              Shanker Nagar Lodhipara Chowk, Raipur-Chhattisgarh
                            </div>
                          </div>
                          <div className="store__btn">
                            <a href="product.html" className="btn shop-btn">
                              Shop Now{" "}
                              <img
                                src="assets/img/icon/right_arrow.svg"
                                alt=""
                                className="injectable"
                              />
                            </a>
                          </div>
                          {/* <div class="view-store">
                                              <button class="view-store-btn">View Store →</button>
                                          </div> */}
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-12 p-0">
                        <div className="store__pic">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKdqhd2iQh9TMYWTtt7a_KNDvYd5YLkZc1g&s"
                            alt="img"
                          />
                          <div className="row store__profile">
                            <div className="store__profile_1 p-0">
                              <img
                                src="https://img.freepik.com/premium-vector/colorful-cute-dog-sticker-dog-clipart-dog-lover-design-vector-illustration_658322-94.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="store__profile_2">
                              <h5 className="title"> Pet Shop Indore</h5>
                              <p>1.5 km away</p>
                              <div className="product__reviews">
                                <div
                                  className="rating"
                                  style={{ marginLeft: 0 }}
                                >
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                                <span>(2 Reviews)</span>
                              </div>
                            </div>
                          </div>
                          <div className="store__add">
                            <div className="store__location">
                              <img
                                src="assets/img/icon/icons8-location-100.png"
                                alt="gif"
                              />
                            </div>
                            <div className="store__location2">
                              Shanker Nagar Lodhipara Chowk, Raipur-Chhattisgarh
                            </div>
                          </div>
                          <div className="store__btn">
                            <a href="product.html" className="btn shop-btn">
                              Shop Now{" "}
                              <img
                                src="assets/img/icon/right_arrow.svg"
                                alt=""
                                className="injectable"
                              />
                            </a>
                          </div>
                          {/* <div class="view-store">
                                          <button class="view-store-btn">View Store →</button>
                                      </div> */}
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-12 p-0">
                        <div className="store__pic">
                          <img
                            src="https://threebestrated.in/images/GiantlandPetShop-Indore-MP.jpeg"
                            alt="img"
                          />
                          <div className="row store__profile">
                            <div className="store__profile_1 p-0">
                              <img
                                className=""
                                src="https://ih1.redbubble.net/image.5013357025.2285/tst,large,507x507-pad,600x600,f8f8f8.u2.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="store__profile_2">
                              <h5 className="title"> Pet Shop Indore</h5>
                              <p>500.0 m away</p>
                              <div className="product__reviews">
                                <div
                                  className="rating"
                                  style={{ marginLeft: 0 }}
                                >
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                                <span>(2 Reviews)</span>
                              </div>
                            </div>
                          </div>
                          <div className="store__add">
                            <div className="store__location">
                              <img
                                src="assets/img/icon/icons8-location-100.png"
                                alt="gif"
                              />
                            </div>
                            <div className="store__location2">
                              Shanker Nagar Lodhipara Chowk, Raipur-Chhattisgarh
                            </div>
                          </div>
                          <div className="store__btn">
                            <a href="product.html" className="btn shop-btn">
                              Shop Now{" "}
                              <img
                                src="assets/img/icon/right_arrow.svg"
                                alt=""
                                className="injectable"
                              />
                            </a>
                          </div>
                          {/* <div class="view-store">
                                                <button class="view-store-btn">View Store →</button>
                                            </div> */}
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-12 p-0">
                        <div className="store__pic">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrE6Npglqi0GIJREX1vWlcDTx1GJehNgj3uqXlZBoqZcIh9PUA1wujaJuGpcOlz-cXZDs&usqp=CAU"
                            alt="img"
                          />
                          <div className="row store__profile">
                            <div className="store__profile_1 p-0">
                              <img
                                src="https://i.pinimg.com/736x/1a/fb/fd/1afbfd6c2fdb71242db1c7389d15720d.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="store__profile_2">
                              <h5 className="title">
                                {" "}
                                Persian Paradise Cattery
                              </h5>
                              <p>500.0 m away</p>
                              <div className="product__reviews">
                                <div
                                  className="rating"
                                  style={{ marginLeft: 0 }}
                                >
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                                <span>(2 Reviews)</span>
                              </div>
                            </div>
                          </div>
                          <div className="store__add">
                            <div className="store__location">
                              <img
                                src="assets/img/icon/icons8-location-100.png"
                                alt="gif"
                              />
                            </div>
                            <div className="store__location2">
                              Shanker Nagar Lodhipara Chowk, Raipur-Chhattisgarh
                            </div>
                          </div>
                          <div className="store__btn">
                            <a href="product.html" className="btn shop-btn">
                              Shop Now{" "}
                              <img
                                src="assets/img/icon/right_arrow.svg"
                                alt=""
                                className="injectable"
                              />
                            </a>
                          </div>
                          {/* <div class="view-store">
                                              <button class="view-store-btn">View Store →</button>
                                          </div> */}
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-12 p-0">
                        <div className="store__pic">
                          <img
                            src="https://threebestrated.in/images/GiantlandPetShop-Indore-MP.jpeg"
                            alt="img"
                          />
                          <div className="row store__profile">
                            <div className="store__profile_1 p-0">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNg9qiPZ3VyJouaLMs66R5kaMSi_rcp3WvA&s"
                                alt="img"
                              />
                            </div>
                            <div className="store__profile_2">
                              <h5 className="title"> Pet Shop Indore</h5>
                              <p>1.5 km away</p>
                              <div className="product__reviews">
                                <div
                                  className="rating"
                                  style={{ marginLeft: 0 }}
                                >
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                                <span>(2 Reviews)</span>
                              </div>
                            </div>
                          </div>
                          <div className="store__add">
                            <div className="store__location">
                              <img
                                src="assets/img/icon/icons8-location-100.png"
                                alt="gif"
                              />
                            </div>
                            <div className="store__location2">
                              Shanker Nagar Lodhipara Chowk, Raipur-Chhattisgarh
                            </div>
                          </div>
                          <div className="store__btn">
                            <a href="product.html" className="btn shop-btn">
                              Shop Now{" "}
                              <img
                                src="assets/img/icon/right_arrow.svg"
                                alt=""
                                className="injectable"
                              />
                            </a>
                          </div>
                          {/* <div class="view-store">
                                              <button class="view-store-btn">View Store →</button>
                                          </div> */}
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-12 p-0">
                        <div className="store__pic">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKdqhd2iQh9TMYWTtt7a_KNDvYd5YLkZc1g&s"
                            alt="img"
                          />
                          <div className="row store__profile">
                            <div className="store__profile_1 p-0">
                              <img
                                src="https://img.freepik.com/premium-vector/colorful-cute-dog-sticker-dog-clipart-dog-lover-design-vector-illustration_658322-94.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="store__profile_2">
                              <h5 className="title"> Pet Shop Indore</h5>
                              <p>1.5 km away</p>
                              <div className="product__reviews">
                                <div
                                  className="rating"
                                  style={{ marginLeft: 0 }}
                                >
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                                <span>(2 Reviews)</span>
                              </div>
                            </div>
                          </div>
                          <div className="store__add">
                            <div className="store__location">
                              <img
                                src="assets/img/icon/icons8-location-100.png"
                                alt="gif"
                              />
                            </div>
                            <div className="store__location2">
                              Shanker Nagar Lodhipara Chowk, Raipur-Chhattisgarh
                            </div>
                          </div>
                          <div className="store__btn">
                            <a href="product.html" className="btn shop-btn">
                              Shop Now{" "}
                              <img
                                src="assets/img/icon/right_arrow.svg"
                                alt=""
                                className="injectable"
                              />
                            </a>
                          </div>
                          {/* <div class="view-store">
                                          <button class="view-store-btn">View Store →</button>
                                      </div> */}
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

export default StoreList;
