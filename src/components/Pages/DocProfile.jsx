import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Select from "react-select";

const DocProfile = () => {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const apiUrl = import.meta.env.VITE_API_URL;
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: "",
    userEmail: "",
    phone: "",
    profilePicture: "",
    education: "",
    experience: "",
    college: "",
    specialization: "",
    licenseNumber: "",
    clinicAddress: "",
    availableDays: [],
    startTime: "", // 🆕 Add this
    endTime: "",
    consultationFee: "",
    documents: [],
    gender: "",
    createdAt: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [activeDoc, setActiveDoc] = useState("");
  const [newDocuments, setNewDocuments] = useState([]);
  const [activeTab, setActiveTab] = useState("profile");
  const [appointments, setAppointments] = useState([]);
  const [review, setReview] = useState([]);
  const [doctorId, setdoctorId] = useState();

  useEffect(() => {
    fetchUser();
  }, [token]);

  const daysOptions = [
    { value: "Mon", label: "Monday" },
    { value: "Tue", label: "Tuesday" },
    { value: "Wed", label: "Wednesday" },
    { value: "Thu", label: "Thursday" },
    { value: "Fri", label: "Friday" },
    { value: "Sat", label: "Saturday" },
    { value: "Sun", label: "Sunday" },
  ];

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${apiUrl}api/user/getUserById`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("User data:", response.data.user);

      if (response.status === 200) {
        const user = response.data.user;

        setUserDetails({
          name: user.name || "",
          userEmail: user.userEmail || "",
          phone: user.phone || "",
          profilePicture: user.profilePicture || "",
          education: user.education || "",
          experience: user.experience || "",
          college: user.college || "",
          specialization: user.specialization || "",
          licenseNumber: user.licenseNumber || "",
          clinicAddress: user.clinicAddress || "",
          availableDays:
            user.availableDays && user.availableDays.length > 0
              ? user.availableDays[0].split(",").map((d) => d.trim())
              : [],

          consultationFee: user.consultationFee || "",
          documents: user.documents || [],
          createdAt: user.createdAt || "",
          startTime: user.timings?.start || "", // 🆕 Safely extract
          endTime: user.timings?.end || "",
          gender: user.gender || "",
        });
        setdoctorId(response.data.user._id);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("Updating user with details:", userDetails);
    const formData = new FormData();
    formData.append("name", userDetails.name);
    formData.append("userEmail", userDetails.userEmail);
    formData.append("phone", userDetails.phone);
    formData.append("education", userDetails.education || "");
    formData.append("experience", userDetails.experience || "");
    formData.append("college", userDetails.college || "");
    formData.append("specialization", userDetails.specialization || "");
    formData.append("licenseNumber", userDetails.licenseNumber || "");
    formData.append("clinicAddress", userDetails.clinicAddress || "");
    formData.append("consultationFee", userDetails.consultationFee || "");
    formData.append("role", userDetails.role || "doctor");
    formData.append("gender", userDetails.gender || "");

    // Handle availableDays (array to comma-separated string)
    formData.append(
      "availableDays",
      userDetails.availableDays?.join(", ") || ""
    );

    formData.append(
      "timings",
      JSON.stringify({
        start: userDetails.startTime,
        end: userDetails.endTime,
      })
    );

    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    if (newDocuments.length > 0) {
      newDocuments.forEach((doc, index) => {
        formData.append("documents", doc);
      });
    }

    try {
      const response = await axios.post(
        `${apiUrl}api/user/updateDoc`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        fetchUser();
        AlertMsg("Profile updated successfully!", "success", "Success");
      } else {
        AlertMsg("Failed to update profile", "error", "Error");
      }
    } catch (error) {
      console.error("Update error:", error);
      AlertMsg("Something went wrong while updating profile", "error", "Error");
    }
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        AlertMsg("Logout successful!", "success", "Success");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    });
  };

  const handleDeleteDocument = async (docPath) => {
    try {
      const response = await axios.delete(`${apiUrl}api/user/deleteDocument`, {
        data: { filePath: docPath },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log("Document deleted successfully:", response.data);
        AlertMsg("Document deleted successfully!", "success", "Success");
        setUserDetails((prev) => ({
          ...prev,
          documents: prev.documents.filter((doc) => doc !== docPath),
        }));
      }
    } catch (error) {
      console.error("Failed to delete document:", error);
      AlertMsg("Failed to delete document", "error", "Error");
    }
  };

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(
        `${apiUrl}api/user/getAppointmentsByDoctorId`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("appointments: ", res);
      setAppointments(res.data.appointments);
    } catch (error) {
      console.log("Error cannot fetch doctor appointments: ", error);
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
      setReview(res.data.reviews);
    } catch (error) {
      console.log("Cannot fetch review: ", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
    fetchReview();
  }, []);

  const AlertMsg = (msg, type, title) => {
    Swal.fire({
      icon: type,
      title: title,
      text: msg,
    });
  };

  return (
    <div>
      <section className="blog__area pt-50 pb-100 account__page">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-5">
              <aside className="blog-sidebar account__sidebar">
                <div
                  className="acc__profile mb-4"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {/* Profile Image */}
                  <img
                    src="https://us.123rf.com/450wm/virtosmedia/virtosmedia2301/virtosmedia230116752/197246325-programmer-programmer-developer-vector-illustration-in-flat-style.jpg"
                    className="rounded-circle mb-3"
                    width="100"
                    height="100"
                    alt="profile"
                    style={{
                      objectFit: "cover",
                      border: "2px solid #ddd",
                    }}
                  />

                  {/* Text Section */}
                  <p className="text-muted m-0">Hello,</p>
                  <p className="acc__profile_name fw-bold fs-5">
                    {userDetails?.name}
                  </p>
                </div>

                <h5 className="sub-title">ACCOUNT SETTINGS</h5>
                <div className="sidebar-cat-list">
                  <ul className="list-wrap">
                    <li>
                      <Link onClick={() => setActiveTab("profile")}>
                        Profile Information
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setActiveTab("appointments")}>
                        My Appointments
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setActiveTab("reviews")}>
                        My Reviews & Ratings
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setActiveTab("notifications")}>
                        All Notifications
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-4">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </aside>
            </div>
            <div className="col-xl-9 col-lg-8 col-sm-7">
              {activeTab === "profile" && (
                <form className="registration__form checkout__form account__sidebar">
                  <div className="sub__registration-detials">
                    <div className="row gutter-20">
                      <div className="col-12">
                        <h5 className="sub__title">Personal Information</h5>
                      </div>

                      {/* Profile Picture Upload */}
                      <div className="col-12 d-flex justify-content-center mb-3">
                        <div className="form-grp text-center">
                          <label
                            htmlFor="profileInput"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={
                                profilePreview ||
                                (userDetails.profilePicture
                                  ? apiUrl + userDetails.profilePicture
                                  : "https://us.123rf.com/450wm/virtosmedia/virtosmedia2301/virtosmedia230116752/197246325-programmer-programmer-developer-vector-illustration-in-flat-style.jpg")
                              }
                              alt="Profile Preview"
                              className="rounded-circle"
                              style={{
                                width: "120px",
                                height: "120px",
                                objectFit: "cover",
                                border: "2px solid #ddd",
                              }}
                            />
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            id="profileInput"
                            name="profilePicture"
                            onChange={handleProfileChange}
                            style={{ display: "none" }}
                          />
                          <small className="d-block mt-2 text-muted">
                            Click image to upload
                          </small>
                        </div>
                      </div>

                      {/* Personal Details */}
                      {[
                        {
                          label: "Full Name",
                          value: userDetails.name,
                          key: "name",
                        },
                        {
                          label: "Email",
                          value: userDetails.userEmail,
                          key: "userEmail",
                        },
                        {
                          label: "Phone",
                          value: userDetails.phone,
                          key: "phone",
                        },
                        {
                          label: "Education",
                          value: userDetails.education,
                          key: "education",
                        },
                        {
                          label: "Experience",
                          value: userDetails.experience,
                          key: "experience",
                        },
                        {
                          label: "College",
                          value: userDetails.college,
                          key: "college",
                        },
                        {
                          label: "Specialization",
                          value: userDetails.specialization,
                          key: "specialization",
                        },
                        {
                          label: "License Number",
                          value: userDetails.licenseNumber,
                          key: "licenseNumber",
                        },

                        {
                          label: "Consultation Fee",
                          value: userDetails.consultationFee,
                          key: "consultationFee",
                        },
                      ].map((item, idx) => (
                        <div className="col-lg-6 col-md-6 col-sm-12" key={idx}>
                          <div className="form-grp">
                            <label className="r__form__label">
                              {item.label}
                            </label>
                            <input
                              type="text"
                              value={item.value}
                              onChange={(e) =>
                                setUserDetails({
                                  ...userDetails,
                                  [item.key]: e.target.value,
                                })
                              }
                              disabled={
                                item.key === "userEmail" || item.key === "phone"
                              }
                            />
                          </div>
                        </div>
                      ))}

                      <div className="col-md-6">
                        <div className="form-grp">
                          <label>Start Time</label>
                          <input
                            type="time"
                            value={userDetails.startTime}
                            onChange={(e) =>
                              setUserDetails({
                                ...userDetails,
                                startTime: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-grp">
                          <label>End Time</label>
                          <input
                            type="time"
                            value={userDetails.endTime}
                            onChange={(e) =>
                              setUserDetails({
                                ...userDetails,
                                endTime: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3 form-grp">
                          <label htmlFor="gender" className="form-label">
                            Gender
                          </label>
                          <select
                            id="gender"
                            className="form-select"
                            value={userDetails.gender}
                            onChange={(e) =>
                              setUserDetails({
                                ...userDetails,
                                gender: e.target.value,
                              })
                            }
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-grp">
                          <label>Available Days</label>
                          <Select
                            options={daysOptions}
                            isMulti
                            onChange={(selectedOptions) =>
                              setUserDetails({
                                ...userDetails,
                                availableDays: selectedOptions.map(
                                  (opt) => opt.value
                                ),
                              })
                            }
                            value={daysOptions.filter((option) =>
                              userDetails.availableDays.includes(option.value)
                            )}
                            classNamePrefix="react-select"
                            className="z-index-999"
                            placeholder="Select available days"
                            menuPortalTarget={document.body}
                            styles={{
                              menuPortal: (base) => ({ ...base, zIndex: 1 }),
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-grp">
                          <textarea
                            placeholder="Clinic Address"
                            name="clinicAddress"
                            rows="2"
                            value={userDetails.clinicAddress}
                            onChange={(e) =>
                              setUserDetails({
                                ...userDetails,
                                clinicAddress: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      {/* Uploaded Documents */}
                      <div className="col-12">
                        <div className="form-grp">
                          <label className="r__form__label">Documents</label>

                          {userDetails.documents.map((doc, idx) => {
                            const isPDF = doc.toLowerCase().endsWith(".pdf");
                            const fileName = doc.split("/").pop();

                            return (
                              <div
                                className="col-lg-12 col-md-12 mb-3"
                                key={idx}
                              >
                                <div
                                  className="d-flex align-items-start bg-white border rounded shadow-sm p-3"
                                  style={{ gap: "15px" }}
                                >
                                  <img
                                    src={
                                      isPDF
                                        ? "https://img.icons8.com/color/48/000000/pdf.png"
                                        : `${apiUrl}${doc}`
                                    }
                                    alt="doc icon"
                                    style={{
                                      width: "48px",
                                      height: "48px",
                                      objectFit: "cover",
                                      borderRadius: isPDF ? "0" : "8px",
                                      border: "1px solid #ccc",
                                    }}
                                  />

                                  <div className="flex-grow-1">
                                    <div
                                      title={fileName}
                                      style={{
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        maxWidth: "220px",
                                      }}
                                    >
                                      {fileName}
                                    </div>
                                    <div className="mt-1 d-flex gap-2">
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-light border d-flex align-items-center gap-1"
                                        onClick={() => {
                                          setActiveDoc(`${apiUrl}${doc}`);
                                          setShowModal(true);
                                        }}
                                      >
                                        <img
                                          src="https://img.icons8.com/ios-glyphs/20/000000/visible--v1.png"
                                          alt="view"
                                        />
                                        View
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-danger d-flex align-items-center gap-1"
                                        onClick={() =>
                                          handleDeleteDocument(doc)
                                        }
                                      >
                                        <img
                                          src="https://img.icons8.com/ios-glyphs/20/ffffff/trash--v1.png"
                                          alt="delete"
                                        />
                                        Delete
                                      </button>
                                    </div>
                                  </div>

                                  {/* Optional badge for PDF */}
                                  <span
                                    className={`badge ${
                                      isPDF ? "bg-danger" : "bg-success"
                                    } text-white ms-auto align-self-start`}
                                  >
                                    {isPDF ? "PDF" : "Image"}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Upload New Documents */}
                      <div className="col-12">
                        <div className="form-grp">
                          <label className="r__form__label">
                            Upload Documents
                          </label>
                          <input
                            type="file"
                            multiple
                            accept=".pdf,image/*"
                            onChange={(e) =>
                              setNewDocuments([...e.target.files])
                            }
                          />
                          <small className="text-muted">
                            You can upload multiple documents (PDF or images)
                          </small>
                        </div>
                      </div>

                      {/* Save Button */}
                      <div className="col-12 mt-3">
                        <div className="store__btn text-center">
                          <button
                            onClick={handleUpdate}
                            className="btn shop-btn"
                            type="button"
                          >
                            Save Changes
                            <img
                              src="assets/img/icon/right_arrow.svg"
                              alt=""
                              className="injectable"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              )}
              {activeTab === "appointments" &&
                (appointments.length !== 0 ? (
                  <div className="container">
                    <h3 className="mb-3">Appointment List</h3>
                    <table className="table">
                      <thead className="table-info">
                        <tr>
                          <th>ID</th>
                          <th>Patient Name</th>
                          <th>Patient Number</th>
                          <th>Patient Email ID</th>
                          <th>Appointment Date & Time</th>
                          <th>Action</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.map((v) => {
                          return (
                            <tr>
                              <td>{v.id}</td>
                              <td>{v.name}</td>
                              <td>{v.number}</td>
                              <td>{v.email}</td>
                              <td>{v.datetime}</td>
                              <td>
                                <div className="dropdown">
                                  <select className="form-select form-select-sm">
                                    <option>Choose</option>
                                    <option>Update</option>
                                    <option>Decline</option>
                                    <option>Accept</option>
                                  </select>
                                </div>
                              </td>
                              <td className="text-success">Confirmed</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <h3>No appointments ! </h3>
                ))}
              {activeTab === "reviews" &&
                (review.length !== 0 ? (
                  <div className="container">
                    <h3 className="mb-3">Reviews & Ratings</h3>
                    <table className="table">
                      <thead className="table-info">
                        <tr>
                          <th className="px-4">ID</th>
                          <th
                            className="px-4 text-truncate"
                            style={{ width: "100px" }}
                          >
                            Patient Name
                          </th>
                          <th className="px-4">Rating</th>
                          <th className="px-4">Review</th>
                          <th
                            className="px-4 text-truncate"
                            style={{ width: "100px" }}
                          >
                            Date & Time
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {review.map((v, i) => {
                          return (
                            <tr>
                              <td className="px-4">{i}</td>
                              <td className="px-4">{v.user.name}</td>
                              <td className="px-4">
                                <span className="rating">
                                  {[...Array(v.rating)].map((_, index) => (
                                    <i key={index} className="fas fa-star" />
                                  ))}
                                </span>
                              </td>
                              <td className="px-4">{v.review}</td>
                              <td className="px-4">
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
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <h3>No Reviews !</h3>
                ))}
              {activeTab === "notifications" && (
                <div className="container mt-4">
                  <h3 className="mb-3">Notifications List</h3>
                  <table className="table">
                    <thead className="table-info">
                      <tr>
                        <th>ID</th>
                        <th>Patient Name</th>
                        <th>Patient Number</th>
                        <th>Patient Email ID</th>
                        <th>Appointment Date & Time</th>
                        <th>Clear</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>9876543210</td>
                        <td>john@example.com</td>
                        <td>2025-05-02 10:00 AM</td>
                        <td>
                          <button
                            type="button"
                            className="text-center"
                            style={{
                              color: "red",
                              border: "none",
                              backgroundColor: "white",
                            }}
                          >
                            X
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>9123456780</td>
                        <td>jane@example.com</td>
                        <td>2025-05-03 2:30 PM</td>
                        <td>
                          <button
                            type="button"
                            className="text-center"
                            style={{
                              color: "red",
                              border: "none",
                              backgroundColor: "white",
                            }}
                          >
                            X
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>Mike Johnson</td>
                        <td>9012345678</td>
                        <td>mike@example.com</td>
                        <td>2025-05-04 11:00 AM</td>
                        <td>
                          <button
                            type="button"
                            className="text-center"
                            style={{
                              color: "red",
                              border: "none",
                              backgroundColor: "white",
                            }}
                          >
                            X
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>Emma Brown</td>
                        <td>9988776655</td>
                        <td>emma@example.com</td>
                        <td>2025-05-05 9:00 AM</td>
                        <td>
                          <button
                            type="button"
                            className="text-center"
                            style={{
                              color: "red",
                              border: "none",
                              backgroundColor: "white",
                            }}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {showModal && (
                <div
                  className="modal fade show d-block"
                  tabIndex="-1"
                  style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                >
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Document Preview</h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setShowModal(false)}
                        />
                      </div>
                      <div className="modal-body text-center">
                        {activeDoc.endsWith(".pdf") ? (
                          <iframe
                            src={activeDoc}
                            title="PDF Preview"
                            width="100%"
                            height="600px"
                            style={{ border: "none" }}
                          />
                        ) : (
                          <img
                            src={activeDoc}
                            alt="Document Preview"
                            style={{ maxWidth: "100%", maxHeight: "600px" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocProfile;
