import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import OrderList from "./OrderList";
import Wishlist from "./WishList";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const apiUrl = import.meta.env.VITE_API_URL;
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [appointment, setAppointment] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);

  const fetchFavourites = async () => {
    try {
      const res = await axios.get(`${apiUrl}api/user/getAllDoctors`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("All docs", res.data.doctors);
      setAllDoctors(res.data.doctors);
    } catch (error) {
      console.log("Cannot fetch Favourites: ", error);
    }
  };

  const fetchAllApointments = async () => {
    try {
      const res = await axios.get(`${apiUrl}api/user/getAppointmentsByUserId`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("appointments: ", res.data.appointments);
      setAppointment((prev) => [...prev, res.data.appointments]);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchAllApointments();
    fetchFavourites();
  }, [token]);

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
        setUserName(user.name || "");
        setEmail(user.userEmail || "");
        setPhone(user.phone || "");
        setProfileImage(user.profilePicture || "");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userName);
    formData.append("userEmail", email);
    formData.append("phone", phone);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const response = await axios.post(
        `${apiUrl}api/user/updateUser`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Update response:", response.data);
      if (response.status === 200) {
        AlertMsg("Profile updated successfully!", "success", "Profile Update");
        fetchUser();
      } else {
        AlertMsg("Failed to update profile", "error", "Profile Update");
      }
    } catch (error) {
      console.error("Update error:", error);
      AlertMsg("Failed to update profile", "error", "Profile Update");
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
        <div className="container-fluid">
          <div className="row">
            {/* // Sidebar Section */}
            <div className="col-xl-3 col-lg-4 col-sm-5 pr-0">
              <aside className="account__sidebar">
                {/* Profile Section */}
                <div className="acc__profile mb-4" style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  paddingBottom: "20px",
                  borderBottom: "1px solid #eee"
                }}>
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
                  <p className="text-muted m-0">Hello,</p>
                  <p className="fw-bold fs-5" style={{ margin: "5px 0 0 0" }}>{userName}</p>
                </div>

                {/* Menu Sections */}
                <div className="sidebar-menu" style={{ marginLeft: '20px' }}>
                  <div className="menu-section">
                    <h5 className="menu-title" style={{

                      fontSize: "16px",
                      fontWeight: "600",
                      margin: "15px 0 10px 0",
                      textTransform: "uppercase"
                    }}>MY ORDERS</h5>
                    <Link
                      className="menu-item"
                      style={{
                        display: "block",
                        padding: "8px 0",

                        textDecoration: "none"
                      }}
                      onClick={() => setActiveTab("myOrders")}
                    >
                      My Orders
                    </Link>
                  </div>

                  <div className="menu-section">
                    <h5 className="menu-title" style={{

                      fontSize: "16px",
                      fontWeight: "600",
                      margin: "15px 0 10px 0",
                      textTransform: "uppercase"
                    }}>ACCOUNT SETTINGS</h5>
                    <ul className="menu-list" style={{ listStyle: "none", padding: 0 }}>
                      <li className="menu-item" style={{ padding: "8px 0" }}>
                        <Link
                          style={{ textDecoration: "none" }}
                          onClick={() => setActiveTab("profile")}
                        >
                          Profile Information
                        </Link>
                      </li>
                      <li className="menu-item" style={{ padding: "8px 0" }}>
                        <Link
                          style={{ textDecoration: "none" }}
                          onClick={() => setActiveTab("manageAddresses")}
                        >
                          Manage Addresses
                        </Link>
                      </li>

                    </ul>
                  </div>

                  <div className="menu-section">
                    <h5 className="menu-title" style={{

                      fontSize: "16px",
                      fontWeight: "600",
                      margin: "15px 0 10px 0",
                      textTransform: "uppercase"
                    }}>PAYMENTS</h5>
                    <ul className="menu-list" style={{ listStyle: "none", padding: 0 }}>
                      <li className="menu-item" style={{ padding: "8px 0" }}>
                        <Link
                          style={{ textDecoration: "none" }}
                          onClick={() => setActiveTab("giftCards")}
                        >
                          Gift Cards
                        </Link>
                      </li>

                      <li className="menu-item" style={{ padding: "8px 0" }}>
                        <Link
                          style={{ textDecoration: "none" }}
                          onClick={() => setActiveTab("savedCards")}
                        >
                          Saved Cards
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-section">
                    <h5 className="menu-title" style={{

                      fontSize: "16px",
                      fontWeight: "600",
                      margin: "15px 0 10px 0",
                      textTransform: "uppercase"
                    }}>MY STUFF</h5>
                    <ul className="menu-list" style={{ listStyle: "none", padding: 0 }}>
                      <li className="menu-item" style={{ padding: "8px 0" }}>
                        <Link
                          style={{ textDecoration: "none" }}
                          onClick={() => setActiveTab("myCoupons")}
                        >
                          My Coupons
                        </Link>
                      </li>
                      <li className="menu-item" style={{ padding: "8px 0" }}>
                        <Link
                          style={{ textDecoration: "none" }}
                          onClick={() => setActiveTab("myReviews")}
                        >
                          My Reviews & Ratings
                        </Link>
                      </li>
                      <li className="menu-item" style={{ padding: "8px 0" }}>
                        <Link
                          style={{ textDecoration: "none" }}
                          onClick={() => setActiveTab("allNotifications")}
                        >
                          All Notifications
                        </Link>
                      </li>

                    </ul>
                  </div>

                  <div className="logout-section" style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #eee" }}>
                    <button
                      className="logout-btn"
                      onClick={handleLogout}
                      style={{
                        width: "100%",
                        padding: "10px",
                        background: "none",
                        border: "1px solid #ddd",
                        borderRadius: "4px",

                        cursor: "pointer",
                        fontWeight: "500"
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </aside>
            </div>

            {/* // Main Content Section */}
            <div className="col-xl-9 col-lg-8 col-sm-7 pl-0">
              {activeTab === "profile" && (
                <form className="registration__form checkout__form account__sidebar" style={{ marginLeft: '10px' }}>
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
                                (profileImage
                                  ? apiUrl + profileImage
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

                      {/* First Name */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">First Name</label>
                          <input
                            type="text"
                            placeholder="First Name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Email</label>
                          <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Phone</label>
                          <input
                            type="number"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            disabled
                          />
                        </div>
                      </div>

                      {/* Save Button */}
                      <div className="col-12 mt-3">
                        <div className="store__btn text-center">
                          <button
                            onClick={handleUpdate}
                            className="btn shop-btn"
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

                  <div className="divider-area">
                    <div className="container">
                      <div className="divider-wrap" />
                    </div>
                  </div>
                  <div className="mt-30 account__faq">
                    <h5 className="sub__title">FAQ's</h5>
                    <div className="faq__qa">
                      <p className="faq__question">
                        What happens when I update my email address (or mobile
                        number)?
                      </p>
                      <p className="faq__answer">
                        Your login email id (or mobile number) changes,
                        likewise. You'll receive all your account related
                        communication on your updated email address (or mobile
                        number).
                      </p>
                    </div>
                    <div className="faq__qa">
                      <p className="faq__question">
                        When will my account be updated with the new email
                        address (or mobile number)?
                      </p>
                      <p className="faq__answer">
                        It happens as soon as you confirm the verification code
                        sent to your email (or mobile) and save the changes.
                      </p>
                    </div>
                    <div className="faq__qa">
                      <p className="faq__question">
                        What happens to my existing account when I update my
                        email address (or mobile number)?
                      </p>
                      <p className="faq__answer">
                        Updating your email address (or mobile number) doesn't
                        invalidate your account. Your account remains fully
                        functional. You'll continue seeing your Order history,
                        saved information and personal details.
                      </p>
                    </div>
                    <div className="faq__qa">
                      <p className="faq__question">
                        Does my Seller account get affected when I update my
                        email address?
                      </p>
                      <p className="faq__answer">
                        Mypetmall has a 'single sign-on' policy. Any changes
                        will reflect in your Seller account also.
                      </p>
                    </div>
                  </div>
                  <div className="account__delete">
                    <a href="account.html">Delete Account</a>
                  </div>
                </form>
              )}

              {activeTab === "manageAddresses" && (
                <div className="registration__form checkout__form account__sidebar" style={{ marginLeft: '10px' }}>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="sub__title">Manage Addresses</h5>
                    <button className="btn btn-primary">
                      <i className="fas fa-plus me-2"></i> Add New Address
                    </button>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <h5 className="card-title mb-0">Home Address</h5>
                            <span className="badge bg-primary">Default</span>
                          </div>
                          <p className="card-text">
                            123 Main Street<br />
                            Apt 4B<br />
                            New York, NY 10001<br />
                            United States
                          </p>
                          <div className="d-flex justify-content-between mt-3">
                            <button className="btn btn-sm btn-outline-primary">
                              <i className="fas fa-edit me-1"></i> Edit
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title mb-3">Work Address</h5>
                          <p className="card-text">
                            456 Business Ave<br />
                            Floor 10<br />
                            New York, NY 10005<br />
                            United States
                          </p>
                          <div className="d-flex justify-content-between mt-3">
                            <button className="btn btn-sm btn-outline-primary">
                              <i className="fas fa-edit me-1"></i> Edit
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "panCard" && (
                <div className="registration__form checkout__form account__sidebar" style={{ marginLeft: '10px' }}>
                  <h5 className="sub__title">PAN Card Information</h5>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-grp">
                            <label className="r__form__label">PAN Number</label>
                            <input
                              type="text"
                              placeholder="Enter PAN Number"
                              value="ABCDE1234F"
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-grp">
                            <label className="r__form__label">Name on PAN</label>
                            <input
                              type="text"
                              placeholder="Name as on PAN"
                              value={userName}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted">
                          PAN card details are verified and cannot be changed.
                          Contact support for any corrections.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "giftCards" && (
                <div className="registration__form checkout__form account__sidebar" style={{ marginLeft: '10px' }}>
                  <h5 className="sub__title">Gift Cards</h5>
                  <div className="alert alert-info">
                    You don't have any gift cards yet.
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-subtitle mb-2 text-muted">Redeem a Gift Card</h6>
                      <div className="form-grp">
                        <input
                          type="text"
                          placeholder="Enter Gift Card Code"
                          className="form-control"
                        />
                      </div>
                      <button className="btn btn-primary mt-2">
                        Redeem Now
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "savedUPI" && (
                <div className="registration__form checkout__form account__sidebar" style={{ marginLeft: '10px' }}>
                  <h5 className="sub__title">Saved UPI IDs</h5>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <h6 className="mb-0">user@upi</h6>
                          <small className="text-muted">Default UPI ID</small>
                        </div>
                        <div>
                          <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                          <button className="btn btn-sm btn-outline-danger">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary mt-3">
                    + Add New UPI ID
                  </button>
                </div>
              )}

              {activeTab === "savedCards" && (
                <div className="registration__form checkout__form account__sidebar" style={{ marginLeft: '10px' }}>
                  <h5 className="sub__title">Saved Cards</h5>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <img
                            src="https://logo.clearbit.com/visa.com"
                            alt="Visa"
                            width="40"
                            className="me-3"
                          />
                          <span>Visa ending in 4242</span>
                        </div>
                        <div>
                          <button className="btn btn-sm btn-outline-danger">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <img
                            src="https://logo.clearbit.com/mastercard.com"
                            alt="Mastercard"
                            width="40"
                            className="me-3"
                          />
                          <span>Mastercard ending in 5555</span>
                        </div>
                        <div>
                          <button className="btn btn-sm btn-outline-danger">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary mt-3">
                    + Add New Card
                  </button>
                </div>
              )}

              {activeTab === "myCoupons" && (
                <div className="registration__form checkout__form account__sidebar" style={{ marginLeft: '10px' }}>
                  <h5 className="sub__title">My Coupons</h5>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">WELCOME20</h6>
                          <small className="text-muted">Get 20% off on first order</small>
                        </div>
                        <div>
                          <span className="badge bg-success">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">SUMMER15</h6>
                          <small className="text-muted">15% off on summer collection</small>
                        </div>
                        <div>
                          <span className="badge bg-secondary">Expired</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "myReviews" && (
                <div className="registration__form checkout__form account__sidebar" style={{ marginLeft: '10px' }}>
                  <h5 className="sub__title">My Reviews & Ratings</h5>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex mb-2">
                        <div className="rating me-2">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star text-warning"></i>
                        </div>
                        <small className="text-muted">2 weeks ago</small>
                      </div>
                      <h6>Great product!</h6>
                      <p>The quality exceeded my expectations. Would definitely recommend.</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex mb-2">
                        <div className="rating me-2">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star text-warning"></i>
                          <i className="far fa-star text-warning"></i>
                        </div>
                        <small className="text-muted">1 month ago</small>
                      </div>
                      <h6>Average experience</h6>
                      <p>Product was okay but delivery took longer than expected.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "allNotifications" && (
                <div className="registration__form checkout__form account__sidebar mt-4" style={{ marginLeft: '10px' }}>
                  <h5 className="sub__title">All Notifications</h5>
                  <div className="list-group">
                    <div className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1">Order Shipped</h6>
                        <small>Today</small>
                      </div>
                      <p className="mb-1">Your order #12345 has been shipped.</p>
                    </div>
                    <div className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1">Special Offer</h6>
                        <small>2 days ago</small>
                      </div>
                      <p className="mb-1">Get 20% off on your next purchase!</p>
                    </div>
                    <div className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1">Payment Received</h6>
                        <small>1 week ago</small>
                      </div>
                      <p className="mb-1">We've received your payment for order #12345.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "appointments" && (
                <div className="registration__form checkout__form account__sidebar">
                  <h3 className="mb-3">Appointment List</h3>
                  <table className="table">
                    <thead className="table-info">
                      <tr>
                        <th>ID</th>
                        <th>Doctor Name</th>
                        <th>Doctor Number</th>
                        <th>Doctor Email ID</th>
                        <th>Appointment Date & Time</th>

                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointment.map((v) => {
                        <tr key={v.id}>
                          <td>{v.id}</td>
                          <td>{v.name}</td>
                          <td>{v.number}</td>
                          <td>{v.email}</td>
                          <td>{v.datentime}</td>
                          <td className="text-success">Confirmed</td>
                        </tr>;
                      })}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === "favourites" && (
                <div className="registration__form checkout__form account__sidebar">
                  <h3 className="mb-3">My all time favourites!</h3>
                  <div className="row justify-content-left ">
                    {allDoctors.map((v) => {
                      return v.isWishlisted === true ? (
                        <div className="col-xl-4 col-lg-4 col-md-6" key={v._id}>
                          <div className="doc_post">
                            <div className="doc_post_pic">
                              <img
                                src={
                                  v.profilePicture
                                    ? `${apiUrl}${v.profilePicture}`
                                    : "https://placehold.it/100x100"
                                }
                                alt={v.name}
                              />
                            </div>
                            <div className="doc_post_content">
                              <h3 className="doc_name">{v.name}</h3>
                              <p className="doc_specialty">
                                {v.specialization}
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
                              <p>Exp : {v.experience}</p>
                              <p className="doc__qual">
                                <img
                                  src="assets/img/icon/icon8-degree-48.png"
                                  alt="img"
                                />
                                {v.education}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
              {activeTab === "notifications" && (
                <div className="registration__form checkout__form account__sidebar mt-4">
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

              {activeTab === "myOrders" && (
                <div className="registration__form checkout__form account__sidebar" style={{ marginLeft: '10px' }}>
                  <OrderList />
                </div>
              )}

              {/* {activeTab === "wishlist" && (
                <div className="container " >
                  <Wishlist />
                </div>
              )} */}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;