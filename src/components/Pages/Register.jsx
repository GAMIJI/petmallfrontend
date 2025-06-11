import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './apps.css'
import './add.css'
import './responsive.css'
// import './furniture.css'

import { LuMessageCircleMore } from "react-icons/lu";
import { FaUserMd } from "react-icons/fa";

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import AddIcon from '@mui/icons-material/Add';



const Register = () => {
  const [activeTab, setActiveTab] = useState("customer");
  const apiUrl = import.meta.env.VITE_API_URL;
  const api = import.meta.env.VITE_API_URL;
  const [step, setStep] = useState(1);
  const [roles, setRoles] = useState({
    doctor: "no",
    vendor: "no",
    venory: "no"
  });
  const navigate = useNavigate();



  const categories = ["Pet Food", "Toys", "Grooming", "Accessories", "Health", "Apparel"];
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen(prev => !prev);

  const handleSelect = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);




  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);


  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [clinicType, setClinicType] = useState('');


  // State variables for doctor registration
  const [docProfilePreview, setDocProfilePreview] = useState(null);
  const [availableDays, setAvailableDays] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [documents, setDocuments] = useState([]);
  const [docProfilePicture, setDocProfilePicture] = useState(null);
  const [docName, setDocName] = useState("");
  const [docEmail, setDocEmail] = useState("");
  const [docPassword, setDocPassword] = useState("");
  const [docConfirmPassword, setDocConfirmPassword] = useState("");
  const [docPhone, setDocPhone] = useState("");
  const [docEducation, setDocEducation] = useState("");
  const [docExperience, setDocExperience] = useState("");
  const [docCollege, setDocCollege] = useState("");
  const [docSpecialization, setDocSpecialization] = useState("");
  const [docLicenseNumber, setDocLicenseNumber] = useState("");
  const [docConsultationFee, setDocConsultationFee] = useState("");
  const [docClinicAddress, setDocClinicAddress] = useState("");

  const [docClinicName, setDocClinicName] = useState("");
  const [docAvailableDays, setDocAvailableDays] = useState([]);
  const [docTimings, setDocTimings] = useState({ start: "09:00", end: "18:00" });
  const [docServices, setDocServices] = useState([]);


  // State variables for customer registration
  const [profilePreview, setProfilePreview] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locationError, setLocationError] = useState('');


  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude.toFixed(6));
        setLongitude(position.coords.longitude.toFixed(6));
        setLocationError('');
      },
      (error) => {
        console.error('Error getting location:', error);
        setLocationError('Unable to retrieve your location. Please allow permission.');
      }
    );
  };

  // const handleDocProfileChange = (e) => {
  //   setDocProfilePicture(e.target.files[0]);
  // };
  const handleDocDocumentsChange = (e) => { setDocDocuments([...e.target.files]); };


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };



  const newPage = () => {
    navigate("/DashBoard");
  };

  const handleSupportClick = () => {
    setStatus(!status);
  };

  const faqData = [
    {
      question: "Vivamus at orci ut neque tincidunt convallis.",
      answer:
        "Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.",
    },
    {
      question: "Nam nec justo congue, gravida velit et, viverra nibh.",
      answer:
        "Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.",
    },
    {
      question: "Cras ac purus sed lectus volutpat feugiat in et nunc.",
      answer:
        "Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.",
    },
    {
      question: "Fusce at arcu dapibus, fermentum diam sed, pretium mi.",
      answer:
        "Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.",
    },
    {
      question: "Nulla facilisis lorem vel turpis hendrerit faucibus.",
      answer:
        "Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.",
    },
    {
      question: "Pellentesque faucibus ante id nunc molestie elementum.",
      answer:
        "Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.",
    },
  ];

  const daysOptions = [
    { value: "Mon", label: "Monday" },
    { value: "Tue", label: "Tuesday" },
    { value: "Wed", label: "Wednesday" },
    { value: "Thu", label: "Thursday" },
    { value: "Fri", label: "Friday" },
    { value: "Sat", label: "Saturday" },
    { value: "Sun", label: "Sunday" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleDocProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocProfilePicture(file);
      setDocProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (acceptedFiles) => {
    setDocuments((prev) => [...prev, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: {
      "application/pdf": [],
      "image/jpeg": [],
      "image/png": [],
    },
    multiple: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userPassword !== userConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", userName);
    formData.append("userEmail", userEmail);
    formData.append("password", userPassword);
    formData.append("phone", userPhone);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const response = await axios.post(
        `${apiUrl}api/user/registerUser`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("User registered successfully:", response.data);
        navigate("/verifyOtp", {
          state: {
            otp: response.data.user.otp,
            phone: response.data.user.phone,
          },
        });
      }
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleVendorSubmit = async (e) => {
    e.preventDefault();

    if (userPassword !== userConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("role", "vendor");
    formData.append("name", userName);
    formData.append("userEmail", userEmail);
    formData.append("password", userPassword);
    formData.append("phone", userPhone);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const response = await axios.post(
        `${apiUrl}api/user/registerUser`,
        {
          name: userName,
          userEmail: userEmail,
          password: userPassword,
          phone: userPhone,
          role: "vendor",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("User registered successfully:", response.data);
        navigate("/verifyOtp", {
          state: {
            otp: response.data.user.otp,
            phone: response.data.user.phone,
          },
        });
      }
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  const handleDocSubmit = async (e) => {
    e.preventDefault();

    if (docPassword !== docConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("role", "doctor");
    formData.append("name", docName);
    formData.append("userEmail", docEmail);
    formData.append("password", docPassword);
    formData.append("phone", docPhone);
    formData.append("education", docEducation);
    formData.append("experience", docExperience);
    formData.append("college", docCollege);
    formData.append("specialization", docSpecialization);
    formData.append("licenseNumber", docLicenseNumber);
    formData.append("consultationFee", docConsultationFee);
    formData.append("clinicAddress", docClinicAddress);
    if (docProfilePicture) {
      formData.append("profilePicture", docProfilePicture);
    }
    if (documents.length > 0) {
      documents.forEach((file) => {
        formData.append("documents", file);
      });
    }
    availableDays.forEach((day) => {
      formData.append("availableDays", day.value);
    });
    formData.append(
      "timings",
      JSON.stringify({ start: startTime, end: endTime })
    );

    try {
      const response = await axios.post(
        `${api}api/user/registerUser`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Doctor registered successfully:", response.data);
        navigate("/verifyOtp", {
          state: {
            otp: response.data.user.otp,
            phone: response.data.user.phone,
          },
        });
      }
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const [hidepersonal, setHidePersonal] = useState("Hide");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [error, setError] = useState(false);
  const handleRoleChange = (role) => {
    setError(false); // Reset error when user interacts
    if (selectedRoles.includes(role)) {
      // Remove role if already selected
      setSelectedRoles(selectedRoles.filter(r => r !== role));
    } else {
      // Add role if not selected
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  // Validate before proceeding
  const handleNextStep = () => {
    if (selectedRoles.length === 0) {
      setError(true); // Show error if nothing selected
      return;
    }
    setHidePersonal("DoctorProfessionalDetails"); // Proceed if valid
  };




  const handleRoleSelect = (role, value) => {
    setRoles((prev) => ({ ...prev, [role]: value }));
  };


  return (
    <div >


      <div style={{ width: "100%" }}>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-0"
          style={{
            width: "100%",
            height: "auto",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1,
            backgroundColor: "#fff",
          }}
        >

          <div className="container-fluid d-flex justify-content-between align-items-center px-4 p-0 ">

            {/* Logo */}
            <div className="d-flex align-items-center m-2">
              <img
                src="assets/img/logo/logo.png"
                style={{ height: "60px", width: "auto" }}
                alt="Logo"
              />
            </div>

            {/* Toggle Button */}
            <button
              className="navbar-toggler ms-3 d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            {/* Navbar Content */}
            <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
              <ul className="navbar-nav gap-2 me-auto">
                <li className="nav-item">
                  <a className="nav-link active fw-bolder nav-hover-blue" href="#">Sell Online</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active fw-bolder nav-hover-blue" href="#">How it Works</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active fw-bolder nav-hover-blue" href="#">Pricing & Commission</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active fw-bolder nav-hover-blue" href="#">Shipping & Returns</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active fw-bolder nav-hover-blue" href="#">Grow Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active fw-bolder nav-hover-blue" href="#">Don't have GST?</a>
                </li>
              </ul>

              {/* Mobile Buttons */}
              <div className="d-lg-none d-flex flex-column gap-2 mt-3">
                <button
                  className="btn btn-outline bg-white text-black border-primary"
                  style={{ border: "solid 1px", height: "40px", width: "60%" }}
                >
                  Login
                </button>
                <button
                  className="btn btn-primary text-white"
                  style={{ border: "solid 1px", height: "40px", width: "60%" }}
                >
                  Start Selling
                </button>
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="d-none d-lg-flex gap-2 ms-3 align-items-center">
              <button
                className="btn btn-outline bg-white text-black border-primary"
                style={{ border: "solid 1px", height: "40px", width: "60%" }}
              >
                Login
              </button>
              <button
                className="btn btn-primary text-white"
                style={{ height: "40px", width: "100%" }}
              >
                Start Selling
              </button>
            </div>
          </div>
        </nav>
      </div>



      <main className="fix" >

        <section className="registration__area-two " style={{ padding: "10px",marginTop:"80px" }}>
          <div>
            <div className="registration__inner-wrap-two" >
              <div className="row justify-content-center" >
                <div className="col-lg-12"   >

                  <section
                    style={{ backgroundColor: "#05576e" }}
                    className="flat-search-home page"
                  >
                    <div className="container2" >
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="heading-section text-center p-0" style={{ width: "100%" }}>
                            <h2
                              className="fw-bold lh-base text-white fs-2 fs-md-3 fs-lg-1"
                            >
                              Complete the process and connect with Mypetmall services
                            </h2>
                          </div>
                        </div>

                      </div>
                    </div>
                  </section>



                  <section className="flat-contact-page checks w-100 w-md-75 w-lg-60 w-xl-50 mx-auto section1">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 mb-4">
                          <div id="comments" className="comments cfd">
                            {step === 1 ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>MyPetMall Services</h3>
                                </div>

                                <div className="respond-comment">
                                  <div className="jsy">
                                    <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                    <h3 className="fw-8 prgs">0%</h3>
                                  </div>
                                  <div className="w3-border mb-1 bgh">
                                    <div className="w3-grey ert"></div>
                                  </div>
                                  <p className="fs-18 mb-3" >Step 1 of 4</p>
                                  <form
                                    method="post"
                                    id="contactform"
                                    className="ghrt comment-form form-submit p-3 bg-white"
                                    action="./contact/contact-process.php"
                                    acceptCharset="utf-8"
                                    noValidate="novalidate"
                                  >
                                    <h3 className="mb-0">
                                      <div className="flex mb-3">
                                        <div className="fgr">
                                          <FaUserMd className="setod" />
                                        </div>
                                        <div className="fs-20">
                                          Personal & Account Information <br />
                                          <font className="text-secondary fw-5">
                                            Please provide your basic details
                                          </font>
                                          {/* <hr /> */}
                                        </div>
                                      </div>
                                    </h3>

                                    <label className="text-color-2 fw-6 mb-0">
                                      Full Name<span className="text-danger">*</span>
                                    </label>
                                    <div className="text-wrap flex form-wg">
                                      <fieldset style={{ width: "100%" }}>
                                        <input
                                          type="text"
                                          className="tb-my-input"
                                          name="name"
                                          placeholder="Full Name"
                                          required
                                          value={docName}
                                          onChange={(e) => setDocName(e.target.value)}
                                        />
                                      </fieldset>
                                    </div>

                                    <label className="text-color-2 fw-6 mb-0">
                                      Email<span className="text-danger">*</span>
                                    </label>
                                    <div className="text-wrap flex form-wg">
                                      <fieldset style={{ width: "100%" }}>
                                        <input
                                          type="email"
                                          className="tb-my-input"
                                          name="email"
                                          placeholder="Email Address"
                                          required
                                          value={docEmail}
                                          onChange={(e) => setDocEmail(e.target.value)}
                                        />
                                      </fieldset>
                                    </div>

                                    <label className="text-color-2 fw-6 mb-0">
                                      Phone Number<span className="text-danger">*</span>
                                    </label>
                                    <div className="text-wrap flex form-wg">
                                      <fieldset style={{ width: "100%" }}>
                                        <input style={{ width: "100%" }}
                                          type="tel"
                                          className="tb-my-input"
                                          name="phone"
                                          placeholder="Phone Number"
                                          required
                                          value={docPhone}
                                          onChange={(e) => setDocPhone(e.target.value)}
                                        />
                                      </fieldset>
                                    </div>

                                    <label className="text-color-2 fw-6 mb-0">
                                      Password<span className="text-danger">*</span>
                                    </label>
                                    <div className="text-wrap flex form-wg">
                                      <fieldset style={{ width: "100%" }}>
                                        <input
                                          type="password"
                                          className="tb-my-input"
                                          name="password"
                                          placeholder="Create a password (8+ characters)"
                                          required
                                          value={docPassword}
                                          onChange={(e) => setDocPassword(e.target.value)}
                                        />
                                      </fieldset>
                                    </div>

                                    <label className="text-color-2 fw-6 mb-0">
                                      License Number<span className="text-danger">*</span>
                                    </label>
                                    <div className="text-wrap flex form-wg">
                                      <fieldset style={{ width: "100%" }}>
                                        <input
                                          type="text"
                                          className="tb-my-input"
                                          name="licenseNumber"
                                          placeholder="Medical license number"
                                          required
                                          value={docLicenseNumber}
                                          onChange={(e) => setDocLicenseNumber(e.target.value)}
                                        />
                                      </fieldset>
                                    </div>

                                    <label className="text-color-2 fw-6 mb-0">
                                      Education/Degrees<span className="text-danger">*</span>
                                    </label>

                                    <div className="text-wrap flex form-wg">
                                      <fieldset style={{ width: "100%" }}>
                                        <input
                                          type="text"
                                          className="tb-my-input"
                                          name="education"
                                          placeholder="e.g. MBBS, MD, BAMS"
                                          required
                                          value={docEducation}
                                          onChange={(e) => setDocEducation(e.target.value)}
                                        />
                                      </fieldset>
                                    </div>

                                    <label className="text-color-2 fw-6 mb-0">
                                      College/University<span className="text-danger">*</span>
                                    </label>
                                    <div className="text-wrap flex form-wg">
                                      <fieldset style={{ width: "100%" }}>
                                        <input
                                          type="text"
                                          className="tb-my-input"
                                          name="college"
                                          placeholder="College or university attended"
                                          required
                                          value={docCollege}
                                          onChange={(e) => setDocCollege(e.target.value)}
                                        />
                                      </fieldset>
                                    </div>

                                    <label className="text-color-2 fw-6 mb-0">
                                      Website (optional)
                                    </label>
                                    <div className="text-wrap flex form-wg">
                                      <fieldset style={{ width: "100%" }}>
                                        <input style={{ width: "100%" }}
                                          type="url"
                                          className="tb-my-input"
                                          name="website"
                                          placeholder="Business website URL"
                                        />
                                      </fieldset>
                                    </div>
                                    <label className="text-color-2 fw-6 mb-0">
                                      ID Proof (Passport/Driving License)<span className="text-danger">*</span>
                                      <small className="text-muted"> (PDF/JPG/PNG, max 5MB)</small>
                                    </label>
                                    <div className="text-wrap flex form-wg">
                                      <fieldset style={{ width: "100%" }}>
                                        <input
                                          type="file"
                                          className="tb-my-input"
                                          name="idProof"
                                          accept=".pdf,.jpg,.jpeg,.png"
                                          required
                                        />
                                      </fieldset>
                                    </div>



                                    <label className="text-color-2 fw-6 mb-0">
                                      Profile Picture<span className="text-danger">*</span>
                                    </label>
                                    <div className="text-wrap flex form-wg">
                                      <fieldset style={{ width: "100%" }}>
                                        <input
                                          type="file"
                                          className="tb-my-input"
                                          name="profilePicture"
                                          accept="image/*"
                                          required
                                          onChange={handleDocProfileChange}
                                        />
                                      </fieldset>
                                    </div>

                                    <hr />
                                    <div className="jsy">
                                      <div>
                                        {/* <button
                                          style={{ backgroundColor: "rgb(229 228 228)" }}
                                          onClick={() => {
                                            setHidePersonal("Hide");
                                          }}
                                          className="sc-button btn-icon"
                                          name="submit"
                                          type="button"
                                        >
                                          <span className="text-color-1" style={{ color: "black" }}>Back</span>
                                        </button> */}
                                      </div>
                                      <div className="lh-16">
                                        <button
                                          onClick={() => {
                                            setStep(2); // Next step
                                          }}
                                          className="sc-button btn-icon"
                                          name="submit"
                                          type="button"
                                        >
                                          <span>Next</span>
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            ) : null}

                            {/* Doctor Professional Details */}
                            {step === 2 ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">25%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs1"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 2 of 4</p>
                                <form method="post"
                                  id="contactform"
                                  className="ghrt comment-form form-submit p-3 bg-white"
                                  action="./contact/contact-process.php"
                                  acceptCharset="utf-8"
                                  noValidate="novalidate">
                                  <div className="mb-4">
                                    <label  className="fw-6 mb-2" style={{color :"#05576e"}}>Do you want to register as a Doctor?</label>
                                    <div className="d-flex gap-3">
                                      <label>
                                        <input
                                          type="radio"

                                          name="doctor"
                                          value="yes"
                                          checked={roles.doctor === "yes"}
                                          onChange={() => handleRoleSelect("doctor", "yes")}
                                        />{" "}
                                        Yes
                                      </label>
                                      <label>
                                        <input
                                          type="radio"
                                          name="doctor"
                                          value="no"
                                          checked={roles.doctor === "no"}
                                          onChange={() => handleRoleSelect("doctor", "no")}
                                        />{" "}
                                        No
                                      </label>
                                    </div>

                                    {roles.doctor === "yes" && (
                                      <div>

                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Clinic/Hospital Name<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="text"
                                                className="tb-my-input"
                                                name="clinicName"
                                                placeholder="Clinic or hospital name"
                                                required
                                                value={docClinicName}
                                                onChange={(e) => setDocClinicName(e.target.value)}
                                              />
                                            </fieldset>
                                          </div>
                                        </div>

                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Clinic Address<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="text"
                                                className="tb-my-input"
                                                name="clinicAddress"
                                                placeholder="Full clinic address"
                                                required
                                                value={docClinicAddress}
                                                onChange={(e) => setDocClinicAddress(e.target.value)}
                                              />
                                            </fieldset>
                                          </div>
                                        </div>

                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Specialization<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="text"
                                                className="tb-my-input"
                                                name="specialization"
                                                placeholder="e.g. Cardiologist, Dermatologist"
                                                required
                                                value={docSpecialization}
                                                onChange={(e) => setDocSpecialization(e.target.value)}
                                              />
                                            </fieldset>
                                          </div>
                                        </div>
                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Years of Experience<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="number"
                                                className="tb-my-input"
                                                name="experience"
                                                placeholder="Years of experience"
                                                required
                                                value={docExperience}
                                                onChange={(e) => setDocExperience(e.target.value)}
                                              />
                                            </fieldset>
                                          </div>
                                        </div>

                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Consultation Fee<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="number"
                                                className="tb-my-input"
                                                name="consultationFee"
                                                placeholder="Consultation fee in local currency"
                                                required
                                                value={docConsultationFee}
                                                onChange={(e) => setDocConsultationFee(e.target.value)}
                                              />
                                            </fieldset>
                                          </div>
                                        </div>

                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Available Days<span className="text-danger">*</span>
                                          </label>
                                          <div className="form-group wdth">
                                            <div className="d-flex flex-wrap gap-2" >
                                              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                                <label key={day} className="d-flex align-items-center" style={{color :"#05576e"}}>
                                                  <input
                                                    className="chkhgh"
                                                    name="availableDays"
                                                    type="checkbox"
                                                    value={day}
                                                    checked={docAvailableDays.includes(day)}
                                                    onChange={(e) => {
                                                      if (e.target.checked) {
                                                        setDocAvailableDays([...docAvailableDays, day]);
                                                      } else {
                                                        setDocAvailableDays(docAvailableDays.filter(d => d !== day));
                                                      }
                                                    }}
                                                  />
                                                  <span className="btn-checkbox ms-2" />
                                                  <span className="mt-1 fs-13 fw-6 ms-2">{day}</span>
                                                </label>
                                              ))}
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Operating Hours<span className="text-danger">*</span>
                                          </label>
                                          <div className="row mt-3">
                                            <div className="col-md-6">
                                              <label className="text-color-2 fw-6 mb-0">
                                                Start Time<span className="text-danger">*</span>
                                              </label>
                                              <div className="text-wrap flex form-wg">
                                                <fieldset style={{ width: "100%" }}>
                                                  <input
                                                    type="time"
                                                    className="tb-my-input"
                                                    name="startTime"
                                                    required
                                                    value={docTimings.start}
                                                    onChange={(e) => setDocTimings({ ...docTimings, start: e.target.value })}
                                                  />
                                                </fieldset>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="text-color-2 fw-6 mb-0">
                                                End Time<span className="text-danger">*</span>
                                              </label>
                                              <div className="text-wrap flex form-wg">
                                                <fieldset style={{ width: "100%" }}>
                                                  <input
                                                    type="time"
                                                    className="tb-my-input"
                                                    name="endTime"
                                                    required
                                                    value={docTimings.end}
                                                    onChange={(e) => setDocTimings({ ...docTimings, end: e.target.value })}
                                                  />
                                                </fieldset>
                                              </div>
                                            </div>
                                          </div>


                                        </div>

                                        <div className="row mt-3 mb-3">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Professional Documents<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="file"
                                                className="tb-my-input"
                                                name="documents"
                                                multiple
                                                accept=".pdf,.jpg,.png"
                                                required
                                                onChange={handleDocDocumentsChange}
                                              />
                                              <small>Upload proof of degrees, license, certifications (PDF/Image)</small>
                                            </fieldset>
                                          </div>
                                        </div>

                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Clinic Location (Coordinates)<span className="text-danger">*</span>
                                          </label>
                                          <div className="mb-3">
                                            <button
                                              type="button"
                                              className="sc-button btn-icon"
                                              onClick={() => {
                                                navigator.geolocation.getCurrentPosition(
                                                  (position) => {
                                                    setLatitude(position.coords.latitude);
                                                    setLongitude(position.coords.longitude);
                                                  },
                                                  (error) => {
                                                    console.error("Error getting location:", error);
                                                  }
                                                );
                                              }}
                                            >
                                              <span>Detect My Location</span>
                                            </button>
                                          </div>
                                          <div className="mr-2">
                                            {latitude && longitude && (
                                              <iframe
                                                title="Google Map"
                                                width="650"
                                                height="450"
                                                style={{ border: 1 }}
                                                loading="lazy"
                                                allowFullScreen
                                                referrerPolicy="no-referrer-when-downgrade"
                                                src={`https://www.google.com/maps?q=${latitude},${longitude}&output=embed`}
                                              ></iframe>
                                            )}
                                          </div>

                                        </div>


                                        <div className="form-group wdth">
                                          <div className="d-flex flex-column gap-2">
                                            <label className="text-color-2 fw-6 mb-0">
                                              Please select the services you provide<span className="text-danger">*</span>
                                            </label>
                                            <label className="d-flex align-items-center">

                                              <input
                                                className="chkhgh"
                                                name="services"
                                                type="checkbox"
                                                value="General Checkups"
                                                checked={docServices.includes("General Checkups")}
                                                onChange={(e) => {
                                                  if (e.target.checked) {
                                                    setDocServices([...docServices, "General Checkups"]);
                                                  } else {
                                                    setDocServices(docServices.filter(s => s !== "General Checkups"));
                                                  }
                                                }}
                                              />
                                              <span className="btn-checkbox ms-2" />
                                              <span className="mt-1 fs-13 fw-6 ms-2" style={{color:"#05576e"}}>General Checkups</span>
                                            </label>

                                            <label className="d-flex align-items-center">
                                              <input
                                                className="chkhgh"
                                                name="services"
                                                type="checkbox"
                                                value="Vaccinations"
                                                checked={docServices.includes("Vaccinations")}
                                                onChange={(e) => {
                                                  if (e.target.checked) {
                                                    setDocServices([...docServices, "Vaccinations"]);
                                                  } else {
                                                    setDocServices(docServices.filter(s => s !== "Vaccinations"));
                                                  }
                                                }}
                                              />
                                              <span className="btn-checkbox ms-2" />
                                              <span className="mt-1 fs-13 fw-6 ms-2" style={{color:"#05576e"}}>Vaccinations</span>
                                            </label>

                                            <label className="d-flex align-items-center">
                                              <input
                                                className="chkhgh"
                                                name="services"
                                                type="checkbox"
                                                value="Surgery"
                                                checked={docServices.includes("Surgery")}
                                                onChange={(e) => {
                                                  if (e.target.checked) {
                                                    setDocServices([...docServices, "Surgery"]);
                                                  } else {
                                                    setDocServices(docServices.filter(s => s !== "Surgery"));
                                                  }
                                                }}
                                              />
                                              <span className="btn-checkbox ms-2" />
                                              <span className="mt-1 fs-13 fw-6 ms-2" style={{color:"#05576e"}}>Surgery</span>
                                            </label>

                                            <label className="d-flex align-items-center">
                                              <input
                                                className="chkhgh"
                                                name="services"
                                                type="checkbox"
                                                value="Dental Care"
                                                checked={docServices.includes("Dental Care")}
                                                onChange={(e) => {
                                                  if (e.target.checked) {
                                                    setDocServices([...docServices, "Dental Care"]);
                                                  } else {
                                                    setDocServices(docServices.filter(s => s !== "Dental Care"));
                                                  }
                                                }}
                                              />
                                              <span className="btn-checkbox ms-2" />
                                              <span className="mt-1 fs-13 fw-6 ms-2" style={{color:"#05576e"}}>Dental Care</span>
                                            </label>
                                          </div>
                                        </div>

                                      </div>
                                    )}
                                  </div>

                                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div className="lh-16">
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setStep(1); // Previous step
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span className="text-color-2" style={{ color: "black" }}>Back</span>
                                      </button>
                                    </div>
                                    <div className="lh-16">
                                      <button
                                        onClick={() => {
                                          setStep(3); // Next step
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span>Next</span>
                                      </button>
                                    </div>
                                  </div>
                                </form>

                              </div>
                            ) : null}

                            {/* Doctor Clinic Information */}
                            {step === 3 ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">50%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs2"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 3 of 4</p>
                                <form
                                  method="post"
                                  id="contactform"
                                  className="ghrt comment-form form-submit p-3 bg-white"
                                  action="./contact/contact-process.php"
                                  acceptCharset="utf-8"
                                  noValidate="novalidate"
                                >
                                  <div className="mb-4">
                                    <label className="fw-6 mb-2" style={{color :"#05576e"}}>Do you want to register as a Vendor?</label>
                                    <div className="d-flex gap-3">
                                      <label>
                                        <input
                                          type="radio"
                                          name="vendor"
                                          value="yes"
                                          checked={roles.vendor === "yes"}
                                          onChange={() => handleRoleSelect("vendor", "yes")}
                                        />{" "}
                                        Yes
                                      </label>
                                      <label>
                                        <input
                                          type="radio"
                                          name="vendor"
                                          value="no"
                                          checked={roles.vendor === "no"}
                                          onChange={() => handleRoleSelect("vendor", "no")}
                                        />{" "}
                                        No
                                      </label>
                                    </div>

                                    {roles.vendor === "yes" && (
                                      <>
                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Store Name<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="text"
                                                className="tb-my-input"
                                                name="businessName"
                                                placeholder="Registered business name"
                                                required
                                              />
                                            </fieldset>
                                          </div>
                                        </div>
                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Store Address<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="text"
                                                className="tb-my-input"
                                                name="storeAddress"
                                                placeholder="Full physical location"
                                                required
                                                rows="3"
                                              />
                                            </fieldset>
                                          </div>
                                        </div>


                                        <div className="mt-2">

                                          <label className="text-color-2 fw-6 mb-0">
                                            Website (optional)
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input style={{ width: "100%" }}
                                                type="url"
                                                className="tb-my-input"
                                                name="website"
                                                placeholder="Business website URL"
                                              />
                                            </fieldset>
                                          </div>
                                        </div>

                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Product Categories<span className="text-danger">*</span>
                                          </label>

                                          <div className="relative" style={{ width: "100%" }} ref={dropdownRef}>
                                            <div
                                              className={`nice-select current list style ${open ? "open" : ""}`}
                                              style={{
                                                width: "100%",
                                                cursor: "pointer",
                                                padding: "10px 15px",
                                                border: "1px solid #ced4da",
                                                borderRadius: "4px",
                                                position: "relative",
                                                background: "#fff",
                                              }}
                                              onClick={toggleDropdown}
                                            >
                                              <span className="current">
                                                {selected.length > 0 ? selected.join(", ") : "Choose product categories"}
                                              </span>
                                              <div
                                                className="arrow"
                                                style={{
                                                  position: "absolute",
                                                  right: "15px",
                                                  top: "50%",
                                                  transform: "translateY(-50%)",
                                                }}
                                              >
                                                {open ? <FiChevronUp /> : <FiChevronDown />}

                                              </div>
                                            </div>

                                            {open && (
                                              <ul
                                                className="list bg-white"
                                                style={{
                                                  position: "absolute",
                                                  width: "100%",
                                                  border: "1px solid #ced4da",
                                                  borderRadius: "4px",
                                                  marginTop: "-13 px",
                                                  zIndex: 10,
                                                  maxHeight: "200px",
                                                  overflowY: "auto",
                                                  padding: "10px",
                                                }}
                                              >
                                                {categories.map((category) => (
                                                  <li key={category} className="option" onClick={(e) => e.stopPropagation()}>
                                                    <label className="d-flex align-items-center mb-1">
                                                      <input
                                                        type="checkbox"
                                                        value={category}
                                                        checked={selected.includes(category)}
                                                        onChange={() => handleSelect(category)}
                                                        className="me-2"
                                                      />
                                                      {category}
                                                    </label>
                                                  </li>
                                                ))}
                                              </ul>
                                            )}
                                          </div>
                                        </div>

                                        <div className="mt-4">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Registration Number<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="text"
                                                className="tb-my-input"
                                                name="registrationNumber"
                                                placeholder="Business registration number"
                                                required
                                              />
                                            </fieldset>
                                          </div>
                                        </div>



                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Store Type<span className="text-danger">*</span>
                                          </label>
                                          <div className="relative" style={{ width: "100%" }}>
                                            <select className="nice-select current list style" style={{ width: "100%" }} name="businessType" required>
                                              <option value="" disabled selected>Choose business type</option>
                                              <option value="retailer">Retailer</option>
                                              <option value="wholesaler">Wholesaler</option>
                                              <option value="manufacturer">Manufacturer</option>
                                              <option value="dropshipper">Dropshipper</option>
                                              <option value="distributor">Distributor</option>
                                            </select>
                                          </div>
                                        </div>


                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Years in Business<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="number"
                                                className="tb-my-input"
                                                name="yearsInBusiness"
                                                placeholder="Number of years in business"
                                                min="0"
                                                required
                                              />
                                            </fieldset>
                                          </div>
                                        </div>

                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            GST Number (optional)
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="text"
                                                className="tb-my-input"
                                                name="gstNumber"
                                                placeholder="GST or tax identification number"
                                              />
                                            </fieldset>
                                          </div>
                                        </div>



                                      </>


                                    )}
                                  </div>

                                  <hr />
                                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div className="lh-16">
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setStep(2); // Next step
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span className="text-color-2" style={{ color: "black" }}>Back</span>
                                      </button>
                                    </div>
                                    <div className="lh-16">
                                      <button
                                        onClick={() => {
                                          setStep(4); // Next step
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span>Next</span>
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            ) : null}

                            {/* Veterinary Services */}
                            {step === 4 ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">75%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs3"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 3 of 4</p>
                                <form
                                  method="post"
                                  id="contactform"
                                  className="ghrt comment-form form-submit p-3 bg-white"
                                  action="./contact/contact-process.php"
                                  acceptCharset="utf-8"
                                  noValidate="novalidate"
                                >

                                  <div className="mb-4">
                                    <label className="fw-6 mb-2" style={{color :"#05576e"}}>Do you want to register as a Veterinary?</label>
                                    <div className="d-flex gap-3">
                                      <label>
                                        <input
                                          type="radio"
                                          name="venory"
                                          value="yes"
                                          checked={roles.venory === "yes"}
                                          onChange={() => handleRoleSelect("venory", "yes")}
                                        />{" "}
                                        Yes
                                      </label>
                                      <label>
                                        <input
                                          type="radio"
                                          name="venory"
                                          value="no"
                                          checked={roles.venory === "no"}
                                          onChange={() => handleRoleSelect("venory", "no")}
                                        />{" "}
                                        No
                                      </label>
                                    </div>

                                    {roles.venory === "yes" && (
                                      <>
                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Registration Number<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="text"
                                                className="tb-my-input"
                                                name="registrationNumber"
                                                placeholder="Veterinary council registration number"
                                                required
                                              />
                                            </fieldset>
                                          </div>
                                        </div>

                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            License Document<span className="text-danger">*</span>
                                            <small className="text-muted"> (PDF/JPG/PNG, max 5MB)</small>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="file"
                                                className="tb-my-input"
                                                name="licenseFile"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                                required
                                              />
                                            </fieldset>
                                          </div>
                                        </div>


                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Years of Experience<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="number"
                                                className="tb-my-input"
                                                name="experience"
                                                placeholder="Number of years in practice"
                                                min="0"
                                                required
                                              />
                                            </fieldset>
                                          </div>
                                        </div>

                                        <div className="mt-2">

                                          <label className="text-color-2 fw-6 mb-0">
                                            Clinic Name<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="text"
                                                className="tb-my-input"
                                                name="clinicName"
                                                placeholder="Name of your veterinary clinic"
                                                required
                                              />
                                            </fieldset>
                                          </div>
                                        </div>

                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Clinic Address<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input style={{ width: "100%" }}
                                                className="tb-my-input"
                                                name="clinicAddress"
                                                placeholder="Full address of your clinic"
                                                required
                                                rows="3"
                                              />
                                            </fieldset>
                                          </div>
                                        </div>

                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Operating Hours<span className="text-danger">*</span>
                                          </label>
                                          <div className="row mt-3">
                                            <div className="col-md-6">
                                              <label className="text-color-2 fw-6 mb-0">
                                                Start Time<span className="text-danger">*</span>
                                              </label>
                                              <div className="text-wrap flex form-wg">
                                                <fieldset style={{ width: "100%" }}>
                                                  <input
                                                    type="time"
                                                    className="tb-my-input"
                                                    name="startTime"
                                                    required
                                                    value={docTimings.start}
                                                    onChange={(e) => setDocTimings({ ...docTimings, start: e.target.value })}
                                                  />
                                                </fieldset>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="text-color-2 fw-6 mb-0">
                                                End Time<span className="text-danger">*</span>
                                              </label>
                                              <div className="text-wrap flex form-wg">
                                                <fieldset style={{ width: "100%" }}>
                                                  <input
                                                    type="time"
                                                    className="tb-my-input"
                                                    name="endTime"
                                                    required
                                                    value={docTimings.end}
                                                    onChange={(e) => setDocTimings({ ...docTimings, end: e.target.value })}
                                                  />
                                                </fieldset>
                                              </div>
                                            </div>
                                          </div>


                                        </div>


                                        <div className="mt-2">
                                          <label className="text-color-2 fw-6 mb-0">
                                            Consultation Fee (₹)<span className="text-danger">*</span>
                                          </label>
                                          <div className="text-wrap flex form-wg">
                                            <fieldset style={{ width: "100%" }}>
                                              <input
                                                type="number"
                                                className="tb-my-input"
                                                name="consultationFee"
                                                placeholder="Base consultation fee in INR"
                                                min="0"
                                                required
                                              />
                                            </fieldset>
                                          </div>

                                        </div>
                                      </>

                                    )}
                                  </div>
                                  <hr />
                                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div className="lh-16">
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setStep(3); // Next step
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span className="text-color-2" style={{ color: "black" }}>Back</span>
                                      </button>
                                    </div>
                                    <div className="lh-16">
                                      <button
                                        onClick={() => {
                                          setStep(5); // Next step
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span>Complete Registration</span>
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            ) : null}


                            {/* Doctor Complete */}
                            {step === 5 ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Complete</h3>
                                  <h3 className="fw-8 prgs" style={{ color: "#05576e" }}>100%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs4"></div>
                                </div>
                                <form
                                  method="post"
                                  id="contactform"
                                  className="ghrt comment-form form-submit p-3 bg-white"
                                  action="./contact/contact-process.php"
                                  acceptCharset="utf-8"
                                  noValidate="novalidate"
                                >
                                  <section className="pt-0 flat-pricing page">
                                    <div className="container">
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                          <div className="box">
                                            <div className="sub-title fs-30 lh-45 fw-7">
                                              Registration Complete!
                                            </div>

                                            <p
                                              className="texts text-color-2 p-3 fs-20 lh-20 "
                                              style={{
                                                borderRadius: "10px",
                                                backgroundColor: "rgb(228 249 239 / 51%)",
                                                border: "2px solid rgb(130 223 182 / 51%)",
                                                fontFamily: 'sans-serif',
                                                gap:'px'
          
                                                
                                              }}
                                            >
                                              Thank you for registering as a veterinary professional on MyPetMall.
                                              Your profile is under review and you'll receive a confirmation email shortly.
                                            </p>

                                            <div className="button-pricing mb-3">
                                              <a className="sc-button" href="#">
                                                <span>Go to Dashboard</span>
                                              </a>
                                            </div>

                                            <div className="button-pricing">
                                              <a className="sc-button bghkk " href="#">
                                                <span style={{ color: "black" }}>
                                                  Add Your Services
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </form>
                              </div>
                            ) : null}

                          </div>
                        </div>
                      </div>
                    </div>
                  </section>






                  <section className="flat-icon bg-1 pt-4 pb-4">
                    <div className="container6">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="heading-section center pb-5">
                            <h2 style={{ color: "#05576e" }}> How Mypetmall Works</h2>

                            <div className="stepper-wrapper1 pt-5">
                              <div className="stepper-item1 completed">
                                <div className="step-counter1">1</div>
                                <div className="step-content1">
                                  <h6 className="step-name1">Create Account</h6>
                                  <ul className="step-details1">
                                    <li>GSTIN (for GST sellers) or Enrolment ID / UIN (for non-GST sellers)</li>
                                    <li className="pt-1">Bank Account</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="stepper-item1 completed">
                                <div className="step-counter1">2</div>
                                <div className="step-content1">
                                  <h6 className="step-name1">List Products</h6>
                                  <ul className="step-details1">
                                    <li>List the products you want to sell in your supplier panel</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="stepper-item1 completed">
                                <div className="step-counter1">3</div>
                                <div className="step-content1">
                                  <h6 className="step-name1">Get Orders</h6>
                                  <ul className="step-details1">
                                    <li>Start getting orders from crores of Indians actively shopping on our platform.</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="stepper-item1 completed">
                                <div className="step-counter1">4</div>
                                <div className="step-content1">
                                  <h6 className="step-name1">Lowest Cost Shipping</h6>
                                  <ul className="step-details1">
                                    <li>Products are shipped to customers at lowest costs</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="stepper-item1 completed">
                                <div className="step-counter1">5</div>
                                <div className="step-content1">
                                  <h6 className="step-name1">Receive Payments</h6>
                                  <ul className="step-details1">
                                    <li>Payments are deposited directly to your bank account following a 7-day payment cycle from order delivery.</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div style={{ height: "auto" }} className="box">
                            <div className="">
                              <div className="center mb-2">
                                <div className="post-video flex align-center justify-center  relative">
                                  <img
                                    style={{ borderRadius: "10px", height: "500px", width: "400px" }}
                                    className="img-2"
                                    src="https://i.pinimg.com/736x/bd/e2/9b/bde29b28e9f16683c326dcc1358d7a49.jpg"
                                    alt="images"
                                  />
                                  <a
                                    href="https://youtube.com/shorts/NsMKvVdEPkw?si=_8JBLul3e-o5ptAZ"
                                    target="_blank"
                                    className="lightbox-image"
                                  >
                                    <svg
                                      width={11}
                                      height={14}
                                      viewBox="0 0 11 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11 7L3.41715e-07 14L9.53674e-07 -4.80825e-07L11 7Z"
                                        fill="#FFA920"
                                      />
                                    </svg>
                                    <i className="ripple" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="center">
                              <h4 className="text-color-2">Quick Registration</h4>
                              <p className="font-2 text-color-2 fw-6">2:15</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                          <div style={{ height: "auto" }} className="box">
                            <div className="">
                              <div className="center mb-2">
                                <div className="post-video flex align-center justify-center  relative">
                                  <img
                                    style={{ borderRadius: "10px", height: "500px", width: "400px" }}
                                    className="img-2"
                                    src="https://i.pinimg.com/736x/35/17/a0/3517a0756d924f8ba604ea112eca2f2a.jpg"
                                    alt="images"
                                  />
                                  <a
                                    href="https://youtu.be/MLpWrANjFbI"
                                    target="_blank"
                                    className="lightbox-image"
                                  >
                                    <svg
                                      width={11}
                                      height={14}
                                      viewBox="0 0 11 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11 7L3.41715e-07 14L9.53674e-07 -4.80825e-07L11 7Z"
                                        fill="#FFA920"
                                      />
                                    </svg>
                                    <i className="ripple" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="center">
                              <h4 className="text-color-2">Take Care of your Pet</h4>
                              <p className="font-2 text-color-2 fw-6">4:15</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                          <div style={{ height: "auto" }} className="box">
                            <div className="">
                              <div className="center mb-2">
                                <div className="post-video flex align-center justify-center  relative">
                                  <img
                                    style={{ borderRadius: "10px", height: "500px", width: "400px" }}
                                    className="img-2"
                                    src="https://i.pinimg.com/736x/7e/f3/02/7ef302f21d491e387dfe3a962d1668dd.jpg"
                                    alt="images"
                                  />
                                  <a
                                    href="https://youtu.be/MLpWrANjFbI"
                                    target="_blank"
                                    className="lightbox-image"
                                  >
                                    <svg
                                      width={11}
                                      height={14}
                                      viewBox="0 0 11 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11 7L3.41715e-07 14L9.53674e-07 -4.80825e-07L11 7Z"
                                        fill="#FFA920"
                                      />
                                    </svg>
                                    <i className="ripple" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="center">
                              <h4 className="text-color-2">Appoint Doctor</h4>
                              <p className="font-2 text-color-2 fw-6">4:35</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="pt-5 flat-faq flat-accordion fl-faq-content page pb-2">
                    <div className="container6">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="heading-section center pb-5">
                            <h2 style={{ color: "#05576e" }}>Frequently asked questions</h2>
                          </div>
                        </div>

                        {faqData.map((faq, index) => (
                          <div className="col-lg-6" key={index}>
                            <div className="flat-toggle">
                              <div
                                className="toggle-title flex align-center"
                                onClick={() => toggleFAQ(index)}
                                style={{ cursor: "pointer" }}
                              >
                                <HelpOutlineIcon className="m-1" />
                                <div className="fw-6 ml-3">{faq.question}</div>
                                <AddIcon className="btn-toggle" />
                                {/* <div className="btn-toggle" /> */}
                              </div>

                              <div
                                className="toggle-content section-desc"
                                style={{ display: openIndex === index ? "block" : "none" }}
                              >
                                <p className="texts text-color-2">{faq.answer}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      {/* Modal Popup Bid */}
      {status === true ? (
        <aside
          style={{
            position: "fixed",
            bottom: "100px",
            right: "18px",
            zIndex: 2000,
            backgroundColor: "#05576e"
          }}
          className=""
        >
          <div className="inner-side-bar bg-1">
            <div className="widget-rent style bg-1">
              <h3 className="widget-title title-contact">Contact Support</h3>

              <div className="comments">
                <div className="comment-form">
                  <form method="post">
                    <div className="wd-find-select ">
                      <fieldset>
                        <input
                          type="text"
                          name="text"
                          placeholder="Full name *"
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          type="tel"
                          name="tel"
                          placeholder="Phone number *"
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                          required
                        />
                      </fieldset>
                      <fieldset className="message-wrap">
                        <textarea
                          name="message"
                          rows={4}
                          tabIndex={4}
                          placeholder="Your mesage *"
                          defaultValue={""}
                        />
                      </fieldset>
                      <div className="button-box sc-btn-top center flex justify-space">
                        <button
                          onClick={() => setStatus(false)}
                          className="sc-button btn-svg"
                          type="button"
                        >
                          <span>Send message</span>
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.125 6.5025V12.9375C1.125 13.5342 1.36205 14.1065 1.78401 14.5285C2.20597 14.9504 2.77826 15.1875 3.375 15.1875H14.625C15.2217 15.1875 15.794 14.9504 16.216 14.5285C16.6379 14.1065 16.875 13.5342 16.875 12.9375V6.5025L10.179 10.6223C9.82443 10.8404 9.4163 10.9559 9 10.9559C8.5837 10.9559 8.17557 10.8404 7.821 10.6223L1.125 6.5025Z"
                              fill="white"
                            />
                            <path
                              d="M16.875 5.181V5.0625C16.875 4.46576 16.6379 3.89347 16.216 3.47151C15.794 3.04955 15.2217 2.8125 14.625 2.8125H3.375C2.77826 2.8125 2.20597 3.04955 1.78401 3.47151C1.36205 3.89347 1.125 4.46576 1.125 5.0625V5.181L8.4105 9.6645C8.58778 9.77357 8.79185 9.83132 9 9.83132C9.20815 9.83132 9.41222 9.77357 9.5895 9.6645L16.875 5.181Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </aside>
      ) : null}

      <div
        style={{
          position: "fixed",
          bottom: "90px",
          right: "18px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          height: "50px",
          backgroundColor: "#05576e",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={handleSupportClick}
      >
        <LuMessageCircleMore size={30} color="#fff" />
      </div>
      {/* <a id="scroll-top" className="button-go show" /> */}
      {/* Javascript */}

      <div
        className="modal fade popup"
        id="popup_bid2314"
        tabIndex={-1}
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content ">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body  style2">
              <div
                className="wrap-modal flex"
                style={{ height: "100%", width: "100%" }}
              >
                <video
                  src="http://157.66.191.24:3089/uploads/kalpataru-srishti-3204.mp4"
                  controls
                  autoPlay
                  muted
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowFullScreen
                  allowTransparency="true"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer__area m-0">

          <div className="footer__top footer__top-three fix">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="footer__widget">
                    <div className="footer__logo">
                      <a href="index-5.html">
                        <img src="assets/img/logo/w_logo.png" alt="Logo" />
                      </a>
                    </div>
                    <div className="footer__content footer__content-two">
                      <p>
                        Sell your products to crores of customers on My PetsMall at 0% commission
                      </p>
                    </div>

                    {/* <button
                      className="btn btn-primary text-black"
                      style={{ height: "40px", backgroundColor: "white" }}
                      type="button"
                    >
                      Start Selling
                    </button> */}
                    {/* <div className="footer__social">
                      <h6 className="title">Follow Us On:</h6>
                      <ul className="list-wrap">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.whatsapp.com/" target="_blank">
                            <i className="fab fa-whatsapp" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/" target="_blank">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__widget">
                    <h4 className="footer__widget-title">Sell on Petmall</h4>
                    <div className="footer__link">
                      <ul className="list-wrap">
                        <li>
                          <a href="account.html">Sell Online</a>
                        </li>
                        <li>
                          <a href="about.html">Pricing & Commission</a>
                        </li>
                        <li>
                          <a href="contact.html">How it works</a>
                        </li>
                        <li>
                          <a href="reservation.html">Shipping & Returns</a>
                        </li>
                        <li>
                          <a href="faq.html">Grow Your Business</a>
                        </li>
                        <li>
                          <a href="register.html">Learning Hub</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__widget">
                    <h4 className="footer__widget-title">Contact Us</h4>
                    <div className="footer__contact">
                      <ul className="list-wrap">
                        {/* <li>
                          555 A, East Manster Street, Ready Halley Neon, Uk 4512
                        </li> */}
                        {/* <li>
                          <a href="tel:0123456789">+00 123 45678 44</a>
                        </li> */}
                        <li>
                          <a href="mailto:Supportinfo@gmail.com">
                            Supportinfo@gmail.com
                          </a>

                          <div className="footer__social">
                            <h6 className="title">Follow Us On:</h6>
                            <ul className="list-wrap">
                              <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="https://twitter.com/" target="_blank">
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.whatsapp.com/" target="_blank">
                                  <i className="fab fa-whatsapp" />
                                </a>
                              </li>
                              <li style={{ paddingBottom: "10px" }}>
                                <a href="https://www.instagram.com/" target="_blank">
                                  <i className="fab fa-instagram" />
                                </a>
                              </li>

                            </ul>
                          </div>

                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__shape-wrap">
              <img
                src="assets/img/images/footer_shape01.png"
                alt="img"
                data-aos="fade-up-right"
                data-aos-delay={400}
              />
              <img
                src="assets/img/images/footer_shape02.png"
                alt="img"
                data-aos="fade-up-left"
                data-aos-delay={400}
              />
            </div>
          </div>
          <div className="footer__bottom footer__bottom-two">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="copyright-text copyright-text-three">
                    <p>Copyright © 2024. All Rights Reserved.</p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="footer__bottom-menu footer__bottom-menu-two">
                    <ul className="list-wrap">
                      <li>
                        <a href="contact.html">Support</a>
                      </li>
                      <li>
                        <a href="contact.html">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="contact.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="contact.html">Career</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};


export default Register;