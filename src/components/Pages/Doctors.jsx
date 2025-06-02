import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Doctors = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [doctorData, setDoctorData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [wishlist, setWishlist] = useState();

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

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate("/doctorsDetails", {
      state: { doctorId: id },
    });
  };

  const handleWishlist = async (id, isWishlisted) => {
    try {
      if (isWishlisted) {
        await remove_from_wishlist(id);
      } else {
        await add_to_wishlist(id);
      }
      // Update UI instantly
      setDoctorData((prev) =>
        prev.map((doc) =>
          doc._id === id ? { ...doc, isWishlisted: !isWishlisted } : doc
        )
      );
    } catch (error) {
      console.log("Error updating wishlist", error);
    }
  };

  const add_to_wishlist = async (id) => {
    try {
      const res = await axios.post(
        `${apiUrl}api/user/addToWishlist`,
        {
          doctorId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log("Cannot add to wishlist: ", error);
    }
  };

  const remove_from_wishlist = async (id) => {
    try {
      const res = await axios.post(
        `${apiUrl}api/user/removeFromWishlist`,
        {
          doctorId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log("Cannot remove from wishlist: ", error);
    }
  };

  return (
    <div>
      <section className="our__expertise mt-20">
        <div className="container">
          {/* Section Title */}
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="section__title-two mb-20">
                <h2 className="title">
                  Meet Our Expert Doctors
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
                <Link to="/doctorList">
                  See All
                  <i className="flaticon-right-arrow-angle" />
                </Link>
              </div>
            </div>
          </div>
          {/* Doctor Cards */}
          <div className="row justify-content-center">
            {isLoading ? (
              <p>Loading...</p> // Show a loading message while the data is being fetched
            ) : (
              doctorData.map((doctor) => (
                <div key={doctor._id} className="col-xl-3 col-lg-4 col-md-6">
                  <div
                    style={{ border: "none", background: "none", padding: 0 }}
                    onClick={() => handleCardClick(doctor._id)}
                  >
                    <div className="doc_post" style={{ position: "relative" }}>
                      <div
                        className="doc_post_pic"
                        style={{ position: "relative" }}
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
                          onClick={(e) => {
                            e.stopPropagation();
                            handleWishlist(doctor._id, doctor.isWishlisted);
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
                        <p className="doc_specialty">{doctor.specialization}</p>
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
        </div>
      </section>
    </div>
  );
};

export default Doctors;
