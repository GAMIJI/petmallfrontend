import axios from "axios";
import React, { useEffect, useState } from "react";

const DoctorList = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [doctorData, setDoctorData] = useState([]);
  const token = localStorage.getItem("token");

  const fetchDoctorData = async () => {
    try {
      const response = await axios.get(`${apiUrl}api/user/getAllDoctors`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

      if (response.status === 200) {
        setDoctorData(response?.data?.doctors);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error fetching doctor data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctorData();
  }, []);

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
            {/* Doctor Cards */}
            <div className="row justify-content-center ">
              {isLoading ? (
                <p>Loading...</p> // Show a loading message while the data is being fetched
              ) : (
                doctorData.map((doctor) => (
                  <div
                    key={doctor._id}
                    className="col-xl-3 col-lg-4 col-md-6"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      style={{
                        cursor: "pointer",
                        border: "none",
                        background: "none",
                        padding: 0,
                      }}
                    >
                      <div
                        className="doc_post"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        <div
                          className="doc_post_pic"
                          style={{ position: "relative", cursor: "pointer" }}
                        >
                          <img
                            src={
                              doctor.profilePicture
                                ? `${apiUrl}${doctor.profilePicture}`
                                : "https://placehold.it/100x100"
                            }
                            alt={doctor.name}
                            style={{ width: "100%", height: "auto" }}
                          />
                          {/* Wishlist Button */}
                          <button
                            style={{
                              position: "absolute",
                              top: "8px",
                              right: "8px",
                              background: "#fff",
                              border: "1px solid #ddd",
                              borderRadius: "50%",
                              width: "32px",
                              height: "32px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill={doctor.isWishlisted ? "red" : "black"}
                              class="bi bi-heart"
                              viewBox="0 0 16 16"
                            >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                          </button>
                        </div>
                        <div className="doc_post_content">
                          <h3 className="doc_name">{doctor.name}</h3>
                          <p className="doc_specialty">
                            {doctor.specialization}
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
                          <p>Exp: {doctor.experience}</p>
                          <p className="doc__qual">
                            <img
                              src="assets/img/icon/icon8-degree-48.png"
                              alt="Degree"
                            />
                            {doctor.education}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
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
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
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
