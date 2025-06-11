import React, { useState } from "react";
import Select from "react-select";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdOutlineDone } from "react-icons/md";
import { LiaStopwatchSolid } from "react-icons/lia";
import { RiArrowRightLine } from "react-icons/ri";
import { WiTime4 } from "react-icons/wi";
import { FaRegStar, FaBoxOpen, FaUser, FaBuilding, FaMapMarkerAlt, FaProcedures } from "react-icons/fa";
import { FaQuestionCircle } from 'react-icons/fa';
import './apps.css'
import './add.css'
import './responsive.css'
// import './furniture.css'
import { FiHome } from "react-icons/fi";
import { LuSofa } from "react-icons/lu";
import { LuHammer } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import { TbCategoryFilled } from "react-icons/tb";
import { GrCompliance } from "react-icons/gr";
import { TbIcons } from "react-icons/tb";
import { IoMdPersonAdd } from "react-icons/io";
import { BiSolidContact } from "react-icons/bi";
import { FaRegAddressBook } from "react-icons/fa";
import { MdSwitchAccount } from "react-icons/md";
import { HiAcademicCap, HiMiniIdentification } from "react-icons/hi2";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { FaBusinessTime } from "react-icons/fa6";
import { MdSubscriptions } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaUserMd } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaClinicMedical } from "react-icons/fa";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AddIcon from '@mui/icons-material/Add';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography from '@mui/joy/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Box from '@mui/material/Box'; // or '@mui/joy/Box' if using Joy UI
import List from '@mui/material/List'; // or '@mui/joy/List'
import ListItem from '@mui/material/ListItem'


