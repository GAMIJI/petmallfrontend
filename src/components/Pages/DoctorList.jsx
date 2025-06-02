import React from "react";

const DoctorList = () => {
  return (
    <div>
      <main className="fix">
        {/* features-area */}
        <section className="features__area-two">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="features__item-two">
                  <div className="features__thumb">
                    <img
                      height="280px"
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
            </div>
          </div>
        </section>
        {/* features-area-end */}
        {/* filter for experts */}
        <div className="container expert__filter">
          <div className="row">
            <div className="col-4 animal__sidebar2">
              <div className="animal__widget expert__widget">
                <h4 className="animal__widget-title m-0">Filters</h4>
                <div className="sidebar-search-form sidebar-search-form2">
                  <form action="#">
                    <input type="text" placeholder="Type Keywords. . ." />
                    <button type="submit">
                      <i className="flaticon-loupe" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                <ul className="navigation expert__navigation  ">
                  <li className="active menu-item-has-children">
                    <a href="#">Pet Categories</a>
                    <ul className="sub-menu">
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
                    <div className="dropdown-btn">
                      <span className="plus-line" />
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Gender</a>
                    <ul className="sub-menu">
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
                    <div className="dropdown-btn">
                      <span className="plus-line" />
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Location</a>
                    <ul className="sub-menu">
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
                    <div className="dropdown-btn">
                      <span className="plus-line" />
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Rating</a>
                    <ul className="sub-menu">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="loc_1"
                          />
                          <label className="form-check-label" htmlFor="loc_1">
                            1 star
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
                            2 star
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
                            3 star
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
                            4 star
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
                            5 star
                          </label>
                        </div>
                      </li>
                    </ul>
                    <div className="dropdown-btn">
                      <span className="plus-line" />
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Experience</a>
                    <ul className="sub-menu">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="loc_1"
                          />
                          <label className="form-check-label" htmlFor="loc_1">
                            1 Year
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
                            2 Year
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
                            5 Year
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
                            10 Year
                          </label>
                        </div>
                      </li>
                    </ul>
                    <div className="dropdown-btn">
                      <span className="plus-line" />
                    </div>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="plus-line" />
                </div>
                {/* <li><a href="contact.html">contacts</a></li> */}
              </div>
            </div>
          </div>
        </div>
        {/* product-area */}
        <section className="our__expertise">
          <div className="container">
            {/* My Expertise */}
            <div className="row justify-content-center ">
              {/* Doctor Card 1 */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="doc_post">
                  <div className="doc_post_pic">
                    <img
                      src="https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE="
                      alt="Dr. Nitin Kandpal"
                    />
                  </div>
                  <div className="doc_post_content">
                    <h3 className="doc_name">Dr. Nitin Kandpal</h3>
                    <p className="doc_specialty">Food Animal Veterinarians</p>
                    <div className="product__reviews our_expertise_reviews">
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(48 Reviews)</span>
                    </div>
                    <p>Exp : 7 years</p>
                    <p className="doc__qual">
                      <img
                        src="assets/img/icon/icon8-degree-48.png"
                        alt="img"
                      />
                      M.V.Sc.
                    </p>
                  </div>
                </div>
              </div>
              {/* Doctor Card 2 */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="doc_post">
                  <div className="doc_post_pic">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-n-Eb5PPHCiRyGR1vpCKxiucX1RsoZ0gEA&s"
                      alt="Dr. Aditi Tiwari"
                    />
                  </div>
                  <div className="doc_post_content">
                    <h3 className="doc_name">Dr. Aditi Tiwari</h3>
                    <p className="doc_specialty">Animal Welfare Specialists</p>
                    <div className="product__reviews our_expertise_reviews">
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(48 Reviews)</span>
                    </div>
                    <p>Exp : 7 years</p>
                    <p className="doc__qual">
                      <img
                        src="assets/img/icon/icon8-degree-48.png"
                        alt="img"
                      />
                      M.V.Sc.
                    </p>
                  </div>
                </div>
              </div>
              {/* Doctor Card 3 */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="doc_post">
                  <div className="doc_post_pic">
                    <img
                      src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
                      alt="Dr. Vikash Chauhan"
                    />
                  </div>
                  <div className="doc_post_content">
                    <h3 className="doc_name">Dr. Vikash Chauhan</h3>
                    <p className="doc_specialty">
                      Internal Medicine Specialists
                    </p>
                    <div className="product__reviews our_expertise_reviews">
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(48 Reviews)</span>
                    </div>
                    <p>Exp : 7 years</p>
                    <p className="doc__qual">
                      <img
                        src="assets/img/icon/icon8-degree-48.png"
                        alt="img"
                      />
                      M.V.Sc.
                    </p>
                  </div>
                </div>
              </div>
              {/* Doctor Card 4 */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="doc_post">
                  <div className="doc_post_pic">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
                      alt="Dr. Mony Bora"
                    />
                  </div>
                  <div className="doc_post_content">
                    <h3 className="doc_name">Dr. Mony Bora</h3>
                    <p className="doc_specialty">
                      Nutritionists, Ophthalmologists
                    </p>
                    <div className="product__reviews our_expertise_reviews">
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(48 Reviews)</span>
                    </div>
                    <p>Exp : 7 years</p>
                    <p className="doc__qual">
                      <img
                        src="assets/img/icon/icon8-degree-48.png"
                        alt="img"
                      />
                      M.V.Sc.
                    </p>
                  </div>
                </div>
              </div>
              {/* Doctor Card 1 */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="doc_post">
                  <div className="doc_post_pic">
                    <img
                      src="https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE="
                      alt="Dr. Nitin Kandpal"
                    />
                  </div>
                  <div className="doc_post_content">
                    <h3 className="doc_name">Dr. Nitin Kandpal</h3>
                    <p className="doc_specialty">Food Animal Veterinarians</p>
                    <div className="product__reviews our_expertise_reviews">
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(48 Reviews)</span>
                    </div>
                    <p>Exp : 7 years</p>
                    <p className="doc__qual">
                      <img
                        src="assets/img/icon/icon8-degree-48.png"
                        alt="img"
                      />
                      M.V.Sc.
                    </p>
                  </div>
                </div>
              </div>
              {/* Doctor Card 2 */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="doc_post">
                  <div className="doc_post_pic">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-n-Eb5PPHCiRyGR1vpCKxiucX1RsoZ0gEA&s"
                      alt="Dr. Aditi Tiwari"
                    />
                  </div>
                  <div className="doc_post_content">
                    <h3 className="doc_name">Dr. Aditi Tiwari</h3>
                    <p className="doc_specialty">Animal Welfare Specialists</p>
                    <div className="product__reviews our_expertise_reviews">
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(48 Reviews)</span>
                    </div>
                    <p>Exp : 7 years</p>
                    <p className="doc__qual">
                      <img
                        src="assets/img/icon/icon8-degree-48.png"
                        alt="img"
                      />
                      M.V.Sc.
                    </p>
                  </div>
                </div>
              </div>
              {/* Doctor Card 3 */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="doc_post">
                  <div className="doc_post_pic">
                    <img
                      src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
                      alt="Dr. Vikash Chauhan"
                    />
                  </div>
                  <div className="doc_post_content">
                    <h3 className="doc_name">Dr. Vikash Chauhan</h3>
                    <p className="doc_specialty">
                      Internal Medicine Specialists
                    </p>
                    <div className="product__reviews our_expertise_reviews">
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(48 Reviews)</span>
                    </div>
                    <p>Exp : 7 years</p>
                    <p className="doc__qual">
                      <img
                        src="assets/img/icon/icon8-degree-48.png"
                        alt="img"
                      />
                      M.V.Sc.
                    </p>
                  </div>
                </div>
              </div>
              {/* Doctor Card 4 */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="doc_post">
                  <div className="doc_post_pic">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
                      alt="Dr. Mony Bora"
                    />
                  </div>
                  <div className="doc_post_content">
                    <h3 className="doc_name">Dr. Mony Bora</h3>
                    <p className="doc_specialty">
                      Nutritionists, Ophthalmologists
                    </p>
                    <div className="product__reviews our_expertise_reviews">
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(48 Reviews)</span>
                    </div>
                    <p>Exp : 7 years</p>
                    <p className="doc__qual">
                      <img
                        src="assets/img/icon/icon8-degree-48.png"
                        alt="img"
                      />
                      M.V.Sc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* My Expertise */}
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
        </section>
        {/* product-area-end */}
      </main>
    </div>
  );
};

export default DoctorList;
