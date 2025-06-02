import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DoctorsDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const doctorId = location?.state?.doctorId;
  const [doctorDetails, setDoctorDetails] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  const [timeSlots, setTimeSlots] = useState([]);
  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    selectedDate: "",
    selectedTime: "",
  });
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [reviewArray, setReviewArray] = useState([]);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}api/user/getDoctorDetails`, {
          params: {
            doctorId: doctorId,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setDoctorDetails(response.data.doctor);
        }
      } catch (error) {
        console.log("Error fetching doctor details:", error);
      }
    };

    if (doctorId) {
      fetchDoctorDetails();
    }
  }, [doctorId]);

  const handleReview = async (e) => {
    e.preventDefault();
    try {
      if (rating >= 1) {
        const res = await axios.post(
          `${apiUrl}api/user/addDoctorReview`,
          {
            rating: rating,
            review: review,
            doctorId: doctorId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
        Swal.fire("Hey there !", "Your review is submitted.", "success");
      } else {
        Swal.fire("", "Ratings can't be left empty.", "error");
      }
    } catch (error) {
      console.log("Cannot add review: ", error);
      Swal.fire("Hey there !", "You already reviewed this doctor.", "warning");
    }
  };

  const fetchReview = async () => {
    try {
      const res = await axios.get(`${apiUrl}api/user/getDoctorReviews`, {
        params: {
          doctorId: doctorId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("review", res);
      setReviewArray(res.data.reviews);
    } catch (error) {
      console.log("Cannot fetch review: ", error);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);

  const formatTime = (timeStr) => {
    const [hour, minute] = timeStr.split(":").map(Number);
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  useEffect(() => {
    if (doctorDetails?.timings?.start && doctorDetails?.timings?.end) {
      const slots = generateTimeSlots(
        doctorDetails.timings.start,
        doctorDetails.timings.end
      );
      setTimeSlots(slots);
    }
  }, [doctorDetails]);

  const generateTimeSlots = (start, end, interval = 60) => {
    const slots = [];
    let [startHour, startMinute] = start.split(":").map(Number);
    let [endHour, endMinute] = end.split(":").map(Number);

    const now = new Date();
    let startTime = new Date(now);
    startTime.setHours(startHour, startMinute, 0, 0);

    let endTime = new Date(now);
    endTime.setHours(endHour, endMinute, 0, 0);

    if (endTime <= startTime) {
      endTime.setDate(endTime.getDate() + 1); // handle overnight
    }

    while (startTime < endTime) {
      const endSlotTime = new Date(startTime.getTime() + interval * 60000);
      if (endSlotTime > endTime) break;

      slots.push(`${formatTime1(startTime)} - ${formatTime1(endSlotTime)}`);
      startTime = endSlotTime;
    }

    console.log("Generated time slots:", slots);
    return slots;
  };

  const formatTime1 = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Unauthorized",
        text: "Please log in to make an appointment.",
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    const { patientName, patientEmail, selectedDate, selectedTime } = formData;

    // 🔍 Custom Validation
    if (!patientName || !patientEmail || !selectedDate || !selectedTime) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill out all fields to book your appointment.",
      });
      return;
    }

    try {
      const res = await axios.post(
        `${apiUrl}api/user/createAppointment`,
        {
          doctorId,
          patientName,
          patientPhone: patientEmail,
          appointmentDate: new Date(selectedDate),
          appointmentTime: selectedTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Appointment created successfully!",
      });

      console.log(res.data);
    } catch (error) {
      console.error("Error creating appointment", error);
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: error?.response?.data?.message || "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <section className="team_details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 wow fadeInLeft" data-wow-duration="1s">
              <div className="row">
                <div className="col-xl-5 col-md-5 col-lg-5">
                  <div className="team_details_img">
                    <img
                      src={
                        doctorDetails?.profilePicture
                          ? `${apiUrl}${doctorDetails.profilePicture}`
                          : "https://via.placeholder.com/400x400?text=No+Image"
                      }
                      alt={doctorDetails?.name || "Doctor"}
                      className=""
                    />
                  </div>
                </div>
                <div className="col-xl-7 col-md-7 col-lg-7">
                  <div className="team_details_img_text">
                    <h3>{doctorDetails?.name}</h3>
                    <p>{doctorDetails?.education}</p>
                    <p>
                      <b>{doctorDetails?.specialization}</b>
                    </p>
                    <p>{doctorDetails?.college}</p>
                    <p>Reg No: {doctorDetails?.licenseNumber}</p>
                    <p>Experience: {doctorDetails?.experience}</p>
                    <p>Clinic: {doctorDetails?.clinicAddress}</p>
                    <p>Consultation Fee: ₹{doctorDetails?.consultationFee}</p>
                    <div className="product__reviews">
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(204 Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="biography">
                <div className="biography_text">
                  <h4>Educational Background</h4>
                  <p className="mb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt utlabore et dolor magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h4>Medical Experience &amp; Skills</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt utlabore et dolor magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad
                    minim veniam, quis nostrud exercitation Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="comment_area">
                <h2>Total Review ({reviewArray.length})</h2>
                {reviewArray.map((v) => {
                  return (
                    <div className="single_comment" key={v._id}>
                      <div className="comment_img">
                        <img
                          src="assets/img/images/testi_author01.png"
                          alt="review"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="comment_text">
                        <h4>
                          {v.user.name}
                          <span>
                            <i className="fal fa-clock" />
                            {new Date(`${v.createdAt}`).toLocaleString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )}
                          </span>
                        </h4>
                        <span className="rating">
                          {[...Array(v.rating)].map((_, index) => (
                            <i key={index} className="fas fa-star" />
                          ))}
                        </span>
                        <p>{v.review}</p>
                        <div className="store__btn">
                          <a href="product.html" className="btn shop-btn">
                            Reply{" "}
                            <img
                              src="assets/img/icon/right_arrow.svg"
                              alt=""
                              className="injectable"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-4 wow fadeInRight" data-wow-duration="1s">
              <div className="appointment_section">
                <div className="appointment_container">
                  <form className="team_details_form" onSubmit={handleSubmit}>
                    <h5>Make an Appointment</h5>

                    <div className="form_group">
                      <input
                        type="text"
                        name="patientName"
                        placeholder="Name"
                        value={formData.patientName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form_group">
                      <input
                        type="email"
                        name="patientEmail"
                        placeholder="Email"
                        value={formData.patientEmail}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form_group">
                      <select
                        name="selectedDate"
                        value={formData.selectedDate}
                        onChange={handleChange}
                      >
                        <option value="">Select Date</option>
                        {doctorDetails?.availableDays?.[0]
                          ?.split(",")
                          .map((day, index) => (
                            <option key={index} value={day.trim()}>
                              {day.trim()}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="form_group">
                      <select
                        name="selectedTime"
                        value={formData.selectedTime}
                        onChange={handleChange}
                      >
                        <option value="">Select Time</option>
                        {doctorDetails?.timings ? (
                          generateTimeSlots(
                            doctorDetails.timings.start,
                            doctorDetails.timings.end
                          ).map((slot, index) => (
                            <option key={index} value={slot}>
                              {slot}
                            </option>
                          ))
                        ) : (
                          <option disabled>No time slots available</option>
                        )}
                      </select>
                    </div>

                    <div className="store__btn">
                      <button type="submit" className="btn shop-btn">
                        Make an appointment
                        <img
                          src="assets/img/icon/right_arrow.svg"
                          alt=""
                          className="injectable"
                        />
                      </button>
                    </div>
                  </form>

                  <div className="team_details_timeing">
                    <h5>Opening Time</h5>
                    {doctorDetails?.availableDays?.length > 0 ? (
                      doctorDetails.availableDays[0]
                        .split(",")
                        .map((day, index) => (
                          <p
                            key={index}
                            className={
                              index === doctorDetails.availableDays.length - 1
                                ? "last_date"
                                : ""
                            }
                          >
                            {day.trim()}{" "}
                            <span>
                              {doctorDetails.timings?.start
                                ? `${formatTime(
                                    doctorDetails.timings.start
                                  )} - ${formatTime(doctorDetails.timings.end)}`
                                : "Closed"}
                            </span>
                          </p>
                        ))
                    ) : (
                      <p>No availability info</p>
                    )}
                  </div>

                  <form
                    className="comment_input_area bg-white"
                    onSubmit={handleReview}
                  >
                    <h2 className="mb-4">Leave a Review</h2>

                    <div className="d-flex align-items-center mb-3">
                      <label className="me-2 mb-0">Rating:</label>
                      <p className="mb-0">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i
                            key={star}
                            required="true"
                            className={
                              (hover || rating) >= star
                                ? "fas fa-star"
                                : "far fa-star"
                            }
                            style={{
                              cursor: "pointer",
                              color:
                                (hover || rating) >= star
                                  ? "#ffc107"
                                  : "#e4e5e9",
                              display: "inline",
                              marginRight: "5px",
                            }}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                          />
                        ))}
                      </p>
                    </div>

                    <div className="mb-4">
                      <textarea
                        rows={4}
                        placeholder="Write A Comment..."
                        className="form-control"
                        required="true"
                        onChange={(e) => setReview(e.target.value)}
                      />
                    </div>

                    <div className="text-end">
                      <button
                        type="submit"
                        className="btn btn-primary d-flex align-items-center"
                      >
                        Submit Now{" "}
                        <img
                          src="assets/img/icon/right_arrow.svg"
                          alt="arrow"
                          className="ms-2 injectable"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsDetails;