const Register = () => {
  const [activeTab, setActiveTab] = useState("customer");
  const apiUrl = import.meta.env.VITE_API_URL;
  const api = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const [hide, setHide] = useState("show");
  const [hidepersonal, setHidePersonal] = useState("Hide");
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
  const [docOTP, setDocOTP] = useState("");

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



  return (
    <div >


       <div style={{ width: "100%"}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-0" style={{ width: "100%", height: "auto" }}>
        <div className="container-fluid d-flex justify-content-between align-items-center px-4 p-0">

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
        <section className="registration__area-two " style={{ padding: "10px" }}>
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

                  <section
                    className="flat-contact-page checks  w-100 w-md-75 w-lg-60 w-xl-50 mx-auto section1"
                  >

                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 mb-4">
                          <div id="comments" className="comments cfd"  >
                            {hidepersonal === "Hide" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>MyPetMall Services</h3>
                                </div>

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
                                        <FiHome className="setod" />
                                      </div>
                                      <div className="fs-22" style={{ color: "#05576e" }}>
                                        Services <br />
                                        <font className="text-secondary fw-5 fs-15">
                                          Please select the service
                                        </font>
                                        <hr />
                                        <div className="mt-3">
                                          <h3 className="mb-2 fw-7">
                                            <button
                                              onClick={() => setHidePersonal("DoctorListings")}
                                              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit', color: "#05576e" }}
                                            >
                                              Doctor Listings
                                            </button>
                                          </h3>
                                          <hr />

                                          <h3 className="mb-2 fw-7">
                                            <button
                                              onClick={() => setHidePersonal("VendorListings")}
                                              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit', color: "#05576e" }}
                                            >
                                              Vendor Listings
                                            </button>
                                          </h3>
                                          <hr />

                                          <h3 className="mb-2 fw-7">
                                            <button
                                              onClick={() => setHidePersonal("Veterinary")}
                                              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit', color: "#05576e" }}
                                            >
                                              Veterinary
                                            </button>
                                          </h3>
                                        </div>
                                      </div>
                                      <hr />
                                    </div>
                                  </h3>

                                  <hr />
                                  <div className="center">
                                    <h4 className="fw-6">
                                      Click{" "}
                                      <span className="prgs fs-18 fw-6" >
                                        "Start Your Journey"
                                      </span>{" "}
                                      button
                                    </h4>
                                    <h4 className="fw-6">
                                      Select{" "}
                                      <span className="prgs fs-18 fw-6">
                                        "Pet Services"
                                      </span>{" "}
                                      from main categories
                                    </h4>
                                  </div>
                                  <hr />
                                  <div style={{ justifyItems: "end" }}>
                                    <div className="lh-16">
                                      <button
                                        className="sc-button btn-icon" style={{ backgroundColor: "#05576e" }}
                                        name="submit"
                                        type="button"
                                      >
                                        <span>Start Your Journey</span>
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            ) : null}

                            {/* Doctor Listings Flow */}
                            {hidepersonal === "DoctorListings" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">0%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 0 of 4</p>
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
                                        <hr />
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
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setHidePersonal("Hide");
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span className="text-color-1" style={{ color: "black" }}>Back</span>
                                      </button>
                                    </div>
                                    <div className="lh-16">
                                      <button
                                        onClick={() => {
                                          setHidePersonal("DoctorProfessionalDetails");
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

                            {/* Doctor Professional Details */}
                            {hidepersonal === "DoctorProfessionalDetails" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">25%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs1"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 1 of 4</p>
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
                                        <HiAcademicCap className="setod" />
                                      </div>
                                      <div className="fs-20">
                                        Professional & License Details <br />
                                        <font className="text-secondary fw-5">
                                          Please provide your professional information
                                        </font>
                                      </div>
                                    </div>
                                  </h3>

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

                                  <hr />
                                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div className="lh-16">
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setHidePersonal("DoctorListings");
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
                                          setHidePersonal("DoctorClinicInfo");
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
                            {hidepersonal === "DoctorClinicInfo" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">50%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs2"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 2 of 4</p>
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
                                        <FaClinicMedical className="setod" />
                                      </div>
                                      <div className="fs-20">
                                        Clinic/Practice Information <br />
                                        <font className="text-secondary fw-5">
                                          Please provide your clinic details
                                        </font>
                                      </div>
                                    </div>
                                  </h3>

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

                                  <label className="text-color-2 fw-6 mb-0">
                                    Available Days<span className="text-danger">*</span>
                                  </label>
                                  <div className="form-group wdth">
                                    <div className="d-flex flex-wrap gap-2">
                                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                        <label key={day} className="d-flex align-items-center">
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

                                  <div className="row">
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

                                  <label className="text-color-2 fw-6 mb-0">
                                    Clinic Location (Coordinates)<span className="text-danger">*</span>
                                  </label>
                                  {/* <div className="row">
                                    <div className="col-md-6">
                                      <div className="text-wrap flex form-wg">
                                        <fieldset style={{ width: "100%" }}>
                                          <input
                                            type="number"
                                            step="any"
                                            className="tb-my-input"
                                            name="latitude"
                                            placeholder="Latitude"
                                            required
                                            value={latitude}
                                            onChange={(e) => setLatitude(e.target.value)}
                                          />
                                        </fieldset>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="text-wrap flex form-wg">
                                        <fieldset style={{ width: "100%" }}>
                                          <input
                                            type="number"
                                            step="any"
                                            className="tb-my-input"
                                            name="longitude"
                                            placeholder="Longitude"
                                            required
                                            value={longitude}
                                            onChange={(e) => setLongitude(e.target.value)}
                                          />
                                        </fieldset>
                                      </div>
                                    </div>
                                  </div> */}
                                  <div className="mb-3">
                                    <button
                                      type="button"
                                      className="sc-button btn-icon"
                                      onClick={() => {
                                        // Add geolocation capture logic here
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
                                  {/* 
                                  <label className="text-color-2 fw-6 mb-0">
                                    Latitude
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="number"
                                        className="tb-my-input"
                                        name="latitude"
                                        placeholder="Latitude coordinates"
                                        step="any"
                                        value={latitude}
                                        onChange={(e) => setLatitude(e.target.value)}
                                      />
                                    </fieldset>
                                  </div>

                                  <label className="text-color-2 fw-6 mb-0">
                                    Longitude
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="number"
                                        className="tb-my-input"
                                        name="longitude"
                                        placeholder="Longitude coordinates"
                                        step="any"
                                        value={longitude}
                                        onChange={(e) => setLongitude(e.target.value)}
                                      />
                                    </fieldset>
                                  </div> */}
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
                                  {/* <div className="text-center">
                                    <button
                                      type="button"
                                      className="sc-button bghkk mt-2"
                                      // onClick={handleGetLocation}
                                    >
                                      <span style={{ color: "black" }}>Get My Current Location</span>
                                    </button>
                                  </div> */}

                                  <hr />
                                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div className="lh-16">
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setHidePersonal("DoctorProfessionalDetails");
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
                                          setHidePersonal("DoctorServices");
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

                            {/* Doctor Services */}
                            {hidepersonal === "DoctorServices" ? (
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
                                  <h3 className="mb-0">
                                    <div className="flex mb-3">
                                      <div className="fgr">
                                        <FaProcedures className="setod" />
                                      </div>
                                      <div className="fs-20">
                                        Services Offered <br />
                                        <font className="text-secondary fw-5">
                                          Please select the services you provide
                                        </font>
                                      </div>
                                    </div>
                                  </h3>

                                  <div className="form-group wdth">
                                    <div className="d-flex flex-column gap-2">
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
                                        <span className="mt-1 fs-13 fw-6 ms-2">General Checkups</span>
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
                                        <span className="mt-1 fs-13 fw-6 ms-2">Vaccinations</span>
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
                                        <span className="mt-1 fs-13 fw-6 ms-2">Surgery</span>
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
                                        <span className="mt-1 fs-13 fw-6 ms-2">Dental Care</span>
                                      </label>
                                    </div>
                                  </div>

                                  <label className="text-color-2 fw-6 mb-0">
                                    OTP Verification<span className="text-danger">*</span>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="number"
                                        className="tb-my-input"
                                        name="otp"
                                        placeholder="Enter OTP sent to your phone/email"
                                        required
                                        value={docOTP}
                                        onChange={(e) => setDocOTP(e.target.value)}
                                      />
                                    </fieldset>
                                  </div>
                                  <div className="text-center mt-2">
                                    <button
                                      type="button"
                                      className="sc-button bghkk"
                                    // onClick={handleResendOTP}
                                    >
                                      <span style={{ color: "black" }}>Resend OTP</span>
                                    </button>
                                  </div>

                                  <hr />
                                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div className="lh-16">
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setHidePersonal("DoctorClinicInfo");
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
                                          setHidePersonal("DoctorComplete");
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
                            {hidepersonal === "DoctorComplete" ? (
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
                                              className="texts text-color-2 p-3 fs-20 lh-20"
                                              style={{
                                                borderRadius: "10px",
                                                backgroundColor: "rgb(228 249 239 / 51%)",
                                                border: "2px solid rgb(130 223 182 / 51%)",
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




                            {/* Vendor Listings Flow */}
                            {hidepersonal === "VendorListings" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">0%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 0 of 5</p>
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
                                        <FaUser className="setod" />
                                      </div>
                                      <div className="fs-20">
                                        Personal Information <br />
                                        <font className="text-secondary fw-5">
                                          Basic identity and account credentials
                                        </font>
                                        <hr />
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
                                        placeholder="Your full legal name"
                                        required
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
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
                                        placeholder="Your email address"
                                        required
                                        value={userEmail}
                                        onChange={(e) => setUserEmail(e.target.value)}
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
                                        placeholder="Mobile number"
                                        required
                                        value={userPhone}
                                        onChange={(e) => setUserPhone(e.target.value)}
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
                                        placeholder="Create a strong password"
                                        required
                                        value={userPassword}
                                        onChange={(e) => setUserPassword(e.target.value)}
                                      />
                                      <small className="text-muted">Minimum 8 characters with a symbol and number</small>
                                    </fieldset>
                                  </div>

                                  <hr />
                                  <div className="jsy">
                                    <div>
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setHidePersonal("Hide");
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span className="text-color-2">Back</span>
                                      </button>
                                    </div>
                                    <div className="lh-16">
                                      <button
                                        onClick={() => {
                                          setHidePersonal("VendorBusiness");
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

                            {/* Vendor Business Information */}
                            {hidepersonal === "VendorBusiness" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">25%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs1"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 1 of 5</p>
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
                                        <FaBuilding className="setod" />
                                      </div>
                                      <div className="fs-20">
                                        Business Information <br />
                                        <font className="text-secondary fw-5">
                                          Official business details for legal compliance
                                        </font>
                                      </div>
                                    </div>
                                  </h3>

                                  <label className="text-color-2 fw-6 mb-0">
                                    Business Name<span className="text-danger">*</span>
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

                                  <label className="text-color-2 fw-6 mb-0">
                                    Business Type<span className="text-danger">*</span>
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

                                  <hr />
                                  <div className="jsy">
                                    <div>
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setHidePersonal("VendorListings");
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span className="text-color-2">Back</span>
                                      </button>
                                    </div>
                                    <div className="lh-16">
                                      <button
                                        onClick={() => {
                                          setHidePersonal("VendorStore");
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

                            {/* Vendor Store Details */}
                            {hidepersonal === "VendorStore" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">50%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs2"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 2 of 5</p>
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
                                        <FaStore className="setod" />
                                      </div>
                                      <div className="fs-20">
                                        Store Details <br />
                                        <font className="text-secondary fw-5">
                                          Information shown to customers
                                        </font>
                                      </div>
                                    </div>
                                  </h3>

                                  <label className="text-color-2 fw-6 mb-0">
                                    Store Name<span className="text-danger">*</span>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="text"
                                        className="tb-my-input"
                                        name="storeName"
                                        placeholder="Public-facing store name"
                                        required
                                      />
                                    </fieldset>
                                  </div>

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

                                  <label className="text-color-2 fw-6 mb-0">
                                    Store Email<span className="text-danger">*</span>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="email"
                                        className="tb-my-input"
                                        name="storeEmail"
                                        placeholder="Email for store communications"
                                        required
                                      />
                                    </fieldset>
                                  </div>
                                  {/* 
                                  <label className="text-color-2 fw-6 mb-0">
                                    Contact Person<span className="text-danger">*</span>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }} >
                                      <input style={{ width: "100%" }}
                                        type="text"
                                        className="tb-my-input"
                                        name="contactPerson"
                                        placeholder="Name of representative"
                                        required
                                      />
                                    </fieldset>
                                  </div> */}

                                  <label className="text-color-2 fw-6 mb-0">
                                    Contact Phone<span className="text-danger">*</span>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input style={{ width: "100%" }}
                                        type="tel"
                                        className="tb-my-input"
                                        name="contactPhone"
                                        placeholder="Phone for store inquiries"
                                        required
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
                                    Product Categories<span className="text-danger">*</span>
                                  </label>
                                  <div className="form-group wdth">
                                    <div>
                                      {["Pet Food", "Toys", "Grooming", "Accessories", "Health", "Apparel"].map(category => (
                                        <label className="flex" key={category}>
                                          <input
                                            className="chkhgh"
                                            name="categories"
                                            type="checkbox"
                                            value={category}
                                          />
                                          <span className="btn-checkbox" />
                                          <span className="mt-1 fs-13 fw-6" style={{ marginLeft: "5px" }}>
                                            {category}
                                          </span>
                                        </label>
                                      ))}
                                    </div>
                                  </div>

                                  <hr />
                                  <div className="jsy">
                                    <div>
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setHidePersonal("VendorBusiness");
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span className="text-color-2">Back</span>
                                      </button>
                                    </div>
                                    <div className="lh-16">
                                      <button
                                        onClick={() => {
                                          setHidePersonal("VendorVerification");
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

                            {/* Vendor Verification */}
                            {hidepersonal === "VendorVerification" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">75%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs3"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 3 of 5</p>
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
                                        <HiMiniIdentification className="setod" />
                                      </div>
                                      <div className="fs-20">
                                        Verification <br />
                                        <font className="text-secondary fw-5">
                                          Upload required documents
                                        </font>
                                      </div>
                                    </div>
                                  </h3>

                                  <label className="text-color-2 fw-6 mb-0">
                                    Profile Picture/Logo<span className="text-danger">*</span>
                                    <small className="text-muted"> (JPG/PNG, max 5MB)</small>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="file"
                                        className="tb-my-input"
                                        name="profilePicture"
                                        accept=".jpg,.jpeg,.png"
                                        required
                                      />
                                    </fieldset>
                                  </div>

                                  <label className="text-color-2 fw-6 mb-0">
                                    Business License<span className="text-danger">*</span>
                                    <small className="text-muted"> (PDF/JPG/PNG, max 5MB)</small>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="file"
                                        className="tb-my-input"
                                        name="businessLicense"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        required
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
                                    Additional Documents (if any)
                                    <small className="text-muted"> (PDF/JPG/PNG, max 5MB each)</small>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="file"
                                        className="tb-my-input"
                                        name="additionalDocuments"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        multiple
                                      />
                                    </fieldset>
                                  </div>

                                  <label className="text-color-2 fw-6 mb-0">
                                    Store Images (3-5 photos)<span className="text-danger">*</span>
                                    <small className="text-muted"> (JPG/PNG, max 5MB each)</small>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="file"
                                        className="tb-my-input"
                                        name="storeImages"
                                        accept=".jpg,.jpeg,.png"
                                        multiple
                                        required
                                      />
                                    </fieldset>
                                  </div>

                                  <hr />
                                  <div className="jsy">
                                    <div>
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setHidePersonal("VendorStore");
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span className="text-color-2">Back</span>
                                      </button>
                                    </div>
                                    <div className="lh-16">
                                      <button
                                        onClick={() => {
                                          setHidePersonal("VendorLocation");
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

                            {/* Vendor Location */}
                            {hidepersonal === "VendorLocation" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">90%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs4"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 4 of 5</p>
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
                                        <FaMapMarkerAlt className="setod" />
                                      </div>
                                      <div className="fs-20">
                                        Location Details <br />
                                        <font className="text-secondary fw-5">
                                          For logistics and mapping
                                        </font>
                                      </div>
                                    </div>
                                  </h3>

                                  <div className="mb-3">
                                    <button
                                      type="button"
                                      className="sc-button btn-icon"
                                      onClick={() => {
                                        // Add geolocation capture logic here
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
                                  {/* 
                                  <label className="text-color-2 fw-6 mb-0">
                                    Latitude
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="number"
                                        className="tb-my-input"
                                        name="latitude"
                                        placeholder="Latitude coordinates"
                                        step="any"
                                        value={latitude}
                                        onChange={(e) => setLatitude(e.target.value)}
                                      />
                                    </fieldset>
                                  </div>

                                  <label className="text-color-2 fw-6 mb-0">
                                    Longitude
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="number"
                                        className="tb-my-input"
                                        name="longitude"
                                        placeholder="Longitude coordinates"
                                        step="any"
                                        value={longitude}
                                        onChange={(e) => setLongitude(e.target.value)}
                                      />
                                    </fieldset>
                                  </div> */}
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
                                  <hr />
                                  <div className="jsy">
                                    <div>
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setHidePersonal("VendorVerification");
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span className="text-color-2">Back</span>
                                      </button>
                                    </div>
                                    <div className="lh-16">
                                      <button
                                        onClick={() => {
                                          setHidePersonal("VendorComplete");
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

                            {/* Vendor Complete */}
                            {hidepersonal === "VendorComplete" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Complete</h3>
                                  <h3 className="fw-8 prgs">100%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs5"></div>
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
                                              {/* <img
                                                height={60}
                                                width={60}
                                                src="assets/checkmark.png"
                                                alt="Checkmark"
                                              />{" "} */}
                                              Registration Complete!
                                            </div>

                                            <p
                                              className="texts text-color-2 p-3 fs-20 lh-20"
                                              style={{
                                                borderRadius: "10px",
                                                backgroundColor: "rgb(228 249 239 / 51%)",
                                                border: "2px solid rgb(130 223 182 / 51%)",
                                              }}
                                            >
                                              Thank you for registering as a vendor on MyPetMall.
                                              Your account is under review and you'll receive a confirmation email shortly.
                                            </p>

                                            <div className="button-pricing mb-3">
                                              <a className="sc-button" href="#">
                                                <span>Go to Dashboard</span>
                                              </a>
                                            </div>

                                            <div className="button-pricing">
                                              <a className="sc-button bghkk " href="#">
                                                <span className="text-color-2 " style={{ color: "black" }}>
                                                  Add Your Products
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






                            {/* Veterinary Services Flow */}
                            {hidepersonal === "Veterinary" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">20%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs1"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 1 of 5</p>
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
                                        <FaUser className="setod" />
                                      </div>
                                      <div className="fs-20">
                                        Personal & Account Information <br />
                                        <font className="text-secondary fw-5">
                                          Your basic details for account creation
                                        </font>
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
                                        placeholder="Your full name"
                                        required
                                      />
                                    </fieldset>
                                  </div>

                                  <label className="text-color-2 fw-6 mb-0">
                                    Email Address<span className="text-danger">*</span>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="email"
                                        className="tb-my-input"
                                        name="email"
                                        placeholder="Email for login and communication"
                                        required
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
                                        placeholder="Active mobile number for OTP"
                                        required
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
                                        placeholder="Min 8 chars with 1 number & special char"
                                        required
                                      />
                                    </fieldset>
                                  </div>

                                  <label className="text-color-2 fw-6 mb-0">
                                    Profile Picture<span className="text-danger">*</span>
                                    <small className="text-muted"> (JPG/PNG, max 5MB)</small>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="file"
                                        className="tb-my-input"
                                        name="profilePicture"
                                        accept=".jpg,.jpeg,.png"
                                        required
                                      />
                                    </fieldset>
                                  </div>

                                  <hr />
                                  <div className="jsy">
                                    <div>
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setHidePersonal("Hide");
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span className="text-color-2">Back</span>
                                      </button>
                                    </div>
                                    <div className="lh-16">
                                      <button
                                        onClick={() => {
                                          setHidePersonal("VeterinaryProfessional");
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

                            {/* Veterinary Professional Information */}
                            {hidepersonal === "VeterinaryProfessional" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">40%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs2"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 2 of 5</p>
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
                                        Professional Information <br />
                                        <font className="text-secondary fw-5">
                                          Your veterinary qualifications and credentials
                                        </font>
                                      </div>
                                    </div>
                                  </h3>

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

                                  <label className="text-color-2 fw-6 mb-0">
                                    Education/Degree<span className="text-danger">*</span>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="text"
                                        className="tb-my-input"
                                        name="education"
                                        placeholder="e.g. B.V.Sc, M.V.Sc"
                                        required
                                      />
                                    </fieldset>
                                  </div>

                                  <label className="text-color-2 fw-6 mb-0">
                                    College/Institution<span className="text-danger">*</span>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="text"
                                        className="tb-my-input"
                                        name="college"
                                        placeholder="Where you studied"
                                        required
                                      />
                                    </fieldset>
                                  </div>

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

                                  <label className="text-color-2 fw-6 mb-0">
                                    Specialization<span className="text-danger">*</span>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="text"
                                        className="tb-my-input"
                                        name="specialization"
                                        placeholder="e.g. small animals, surgery, etc."
                                        required
                                      />
                                    </fieldset>
                                  </div>

                                  <hr />
                                  <div className="jsy">
                                    <div>
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setHidePersonal("Veterinary");
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span className="text-color-2">Back</span>
                                      </button>
                                    </div>
                                    <div className="lh-16">
                                      <button
                                        onClick={() => {
                                          setHidePersonal("VeterinaryClinic");
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

                            {/* Veterinary Clinic Information */}
                            {hidepersonal === "VeterinaryClinic" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">60%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs3"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 3 of 5</p>
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
                                        <FaClinicMedical className="setod" />
                                      </div>
                                      <div className="fs-20">
                                        Clinic Information <br />
                                        <font className="text-secondary fw-5">
                                          Details about your veterinary practice
                                        </font>
                                      </div>
                                    </div>
                                  </h3>

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

                                  <label className="text-color-2 fw-6 mb-0">
                                    Services Offered<span className="text-danger">*</span>
                                  </label>
                                  <div className="form-group wdth">
                                    <div>
                                      {["General Checkups", "Vaccinations", "Surgery", "Emergency Care", "Dental Care", "Grooming", "Diagnostics"].map(service => (
                                        <label className="flex" key={service}>
                                          <input
                                            className="chkhgh"
                                            name="services"
                                            type="checkbox"
                                            value={service}
                                          />
                                          <span className="btn-checkbox" />
                                          <span className="mt-1 fs-13 fw-6" style={{ marginLeft: "5px" }}>
                                            {service}
                                          </span>
                                        </label>
                                      ))}
                                    </div>
                                  </div>

                                  <label className="text-color-2 fw-6 mb-0">
                                    Operating Hours<span className="text-danger">*</span>
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="text"
                                        className="tb-my-input"
                                        name="operatingHours"
                                        placeholder="e.g. 9:00 AM - 6:00 PM"
                                        required
                                      />
                                    </fieldset>
                                  </div>

                                  <label className="text-color-2 fw-6 mb-0">
                                    Available Days<span className="text-danger">*</span>
                                  </label>
                                  <div className="form-group wdth">
                                    <div>
                                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
                                        <label className="flex" key={day}>
                                          <input
                                            className="chkhgh"
                                            name="availableDays"
                                            type="checkbox"
                                            value={day}
                                          />
                                          <span className="btn-checkbox" />
                                          <span className="mt-1 fs-13 fw-6" style={{ marginLeft: "5px" }}>
                                            {day}
                                          </span>
                                        </label>
                                      ))}
                                    </div>
                                  </div>

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

                                  <hr />
                                  <div className="jsy">
                                    <div>
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setHidePersonal("VeterinaryProfessional");
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span className="text-color-2">Back</span>
                                      </button>
                                    </div>
                                    <div className="lh-16">
                                      <button
                                        onClick={() => {
                                          setHidePersonal("VeterinaryLocation");
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

                            {/* Veterinary Location */}
                            {hidepersonal === "VeterinaryLocation" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                  <h3 className="fw-8 prgs">80%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs4"></div>
                                </div>
                                <p className="fs-18 mb-3">Step 4 of 5</p>
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
                                        <FaMapMarkerAlt className="setod" />
                                      </div>
                                      <div className="fs-20">
                                        Location Details <br />
                                        <font className="text-secondary fw-5">
                                          For maps and local search
                                        </font>
                                      </div>
                                    </div>
                                  </h3>

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

                                  {/* <label className="text-color-2 fw-6 mb-0">
                                    Latitude
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="number"
                                        className="tb-my-input"
                                        name="latitude"
                                        placeholder="Latitude coordinates"
                                        step="any"
                                        value={latitude}
                                        onChange={(e) => setLatitude(e.target.value)}
                                        required
                                      />
                                    </fieldset>
                                  </div>

                                  <label className="text-color-2 fw-6 mb-0">
                                    Longitude
                                  </label>
                                  <div className="text-wrap flex form-wg">
                                    <fieldset style={{ width: "100%" }}>
                                      <input
                                        type="number"
                                        className="tb-my-input"
                                        name="longitude"
                                        placeholder="Longitude coordinates"
                                        step="any"
                                        value={longitude}
                                        onChange={(e) => setLongitude(e.target.value)}
                                        required
                                      />
                                    </fieldset>
                                  </div> */}

                                  <div className="mr-2 mt-3">
                                    {latitude && longitude && (
                                      <iframe
                                        title="Google Map"
                                        width="100%"
                                        height="300"
                                        style={{ border: 1 }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src={`https://www.google.com/maps?q=${latitude},${longitude}&output=embed`}
                                      ></iframe>
                                    )}
                                  </div>

                                  <hr />
                                  <div className="jsy">
                                    <div>
                                      <button
                                        style={{ backgroundColor: "rgb(229 228 228)" }}
                                        onClick={() => {
                                          setHidePersonal("VeterinaryClinic");
                                        }}
                                        className="sc-button btn-icon"
                                        name="submit"
                                        type="button"
                                      >
                                        <span className="text-color-2">Back</span>
                                      </button>
                                    </div>
                                    <div className="lh-16">
                                      <button
                                        onClick={() => {
                                          setHidePersonal("VeterinaryComplete");
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

                            {/* Veterinary Complete */}
                            {hidepersonal === "VeterinaryComplete" ? (
                              <div className="respond-comment">
                                <div className="jsy">
                                  <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Complete</h3>
                                  <h3 className="fw-8 prgs">100%</h3>
                                </div>
                                <div className="w3-border mb-1 bgh">
                                  <div className="w3-grey ert prgs5"></div>
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
                                              className="texts text-color-2 p-3 fs-20 lh-20"
                                              style={{
                                                borderRadius: "10px",
                                                backgroundColor: "rgb(228 249 239 / 51%)",
                                                border: "2px solid rgb(130 223 182 / 51%)",
                                              }}
                                            >
                                              Thank you for registering as a veterinary professional on MyPetMall.
                                              Your account is under review and you'll receive a confirmation email shortly.
                                            </p>

                                            <div className="button-pricing mb-3">
                                              <a className="sc-button" href="#">
                                                <span>Go to Dashboard</span>
                                              </a>
                                            </div>

                                            <div className="button-pricing">
                                              <a className="sc-button bghkk " href="#">
                                                <span className="text-color-2" style={{ color: "black" }}>
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