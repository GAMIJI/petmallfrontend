import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DoctorsDetails = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const doctorId = location?.state?.doctorId;
  // const [doctorDetails, setDoctorDetails] = useState(null);
  // const apiUrl = import.meta.env.VITE_API_URL;
  // const token = localStorage.getItem("token");
  // const [timeSlots, setTimeSlots] = useState([]);
  // const [formData, setFormData] = useState({
  //   patientName: "",
  //   patientEmail: "",
  //   selectedDate: "",
  //   selectedTime: "",
  // });
  // const [rating, setRating] = useState(0);
  // const [hover, setHover] = useState(0);
  // const [review, setReview] = useState("");
  // const [reviewArray, setReviewArray] = useState([]);

  // useEffect(() => {
  //   const fetchDoctorDetails = async () => {
  //     try {
  //       const response = await axios.get(`${apiUrl}api/user/getDoctorDetails`, {
  //         params: {
  //           doctorId: doctorId,
  //         },
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       if (response.status === 200) {
  //         setDoctorDetails(response.data.doctor);
  //       }
  //     } catch (error) {
  //       console.log("Error fetching doctor details:", error);
  //     }
  //   };

  //   if (doctorId) {
  //     fetchDoctorDetails();
  //   }
  // }, [doctorId]);

  // const handleReview = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (rating >= 1) {
  //       const res = await axios.post(
  //         `${apiUrl}api/user/addDoctorReview`,
  //         {
  //           rating: rating,
  //           review: review,
  //           doctorId: doctorId,
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       console.log(res);
  //       Swal.fire("Hey there !", "Your review is submitted.", "success");
  //     } else {
  //       Swal.fire("", "Ratings can't be left empty.", "error");
  //     }
  //   } catch (error) {
  //     console.log("Cannot add review: ", error);
  //     Swal.fire("Hey there !", "You already reviewed this doctor.", "warning");
  //   }
  // };

  // const fetchReview = async () => {
  //   try {
  //     const res = await axios.get(`${apiUrl}api/user/getDoctorReviews`, {
  //       params: {
  //         doctorId: doctorId,
  //       },
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log("review", res);
  //     setReviewArray(res.data.reviews);
  //   } catch (error) {
  //     console.log("Cannot fetch review: ", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchReview();
  // }, []);

  // const formatTime = (timeStr) => {
  //   const [hour, minute] = timeStr.split(":").map(Number);
  //   const date = new Date();
  //   date.setHours(hour);
  //   date.setMinutes(minute);
  //   return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  // };

  // useEffect(() => {
  //   if (doctorDetails?.timings?.start && doctorDetails?.timings?.end) {
  //     const slots = generateTimeSlots(
  //       doctorDetails.timings.start,
  //       doctorDetails.timings.end
  //     );
  //     setTimeSlots(slots);
  //   }
  // }, [doctorDetails]);

  // const generateTimeSlots = (start, end, interval = 60) => {
  //   const slots = [];
  //   let [startHour, startMinute] = start.split(":").map(Number);
  //   let [endHour, endMinute] = end.split(":").map(Number);

  //   const now = new Date();
  //   let startTime = new Date(now);
  //   startTime.setHours(startHour, startMinute, 0, 0);

  //   let endTime = new Date(now);
  //   endTime.setHours(endHour, endMinute, 0, 0);

  //   if (endTime <= startTime) {
  //     endTime.setDate(endTime.getDate() + 1); // handle overnight
  //   }

  //   while (startTime < endTime) {
  //     const endSlotTime = new Date(startTime.getTime() + interval * 60000);
  //     if (endSlotTime > endTime) break;

  //     slots.push(`${formatTime1(startTime)} - ${formatTime1(endSlotTime)}`);
  //     startTime = endSlotTime;
  //   }

  //   console.log("Generated time slots:", slots);
  //   return slots;
  // };

  // const formatTime1 = (date) =>
  //   date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!token) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Unauthorized",
  //       text: "Please log in to make an appointment.",
  //     }).then(() => {
  //       navigate("/login");
  //     });
  //     return;
  //   }

  //   const { patientName, patientEmail, selectedDate, selectedTime } = formData;

  //   // 🔍 Custom Validation
  //   if (!patientName || !patientEmail || !selectedDate || !selectedTime) {
  //     Swal.fire({
  //       icon: "warning",
  //       title: "Missing Fields",
  //       text: "Please fill out all fields to book your appointment.",
  //     });
  //     return;
  //   }

  //   try {
  //     const res = await axios.post(
  //       `${apiUrl}api/user/createAppointment`,
  //       {
  //         doctorId,
  //         patientName,
  //         patientPhone: patientEmail,
  //         appointmentDate: new Date(selectedDate),
  //         appointmentTime: selectedTime,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     Swal.fire({
  //       icon: "success",
  //       title: "Success",
  //       text: "Appointment created successfully!",
  //     });

  //     console.log(res.data);
  //   } catch (error) {
  //     console.error("Error creating appointment", error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Booking Failed",
  //       text: error?.response?.data?.message || "Something went wrong!",
  //     });
  //   }
  // };

  return (
    <div>
      <section className="team_details">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 wow fadeInLeft" data-wow-duration="1s">
        <div className="row">
          <div className="col-xl-5 col-md-5 col-lg-5">
            <div className="team_details_img">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg" alt="team" className />
            </div>
          </div>
          <div className="col-xl-7 col-md-7 col-lg-7">
            <div className="team_details_img_text">
              <h3>Dr. Sabrina Khan</h3>
              <p>MBBS (University of Wyoming).</p>
              <p>M.D. of Medicine (Netherland Medical College).</p>
              <p><b>Senior Prof. (MBBS, M.D)</b> Netherland Medical College.</p>
              <p>Reg No: A-36589</p>
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
            <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt
              utlabore et dolor
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit
              amet, consectetur
              adipiscing elit.</p>
            <h4>Medical Experience &amp; Skills</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              utlabore et dolor
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit
              amet, consectetur
              adipiscing elit Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit
              amet, consectetur
              adipiscing elit.</p>
          </div>
        </div>
        <div className="comment_area">
          <h2>Total Review (04)</h2>
          <div className="single_comment">
            <div className="comment_img">
              <img src="assets/img/images/testi_author01.png" alt="review" className="img-fluid w-100" />
            </div>
            <div className="comment_text">
              <h4>Robert Smith <span><i className="fal fa-clock" />4 hour ago</span></h4>
              <span className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </span>
              <p>But the majority have suffered alteration in some form, by injected humour, or
                randomi sed its wordsn look even slightly believable.</p>
              <div className="store__btn">
                <a href="product.html" className="btn shop-btn">Reply <img src="assets/img/icon/right_arrow.svg" alt className="injectable" /></a>
              </div>
            </div>
          </div>
          <div className="single_comment commant_reply">
            <div className="comment_img">
              <img src="assets/img/images/author_01.png" alt="review" className="img-fluid w-100" />
            </div>
            <div className="comment_text">
              <h4>Steven Smith <span><i className="fal fa-clock" aria-hidden="true" />1
                  hour ago</span></h4>
              <span className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </span>
              <p>But the majority have suffered alteration in some form, by injected humour, or
                randomi sed its
                wordsn look even slightly believable.</p>
              <div className="store__btn">
                <a href="product.html" className="btn shop-btn">Reply <img src="assets/img/icon/right_arrow.svg" alt className="injectable" /></a>
              </div>
            </div>
          </div>
          <div className="single_comment">
            <div className="comment_img">
              <img src="assets/img/images/author_02.png" alt="review" className="img-fluid w-100" />
            </div>
            <div className="comment_text">
              <h4>Deni Rover<span><i className="fal fa-clock" aria-hidden="true" /> 6
                  hour ago</span></h4>
              <span className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </span>
              <p>But the majority have suffered alteration in some form, by injected humour, or
                randomi sed its
                wordsn look even slightly believable.</p>
              <div className="store__btn">
                <a href="product.html" className="btn shop-btn">Reply<img src="assets/img/icon/right_arrow.svg" alt className="injectable" /></a>
              </div>                            
            </div>
          </div>
          <div className="single_comment">
            <div className="comment_img">
              <img src="assets/img/images/author_03.png" alt="review" className="img-fluid w-100" />
            </div>
            <div className="comment_text">
              <h4>Robert Smith <span><i className="fal fa-clock" aria-hidden="true" />4
                  hour ago</span></h4>
              <span className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </span>
              <p>But the majority have suffered alteration in some form, by injected humour, or
                randomi sed its
                wordsn look even slightly believable.</p>
              <div className="store__btn">
                <a href="product.html" className="btn shop-btn">Reply <img src="assets/img/icon/right_arrow.svg" alt className="injectable" /></a>
              </div>
            </div>
          </div>
        </div>
        <form className="comment_input_area">
          <h2>Leave a Review</h2>
          <p>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </p>
          <div className="row">
            <div className="col-xl-6">
              <input type="text" placeholder="Name..." />
            </div>
            <div className="col-xl-6">
              <input type="text" placeholder="Email..." />
            </div>
            <div className="col-xl-12 mt-4 mb-4">
              <textarea rows={4} placeholder="Write A Comment..." defaultValue={""} />
            </div>
            <div className="col-xl-12">
              <div className="store__btn">
                <a href="product.html" className="btn shop-btn">Submit Now <img src="assets/img/icon/right_arrow.svg" alt className="injectable" /></a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-4 wow fadeInRight" data-wow-duration="1s">
        <div className="appointment_section">
          <div className="appointment_container">
            <form className="team_details_form">
              <h5>Make an Appointment</h5>
              <div className="form_group">
                <input type="text" placeholder="Name" />
              </div>
              <div className="form_group">
                <input type="email" placeholder="Email" />
              </div>
              <div className="form_group">
                <select>
                  <option>Select Date</option>
                  <option>Date 1</option>
                  <option>Date 2</option>
                  <option>Date 3</option>
                </select>
              </div>
              <div className="form_group">
                <select>
                  <option>Select Time</option>
                  <option>10.00 am - 11.00 am</option>
                  <option>11.00 am - 12.00 pm</option>
                </select>
              </div>
              <div className="form_group">
                <select>
                  <option>Type of Service</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                </select>
              </div>
              <div className="store__btn">
                <a href="product.html" className="btn shop-btn">Make an appointment<img src="assets/img/icon/right_arrow.svg" alt className="injectable" /></a>
              </div>
            </form>
            <div className="team_details_timeing">
              <h5>Opening Time</h5>
              <p>Friday - Saturday <span>7.30 am - 4.00 pm</span></p>
              <p>Sunday - Monday <span>10.30 am - 12.00 pm</span></p>
              <p>Tuesday <span>Closed</span></p>
              <p>Wednesday <span>8.30 am - 5.00 pm</span></p>
              <p className="last_date">Thursday <span>7.30 am - 4.00 pm</span></p>
            </div>
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
